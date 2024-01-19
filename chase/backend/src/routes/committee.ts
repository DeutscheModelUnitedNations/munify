import { t, Elysia } from "elysia";
import { db } from "../../prisma/db";
import { committeeRoleGuard } from "../auth/guards/committeeRoles";
import { conferenceRoleGuard } from "../auth/guards/conferenceRoles";
import { openApiTag } from "../util/openApiTags";
import { Committee } from "../../prisma/generated/schema";

const CommitteeWithoutRelations = t.Omit(Committee, [
  "conference",
  "members",
  "parent",
  "subCommittees",
  "agendaItems",
  "parentId",
]);

export const committee = new Elysia({
  prefix: "/conference/:conferenceId",
})
  .use(conferenceRoleGuard)
  .use(committeeRoleGuard)
  .get(
    "/committee",
    async ({ params: { conferenceId } }) => {
      return db.committee.findMany({
        where: {
          conferenceId,
        },
      });
    },
    {
      hasConferenceRole: "any",
      response: t.Array(CommitteeWithoutRelations),
      detail: {
        description: "Get all committees in this conference",
        tags: [openApiTag(import.meta.path)],
      },
    },
  )
  .post(
    "/committee",
    async ({ body, params: { conferenceId } }) => {
      return db.committee.create({
        data: {
          abbreviation: body.abbreviation,
          category: body.category,
          conferenceId,
          name: body.name,
        },
      });
    },
    {
      hasConferenceRole: ["ADMIN"],
      detail: {
        description: "Create a new committee in this conference",
        tags: [openApiTag(import.meta.path)],
      },
      body: t.Pick(Committee, ["name", "abbreviation", "category"]),
      response: CommitteeWithoutRelations,
    },
  )
  .get(
    "/committee/:committeeId",
    async ({ params: { conferenceId, committeeId } }) => {
      return db.committee.findFirstOrThrow({
        where: { conferenceId, id: committeeId },
      });
    },
    {
      hasConferenceRole: "any",
      detail: {
        description: "Get a single committee by id",
        tags: [openApiTag(import.meta.path)],
      },
      response: CommitteeWithoutRelations,
    },
  )
  .delete(
    "/committee/:committeeId",
    ({ params: { conferenceId, committeeId } }) =>
      db.committee.delete({ where: { id: committeeId, conferenceId } }),
    {
      hasConferenceRole: ["ADMIN"],
      detail: {
        description: "Delete a committee by id",
        tags: [openApiTag(import.meta.path)],
      },
    },
  );
