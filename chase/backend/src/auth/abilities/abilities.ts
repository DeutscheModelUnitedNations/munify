import { type PureAbility, AbilityBuilder } from "@casl/ability";
import { createPrismaAbility, type PrismaQuery } from "./casl-prisma";
import type { Session } from "../session";
import type { db } from "../../../prisma/db";
import { appConfiguration } from "../../util/config";

const actions = [
  "list",
  "read",
  "create",
  "update",
  "delete",
] as const;

/**
 * Actions which can be run on entities in the system:
 *
 * - `list`: List all entities of a type
 * - `read`: Read a single entity
 * - `create`: Create a new entity
 * - `update`: Update an entity
 * - `status-update`: Update the status of an entity (non critical data, such as state of debate for committees)
 * - `delete`: Delete an entity
 */
export type Action = (typeof actions)[number];

type WithTypename<T extends object, TName extends string> = T & {
  __typename: TName;
};
type TaggedSubjects<T extends Record<string, Record<string, unknown>>> =
  | keyof T
  | { [K in keyof T]: WithTypename<T[K], K & string> }[keyof T];

type AppAbility = PureAbility<
  [
    Action,
    TaggedSubjects<{
      AgendaItem: Awaited<
        ReturnType<(typeof db.agendaItem)["findUniqueOrThrow"]>
      >;
      Conference: Awaited<
        ReturnType<(typeof db.conference)["findUniqueOrThrow"]>
      >;
      ConferenceMember: Awaited<
        ReturnType<(typeof db.conferenceMember)["findUniqueOrThrow"]>
      >;
      Committee: Awaited<
        ReturnType<(typeof db.committee)["findUniqueOrThrow"]>
      >;
      CommitteeMember: Awaited<
        ReturnType<(typeof db.committeeMember)["findUniqueOrThrow"]>
      >;
      Delegation: Awaited<
        ReturnType<(typeof db.delegation)["findUniqueOrThrow"]>
      >;
      Message: Awaited<ReturnType<(typeof db.message)["findUniqueOrThrow"]>>;
      SpeakerOnList: Awaited<
        ReturnType<(typeof db.speakerOnList)["findUniqueOrThrow"]>
      >;
    }>,
  ],
  PrismaQuery
>;

export const defineAbilitiesForSession = (session: Session) => {
  const {
    can,
    // cannot
    build,
  } = new AbilityBuilder<AppAbility>(createPrismaAbility);

  if (session.data?.loggedIn) {
    if (appConfiguration.development) {
      console.info("Development mode: granting all permissions");
      // biome-ignore lint/suspicious/noExplicitAny: https://casl.js.org/v6/en/guide/intro#basics
      can("manage" as any, "all" as any);
    }

    can("list", "Conference");
    can("create", "Conference"); // also requires creation token
    if (session.data.user) {
      const user = session.data.user;
      can("read", "Conference", {
        OR: [
          { members: { some: { user: { id: user.id } } } },
          {
            committees: {
              some: { members: { some: { user: { id: user.id } } } },
            },
          },
        ],
      });
      can(["update", "delete"], "Conference", {
        members: { some: { user: { id: user.id }, role: "ADMIN" } },
      });

      // TODO

      // example for field restrictions
      can(
        "update",
        "Committee",
        [ // only allow updating these fields
          "status",
          "statusHeadline",
          "statusUntil",
          "stateOfDebate",
          "whiteboardContent",
        ],
        {
          conference: {
            members: {
              some: {
                user: { id: user.id },
                role: {
                  in: [
                    "ADMIN",
                    "CHAIR",
                    "COMMITTEE_ADVISOR",
                    "MISCELLANEOUS_TEAM",
                    "SECRETARIAT",
                  ],
                },
              },
            },
          },
        },
      );
    }
  }

  return build({
    detectSubjectType: (object) => object.__typename,
  });
};