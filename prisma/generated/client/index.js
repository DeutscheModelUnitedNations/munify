Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require("./runtime/library.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.UserScalarFieldEnum = {
  id: "id",
};

exports.Prisma.ConferenceCreationTokenScalarFieldEnum = {
  token: "token",
};

exports.Prisma.ConferenceScalarFieldEnum = {
  id: "id",
  name: "name",
  start: "start",
  end: "end",
  pressWebsite: "pressWebsite",
  feedbackWebsite: "feedbackWebsite",
};

exports.Prisma.ConferenceMemberScalarFieldEnum = {
  id: "id",
  conferenceId: "conferenceId",
  userId: "userId",
  role: "role",
};

exports.Prisma.CommitteeScalarFieldEnum = {
  id: "id",
  name: "name",
  abbreviation: "abbreviation",
  category: "category",
  conferenceId: "conferenceId",
  parentId: "parentId",
  whiteboardContent: "whiteboardContent",
  status: "status",
  stateOfDebate: "stateOfDebate",
  statusHeadline: "statusHeadline",
  statusUntil: "statusUntil",
  allowDelegationsToAddThemselvesToSpeakersList:
    "allowDelegationsToAddThemselvesToSpeakersList",
};

exports.Prisma.CommitteeMemberScalarFieldEnum = {
  id: "id",
  committeeId: "committeeId",
  userId: "userId",
  delegationId: "delegationId",
  presence: "presence",
};

exports.Prisma.AgendaItemScalarFieldEnum = {
  id: "id",
  committeeId: "committeeId",
  title: "title",
  description: "description",
  isActive: "isActive",
};

exports.Prisma.SpeakersListScalarFieldEnum = {
  id: "id",
  agendaItemId: "agendaItemId",
  type: "type",
  speakingTime: "speakingTime",
  timeLeft: "timeLeft",
  startTimestamp: "startTimestamp",
  isClosed: "isClosed",
};

exports.Prisma.SpeakerOnListScalarFieldEnum = {
  id: "id",
  speakersListId: "speakersListId",
  committeeMemberId: "committeeMemberId",
  position: "position",
};

exports.Prisma.DelegationScalarFieldEnum = {
  id: "id",
  conferenceId: "conferenceId",
  nationId: "nationId",
};

exports.Prisma.NationScalarFieldEnum = {
  id: "id",
  alpha3Code: "alpha3Code",
  variant: "variant",
};

exports.Prisma.MessageScalarFieldEnum = {
  id: "id",
  subject: "subject",
  category: "category",
  message: "message",
  committeeId: "committeeId",
  authorId: "authorId",
  timestamp: "timestamp",
  status: "status",
  forwarded: "forwarded",
  metaEmail: "metaEmail",
  metaDelegation: "metaDelegation",
  metaCommittee: "metaCommittee",
  metaAgendaItem: "metaAgendaItem",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};
exports.ConferenceRole = exports.$Enums.ConferenceRole = {
  ADMIN: "ADMIN",
  SECRETARIAT: "SECRETARIAT",
  CHAIR: "CHAIR",
  COMMITTEE_ADVISOR: "COMMITTEE_ADVISOR",
  NON_STATE_ACTOR: "NON_STATE_ACTOR",
  PRESS_CORPS: "PRESS_CORPS",
  GUEST: "GUEST",
  PARTICIPANT_CARE: "PARTICIPANT_CARE",
  MISCELLANEOUS_TEAM: "MISCELLANEOUS_TEAM",
};

exports.CommitteeCategory = exports.$Enums.CommitteeCategory = {
  COMMITTEE: "COMMITTEE",
  CRISIS: "CRISIS",
  ICJ: "ICJ",
};

exports.CommitteeStatus = exports.$Enums.CommitteeStatus = {
  FORMAL: "FORMAL",
  INFORMAL: "INFORMAL",
  PAUSE: "PAUSE",
  SUSPENSION: "SUSPENSION",
  CLOSED: "CLOSED",
};

exports.Presence = exports.$Enums.Presence = {
  PRESENT: "PRESENT",
  EXCUSED: "EXCUSED",
  ABSENT: "ABSENT",
};

exports.SpeakersListCategory = exports.$Enums.SpeakersListCategory = {
  SPEAKERS_LIST: "SPEAKERS_LIST",
  COMMENT_LIST: "COMMENT_LIST",
  MODERATED_CAUCUS: "MODERATED_CAUCUS",
};

exports.NationVariant = exports.$Enums.NationVariant = {
  NATION: "NATION",
  NON_STATE_ACTOR: "NON_STATE_ACTOR",
  SPECIAL_PERSON: "SPECIAL_PERSON",
};

