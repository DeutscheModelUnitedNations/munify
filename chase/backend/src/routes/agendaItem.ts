import { t, Elysia } from "elysia";
import { db } from "../../prisma/db";
import { committeeRoleGuard } from "../auth/guards/committeeRoles";
import { conferenceRoleGuard } from "../auth/guards/conferenceRoles";
import { openApiTag } from "../util/openApiTags";
import { AgendaItem } from "../../prisma/generated/schema";

const AgendaItemWithoutRelations = t.Omit(AgendaItem, [
  "committee",
  "speakerLists",
]);

const AgendaItemData = t.Omit(AgendaItemWithoutRelations, [
  "id",
  "committeeId",
]);

export const agendaItem = new Elysia({
  prefix: "/conference/:conferenceId/committee/:committeeId",
})
  .use(conferenceRoleGuard)
  .use(committeeRoleGuard)
  .get(
    "/agendaItem",
    async ({ params: { conferenceId, committeeId } }) => {
      const r = await db.agendaItem.findMany({
        where: {
          committee: {
            id: committeeId,
            conferenceId,
          },
        },
      });

      // the return schema expects description to be set or undefined https://github.com/adeyahya/prisma-typebox-generator/issues/19
      return r.map((a) => ({ ...a, description: a.description || undefined }));
    },
    {
      hasConferenceRole: "any",
      response: t.Array(AgendaItemWithoutRelations),
      detail: {
        description: "Get all agenda items in this committee",
        tags: [openApiTag(import.meta.path)],
      },
    },
  )
  .post(
    "/agendaItem",
    ({ body, params: { conferenceId, committeeId } }) => {
      return db.agendaItem
        .create({
          data: {
            committee: {
              connect: {
                id: committeeId,
                conferenceId,
              },
            },
            title: body.title,
            description: body.description,
          },
        })
        .then((a) => ({ ...a, description: a.description || undefined }));
    },
    {
      hasConferenceRole: ["ADMIN"],
      detail: {
        description: "Create a new agenda item in this committee",
        tags: [openApiTag(import.meta.path)],
      },
      body: AgendaItemData,
      response: AgendaItemWithoutRelations,
    },
  )
  .get(
    "/agendaItem/active",
    async ({ params: { committeeId } }) => {
      const r = await db.agendaItem.findFirst({
        where: {
          committeeId,
          isActive: true,
        },
      });

      if (!r) {
        return new Response("No Active Committee", { status: 404 });
      }

      return { ...r, description: r.description || undefined };
    },
    {
      hasConferenceRole: "any",
      response: AgendaItemWithoutRelations,
      detail: {
        description: "Get all active agenda items in this committee",
        tags: [openApiTag(import.meta.path)],
      },
    },
  )
  .get(
    "/agendaItem/:agendaItemId",
    ({ params: { conferenceId, committeeId, agendaItemId } }) =>
      db.agendaItem
        .findUniqueOrThrow({
          where: {
            id: agendaItemId,
            committee: { id: committeeId, conferenceId },
          },
        })
        .then((a) => ({ ...a, description: a.description || undefined })),
    {
      hasConferenceRole: "any",
      detail: {
        description: "Get a single agenda item by id",
        tags: [openApiTag(import.meta.path)],
      },
      response: AgendaItemWithoutRelations,
    },
  )
  .delete(
    "/agendaItem/:agendaItemId",
    ({ params: { conferenceId, committeeId, agendaItemId } }) =>
      db.agendaItem.delete({
        where: {
          id: agendaItemId,
          committee: { id: committeeId, conferenceId },
        },
      }),
    {
      hasConferenceRole: ["ADMIN"],
      detail: {
        description: "Delete an agenda item by id",
        tags: [openApiTag(import.meta.path)],
      },
    },
  )
  .patch(
    "/agendaItem/:agendaItemId",
    async ({ params: { conferenceId, committeeId, agendaItemId }, body }) => {
      return db.agendaItem.update({
        where: {
          id: agendaItemId,
          committee: { id: committeeId, conferenceId },
        },
        data: {
          isActive: body.isActive,
          title: body.title,
          description: body.description,
        },
      });
    },
    {
      hasConferenceRole: ["ADMIN"],
      body: AgendaItemData,
      detail: {
        description: "Update an agenda item by id",
        tags: [openApiTag(import.meta.path)],
      },
    },
  );
