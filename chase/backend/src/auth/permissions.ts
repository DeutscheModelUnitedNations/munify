import Elysia from "elysia";
import { type Action, defineAbilitiesForIntro } from "./abilities/abilities";
import { accessibleBy } from "./abilities/casl-prisma";
import { oidcPlugin } from "./oidc";

export type PermissionsType =
  (typeof permissionsPlugin)["_ephemeral"]["resolve"]["permissions"];

export const permissionsPlugin = new Elysia({
  name: "permissions",
})
  .use(oidcPlugin)
  .derive({ as: "scoped" }, ({ intro, error }) => {
    const abilities = defineAbilitiesForIntro(intro);
    return {
      permissions: {
        abilities,
        /**
         * Prisma utility for running authorized database calls. Should be used in WHERE conditions in queries like this:
         *
         * ```ts
         * db.committee.deleteMany({
         *   where: {
         *     conferenceId: params.conferenceId,
         *     AND: [permissions.allowDatabaseAccessTo("delete").Committee],
         *   }
         * })
         * ```
         * The default operation is "read".
         */
        allowDatabaseAccessTo: (action: Action = "read") =>
          accessibleBy(abilities, action),
        /**
         * Utility that raises and error if the permissions check fails.
         * Allows for readable flow of permission checks which resemble natural language like this:
         *
         * ```ts
         * permissions.checkIf((user) => user.can("create", "Committee"));
         * ```
         */
        checkIf: (perms: boolean | ((a: typeof abilities) => boolean)) => {
          if (typeof perms === "boolean") {
            if (!perms) {
              throw error("Unauthorized", "Permission check failed.");
            }
          } else {
            if (!perms(abilities)) {
              throw error("Unauthorized", "Permission check failed.");
            }
          }
        },
        mustBeLoggedIn: () => {
          if (!intro.user) {
            throw error("Unauthorized", "You are not logged in.");
          }
        },
      },
    };
  });