exports.MessageCategory = exports.$Enums.MessageCategory = {
  TO_CHAIR: "TO_CHAIR",
  GUEST_SPEAKER: "GUEST_SPEAKER",
  FACT_CHECK: "FACT_CHECK",
  INFORMATION: "INFORMATION",
  GENERAL_SECRETARY: "GENERAL_SECRETARY",
  OTHER: "OTHER",
};

exports.MessageStatus = exports.$Enums.MessageStatus = {
  UNREAD: "UNREAD",
  PRIORITY: "PRIORITY",
  ASSIGNED: "ASSIGNED",
  ARCHIVED: "ARCHIVED",
};

exports.Prisma.ModelName = {
  User: "User",
  ConferenceCreationToken: "ConferenceCreationToken",
  Conference: "Conference",
  ConferenceMember: "ConferenceMember",
  Committee: "Committee",
  CommitteeMember: "CommitteeMember",
  AgendaItem: "AgendaItem",
  SpeakersList: "SpeakersList",
  SpeakerOnList: "SpeakerOnList",
  Delegation: "Delegation",
  Nation: "Nation",
  Message: "Message",
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value: "/mnt/codingssd/Coding/munify/chase/prisma/generated/client",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "rhel-openssl-3.0.x",
        native: true,
      },
      {
        fromEnvVar: null,
        value: "linux-musl-openssl-3.0.x",
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: "../../../.env",
  },
  relativePath: "../..",
  clientVersion: "5.14.0",
  engineVersion: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: "DATABASE_URL",
        value: null,
      },
    },
  },
  inlineSchema:
    '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider      = "prisma-client-js"\n  output        = "./generated/client"\n  binaryTargets = ["native", "linux-musl-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator pothos {\n  provider     = "prisma-pothos-types"\n  clientOutput = "../client"\n  output       = "./generated/graphql/pothos-types.ts"\n}\n\ngenerator pothosCrud {\n  provider            = "prisma-generator-pothos-codegen"\n  generatorConfigPath = "./pothos.config.js"\n}\n\n/// A user in the system\nmodel User {\n  id                    String             @id @default(uuid())\n  conferenceMemberships ConferenceMember[]\n  committeeMemberships  CommitteeMember[]\n  messages              Message[]\n}\n\n/// Consumeable token which grants the creation of a conference\nmodel ConferenceCreationToken {\n  token String @id\n}\n\n/// A conference in the system\nmodel Conference {\n  id              String    @id @default(uuid())\n  name            String    @unique\n  start           DateTime?\n  end             DateTime?\n  pressWebsite    String?\n  feedbackWebsite String?\n\n  delegations Delegation[]\n  members     ConferenceMember[]\n  committees  Committee[]\n}\n\n/// The role of a user in a conference\nenum ConferenceRole {\n  ADMIN\n  SECRETARIAT\n  CHAIR\n  COMMITTEE_ADVISOR\n  NON_STATE_ACTOR\n  PRESS_CORPS\n  GUEST\n  PARTICIPANT_CARE\n  MISCELLANEOUS_TEAM\n}\n\n/// A users membership in a conference, providing them with a role in the conference\nmodel ConferenceMember {\n  id           String         @id @default(uuid())\n  conference   Conference     @relation(fields: [conferenceId], references: [id])\n  conferenceId String\n  user         User?          @relation(fields: [userId], references: [id])\n  userId       String?\n  role         ConferenceRole\n\n  @@unique([userId, conferenceId])\n}\n\n/// The type of a committee in a conference\nenum CommitteeCategory {\n  /// A standard committee\n  COMMITTEE\n  /// A crisis simulation\n  CRISIS\n  /// A International Court of Justice simulation\n  ICJ\n}\n\nenum CommitteeStatus {\n  FORMAL\n  INFORMAL\n  PAUSE\n  SUSPENSION\n  CLOSED // Dont display a Widget\n}\n\n/// A committee in a conference\nmodel Committee {\n  id                                            String            @id @default(uuid())\n  name                                          String\n  abbreviation                                  String\n  category                                      CommitteeCategory\n  conference                                    Conference        @relation(fields: [conferenceId], references: [id])\n  conferenceId                                  String\n  members                                       CommitteeMember[]\n  parent                                        Committee?        @relation("subCommittee", fields: [parentId], references: [id])\n  parentId                                      String?\n  subCommittees                                 Committee[]       @relation("subCommittee")\n  messages                                      Message[]\n  agendaItems                                   AgendaItem[]\n  whiteboardContent                             String            @default("<p>Willkommen!</p>")\n  status                                        CommitteeStatus   @default(CLOSED)\n  stateOfDebate                                 String?\n  statusHeadline                                String?\n  statusUntil                                   DateTime?\n  allowDelegationsToAddThemselvesToSpeakersList Boolean           @default(false)\n\n  @@unique([name, conferenceId])\n  @@unique([abbreviation, conferenceId])\n}\n\n/// The presence status of a CommitteeMember\nenum Presence {\n  PRESENT\n  EXCUSED\n  ABSENT\n}\n\n/// A users membership in a committee, providing them with a role in the committee\nmodel CommitteeMember {\n  id           String          @id @default(uuid())\n  committee    Committee       @relation(fields: [committeeId], references: [id])\n  committeeId  String\n  user         User?           @relation(fields: [userId], references: [id])\n  userId       String?\n  speakerLists SpeakerOnList[]\n  delegation   Delegation?     @relation(fields: [delegationId], references: [id])\n  delegationId String?\n  presence     Presence        @default(ABSENT)\n\n  @@unique([committeeId, delegationId])\n  @@unique([committeeId, userId])\n}\n\n/// An agenda item in a committee. This is a topic of discussion in a committee.\nmodel AgendaItem {\n  id           String         @id @default(uuid())\n  committee    Committee      @relation(fields: [committeeId], references: [id])\n  committeeId  String\n  title        String\n  description  String?\n  speakerLists SpeakersList[]\n  isActive     Boolean        @default(false)\n}\n\n/// The type of a speakers list\nenum SpeakersListCategory {\n  /// A standard speakers list\n  SPEAKERS_LIST\n  /// A comment list\n  COMMENT_LIST\n  /// A moderated caucus\n  MODERATED_CAUCUS\n}\n\n/// A speakers list in a committee\nmodel SpeakersList {\n  id             String               @id @default(uuid())\n  agendaItem     AgendaItem           @relation(fields: [agendaItemId], references: [id])\n  agendaItemId   String\n  type           SpeakersListCategory\n  speakers       SpeakerOnList[]\n  /// The time in seconds that a speaker has to speak\n  speakingTime   Int\n  timeLeft       Int?\n  startTimestamp DateTime?\n  isClosed       Boolean              @default(false)\n\n  @@unique([agendaItemId, type])\n}\n\n/// A speaker on a speakers list, storing their position in the list\nmodel SpeakerOnList {\n  id                String          @id @default(uuid())\n  speakersList      SpeakersList    @relation(fields: [speakersListId], references: [id])\n  speakersListId    String\n  committeeMember   CommitteeMember @relation(fields: [committeeMemberId], references: [id])\n  committeeMemberId String\n  //TODO replace this with a signle linked list for better concurrency/less necessary updates?\n  position          Int\n\n  @@unique([speakersListId, position])\n  @@unique([speakersListId, committeeMemberId])\n}\n\nmodel Delegation {\n  id           String            @id @default(uuid())\n  conference   Conference        @relation(fields: [conferenceId], references: [id])\n  conferenceId String\n  nation       Nation            @relation(fields: [nationId], references: [id])\n  nationId     String\n  members      CommitteeMember[]\n\n  @@unique([conferenceId, nationId])\n}\n\nenum NationVariant {\n  NATION\n  NON_STATE_ACTOR\n  SPECIAL_PERSON\n}\n\n//TODO should we allow for customizing these per conference and just allow loading template at creation?\n/// A nation in the system. E.g. Germany\nmodel Nation {\n  id          String        @id @default(uuid())\n  alpha3Code  String        @unique\n  variant     NationVariant @default(NATION)\n  delegations Delegation[]\n}\n\nenum MessageCategory {\n  TO_CHAIR\n  GUEST_SPEAKER\n  FACT_CHECK\n  INFORMATION\n  GENERAL_SECRETARY\n  OTHER\n}\n\nenum MessageStatus {\n  UNREAD\n  PRIORITY\n  ASSIGNED\n  ARCHIVED\n}\n\nmodel Message {\n  id          String          @id @default(uuid())\n  subject     String\n  category    MessageCategory @default(TO_CHAIR)\n  message     String\n  committee   Committee       @relation(fields: [committeeId], references: [id])\n  committeeId String\n  author      User            @relation(fields: [authorId], references: [id])\n  authorId    String\n  timestamp   DateTime\n  status      MessageStatus[] @default([UNREAD])\n  forwarded   Boolean         @default(false) /// If the message was forwarded to the Research Service\n\n  /// Saved Metadata without relation\n  metaEmail      String?\n  metaDelegation String?\n  metaCommittee  String?\n  metaAgendaItem String?\n}\n',
  inlineSchemaHash:
    "c1647803dee456d2cb5b0b31f67c84cffb77bc06ea6407c9f84a0333bda751cb",
  copyEngine: true,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
  const alternativePaths = ["prisma/generated/client", "generated/client"];

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];

  config.dirname = path.join(process.cwd(), alternativePath);
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"conferenceMemberships","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ConferenceMember","relationName":"ConferenceMemberToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"committeeMemberships","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommitteeMember","relationName":"CommitteeMemberToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"messages","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Message","relationName":"MessageToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"A user in the system"},"ConferenceCreationToken":{"dbName":null,"fields":[{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"Consumeable token which grants the creation of a conference"},"Conference":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"start","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"end","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"pressWebsite","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"feedbackWebsite","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"delegations","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Delegation","relationName":"ConferenceToDelegation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"members","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ConferenceMember","relationName":"ConferenceToConferenceMember","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"committees","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"CommitteeToConference","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"A conference in the system"},"ConferenceMember":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"conference","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Conference","relationName":"ConferenceToConferenceMember","relationFromFields":["conferenceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"conferenceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"ConferenceMemberToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ConferenceRole","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["userId","conferenceId"]],"uniqueIndexes":[{"name":null,"fields":["userId","conferenceId"]}],"isGenerated":false,"documentation":"A users membership in a conference, providing them with a role in the conference"},"Committee":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"abbreviation","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommitteeCategory","isGenerated":false,"isUpdatedAt":false},{"name":"conference","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Conference","relationName":"CommitteeToConference","relationFromFields":["conferenceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"conferenceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"members","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommitteeMember","relationName":"CommitteeToCommitteeMember","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"parent","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"subCommittee","relationFromFields":["parentId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"parentId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"subCommittees","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"subCommittee","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"messages","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Message","relationName":"CommitteeToMessage","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"agendaItems","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AgendaItem","relationName":"AgendaItemToCommittee","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"whiteboardContent","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"<p>Willkommen!</p>","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"CommitteeStatus","default":"CLOSED","isGenerated":false,"isUpdatedAt":false},{"name":"stateOfDebate","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"statusHeadline","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"statusUntil","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"allowDelegationsToAddThemselvesToSpeakersList","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["name","conferenceId"],["abbreviation","conferenceId"]],"uniqueIndexes":[{"name":null,"fields":["name","conferenceId"]},{"name":null,"fields":["abbreviation","conferenceId"]}],"isGenerated":false,"documentation":"A committee in a conference"},"CommitteeMember":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"committee","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"CommitteeToCommitteeMember","relationFromFields":["committeeId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"committeeId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"CommitteeMemberToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"speakerLists","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpeakerOnList","relationName":"CommitteeMemberToSpeakerOnList","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"delegation","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Delegation","relationName":"CommitteeMemberToDelegation","relationFromFields":["delegationId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"delegationId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"presence","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Presence","default":"ABSENT","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["committeeId","delegationId"],["committeeId","userId"]],"uniqueIndexes":[{"name":null,"fields":["committeeId","delegationId"]},{"name":null,"fields":["committeeId","userId"]}],"isGenerated":false,"documentation":"A users membership in a committee, providing them with a role in the committee"},"AgendaItem":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"committee","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"AgendaItemToCommittee","relationFromFields":["committeeId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"committeeId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"speakerLists","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpeakersList","relationName":"AgendaItemToSpeakersList","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"isActive","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"An agenda item in a committee. This is a topic of discussion in a committee."},"SpeakersList":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"agendaItem","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AgendaItem","relationName":"AgendaItemToSpeakersList","relationFromFields":["agendaItemId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"agendaItemId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpeakersListCategory","isGenerated":false,"isUpdatedAt":false},{"name":"speakers","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpeakerOnList","relationName":"SpeakerOnListToSpeakersList","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"speakingTime","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false,"documentation":"The time in seconds that a speaker has to speak"},{"name":"timeLeft","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"startTimestamp","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"isClosed","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["agendaItemId","type"]],"uniqueIndexes":[{"name":null,"fields":["agendaItemId","type"]}],"isGenerated":false,"documentation":"A speakers list in a committee"},"SpeakerOnList":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"speakersList","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpeakersList","relationName":"SpeakerOnListToSpeakersList","relationFromFields":["speakersListId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"speakersListId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"committeeMember","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommitteeMember","relationName":"CommitteeMemberToSpeakerOnList","relationFromFields":["committeeMemberId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"committeeMemberId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"position","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["speakersListId","position"],["speakersListId","committeeMemberId"]],"uniqueIndexes":[{"name":null,"fields":["speakersListId","position"]},{"name":null,"fields":["speakersListId","committeeMemberId"]}],"isGenerated":false,"documentation":"A speaker on a speakers list, storing their position in the list"},"Delegation":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"conference","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Conference","relationName":"ConferenceToDelegation","relationFromFields":["conferenceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"conferenceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"nation","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Nation","relationName":"DelegationToNation","relationFromFields":["nationId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"nationId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"members","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommitteeMember","relationName":"CommitteeMemberToDelegation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["conferenceId","nationId"]],"uniqueIndexes":[{"name":null,"fields":["conferenceId","nationId"]}],"isGenerated":false},"Nation":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"alpha3Code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"variant","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"NationVariant","default":"NATION","isGenerated":false,"isUpdatedAt":false},{"name":"delegations","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Delegation","relationName":"DelegationToNation","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"A nation in the system. E.g. Germany"},"Message":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"subject","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"MessageCategory","default":"TO_CHAIR","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"committee","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Committee","relationName":"CommitteeToMessage","relationFromFields":["committeeId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"committeeId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"MessageToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"timestamp","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"MessageStatus","default":["UNREAD"],"isGenerated":false,"isUpdatedAt":false},{"name":"forwarded","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false,"documentation":"If the message was forwarded to the Research Service"},{"name":"metaEmail","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false,"documentation":"Saved Metadata without relation"},{"name":"metaDelegation","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metaCommittee","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metaAgendaItem","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"ConferenceRole":{"values":[{"name":"ADMIN","dbName":null},{"name":"SECRETARIAT","dbName":null},{"name":"CHAIR","dbName":null},{"name":"COMMITTEE_ADVISOR","dbName":null},{"name":"NON_STATE_ACTOR","dbName":null},{"name":"PRESS_CORPS","dbName":null},{"name":"GUEST","dbName":null},{"name":"PARTICIPANT_CARE","dbName":null},{"name":"MISCELLANEOUS_TEAM","dbName":null}],"dbName":null,"documentation":"The role of a user in a conference"},"CommitteeCategory":{"values":[{"name":"COMMITTEE","dbName":null,"documentation":"A standard committee"},{"name":"CRISIS","dbName":null,"documentation":"A crisis simulation"},{"name":"ICJ","dbName":null,"documentation":"A International Court of Justice simulation"}],"dbName":null,"documentation":"The type of a committee in a conference"},"CommitteeStatus":{"values":[{"name":"FORMAL","dbName":null},{"name":"INFORMAL","dbName":null},{"name":"PAUSE","dbName":null},{"name":"SUSPENSION","dbName":null},{"name":"CLOSED","dbName":null}],"dbName":null},"Presence":{"values":[{"name":"PRESENT","dbName":null},{"name":"EXCUSED","dbName":null},{"name":"ABSENT","dbName":null}],"dbName":null,"documentation":"The presence status of a CommitteeMember"},"SpeakersListCategory":{"values":[{"name":"SPEAKERS_LIST","dbName":null,"documentation":"A standard speakers list"},{"name":"COMMENT_LIST","dbName":null,"documentation":"A comment list"},{"name":"MODERATED_CAUCUS","dbName":null,"documentation":"A moderated caucus"}],"dbName":null,"documentation":"The type of a speakers list"},"NationVariant":{"values":[{"name":"NATION","dbName":null},{"name":"NON_STATE_ACTOR","dbName":null},{"name":"SPECIAL_PERSON","dbName":null}],"dbName":null},"MessageCategory":{"values":[{"name":"TO_CHAIR","dbName":null},{"name":"GUEST_SPEAKER","dbName":null},{"name":"FACT_CHECK","dbName":null},{"name":"INFORMATION","dbName":null},{"name":"GENERAL_SECRETARY","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"MessageStatus":{"values":[{"name":"UNREAD","dbName":null},{"name":"PRIORITY","dbName":null},{"name":"ASSIGNED","dbName":null},{"name":"ARCHIVED","dbName":null}],"dbName":null}},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

const { warnEnvConflicts } = require("./runtime/library.js");

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(
  process.cwd(),
  "prisma/generated/client/libquery_engine-rhel-openssl-3.0.x.so.node",
);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-openssl-3.0.x.so.node");
path.join(
  process.cwd(),
  "prisma/generated/client/libquery_engine-linux-musl-openssl-3.0.x.so.node",
);
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma");
