import { Elysia, t } from "elysia";
import { bearer } from "@elysiajs/bearer";
import { Permissions, User, introspect } from "auth";
import { isAuthMocked } from "munify-util";
import { Metadata } from "auth/src/services/zitadel/parseMetadata";
import { join } from "node:path";

// while developing and not running a live ZITADEL instance, you can adjust this to test permission related things for incoming requests
// if you want to simulate a unauthorized request, just set this to undefined
const mockedPermissions: Metadata = {
  chairPermissions: [],
  conferenceAdminPermissions: [],
  nonStateActorPermissions: [],
  pronouns: "he/him",
  representativePermissions: [],
  secretaryMemberPermissions: [],
  visitorPermissions: [],
};

const mockedUser: User = {
  email: "test@test.de",
  email_verified: true,
  family_name: "Test",
  given_name: "Test",
  id: "42d35a24-cd3e-4625-9b91-b6510f728cc3",
  locale: "de",
  pronouns: "he/him",
};

let mockedIntrospection: { user: User; permissions: Permissions } = {
  user: mockedUser,
  //TODO consider making this permanent, maybe store on disk somewhere
  permissions: new Permissions(
    "42d35a24-cd3e-4625-9b91-b6510f728cc3",
    mockedPermissions,
    async (userId, metadata) => {
      // we dont really care about other permissions in this scenario
      if (userId !== mockedUser.id) {
        console.info(
          "tried to set metadata for user that is not the mocked user",
        );
        return;
      }
      Object.entries(metadata).map(async ([key, data]) => {
        // rome-ignore lint/suspicious/noExplicitAny:
        mockedPermissions[key as keyof Metadata] = data as any;
      });
    },
  ),
};

if (isAuthMocked()) {
  // mocked data persistency
  const devpath = join(import.meta.dir, "mockedAuth.json");
  const file = Bun.file(devpath);
  {
    if (await file.exists()) {
      mockedIntrospection = JSON.parse(await file.text());
    }
  }

  setInterval(async () => {
    if (
      !(await file.exists()) ||
      !Bun.deepEquals(JSON.parse(await file.text()), mockedIntrospection)
    ) {
      Bun.write(devpath, JSON.stringify(mockedIntrospection));
    }
  }, 1000);
}

//TODO separate plugin for different auth states?

export const auth = new Elysia({
  name: "auth", // set name to avoid duplication on multiple uses https://elysiajs.com/concept/plugin.html#plugin-deduplication
})
  .guard({
    headers: t.Object({
      authorization: t.String(),
    }),
  })
  .use(bearer())
  .derive(async ({ bearer }) => {
    return {
      auth: isAuthMocked()
        ? mockedIntrospection
        : // rome-ignore lint/style/noNonNullAssertion: we check for non null in the guard and want the correct type to be propagated by this plugin
          (await introspect(bearer as string))!,
    };
  })
  .guard({
    beforeHandle: [
      async ({ auth }) => {
        if (!auth) {
          return new Response(null, { status: 401 });
        }
      },
    ],
  });
