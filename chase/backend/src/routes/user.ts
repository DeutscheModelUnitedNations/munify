import { Elysia, t } from "elysia";
import { db } from "../../prisma/db";
import { conferenceRoleGuard } from "../auth/guards/conferenceRoles";
import { openApiTag } from "../util/openApiTags";
import {
  Delegation,
  DelegationPlain,
} from "../../prisma/generated/schema/Delegation";
import { _Nullable } from "../../prisma/generated/schema/__nullable__";
import { permissionsPlugin } from "../auth/permissions";

export const user = new Elysia().use(permissionsPlugin).get(
  "/conference/:conferenceId/user/:userId/delegation",
  async ({ params: { conferenceId, userId }, permissions }) => {
    return await db.delegation.findFirst({
      where: {
        conferenceId,
        members: {
          some: {
            userId,
          },
        },
        AND: [permissions.allowDatabaseAccessTo("read").Delegation],
      },
      include: {
        nation: true,
      },
    });
  },
  {
    response: _Nullable(
      t.Composite([DelegationPlain, t.Pick(Delegation, ["nation"])]),
    ),
    detail: {
      description: "Get the delegation of a user in this conference",
      tags: [openApiTag(import.meta.path)],
    },
  },
);
