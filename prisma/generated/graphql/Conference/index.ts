export {
  ConferenceObject,
  ConferenceIdFieldObject,
  ConferenceNameFieldObject,
  ConferenceStartFieldObject,
  ConferenceEndFieldObject,
  ConferencePressWebsiteFieldObject,
  ConferenceFeedbackWebsiteFieldObject,
  ConferenceDelegationsFieldObject,
  ConferenceMembersFieldObject,
  ConferenceCommitteesFieldObject,
} from "./object.base";
export {
  createManyConferenceMutation,
  createOneConferenceMutation,
  deleteManyConferenceMutation,
  deleteOneConferenceMutation,
  updateManyConferenceMutation,
  updateOneConferenceMutation,
  upsertOneConferenceMutation,
  createManyConferenceMutationObject,
  createOneConferenceMutationObject,
  deleteManyConferenceMutationObject,
  deleteOneConferenceMutationObject,
  updateManyConferenceMutationObject,
  updateOneConferenceMutationObject,
  upsertOneConferenceMutationObject,
} from "./mutations";
export {
  findFirstConferenceQuery,
  findManyConferenceQuery,
  countConferenceQuery,
  findUniqueConferenceQuery,
  findFirstConferenceQueryObject,
  findManyConferenceQueryObject,
  countConferenceQueryObject,
  findUniqueConferenceQueryObject,
} from "./queries";
