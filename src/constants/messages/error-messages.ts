const ENTITY_IS_ALREADY_EXIST = 'Entity with this data already exists';
const IMAGE_ONLY = 'Only images are allowed!';
const TOO_BIG_FILE = 'is too big! Only less than 5 MB allowed!';
const UNKNOWN_USER = 'Cannot get user';
const USER_ALREADY_ATTACHED = 'User is already attached!';
const NO_PROJECT_FOUND = 'No project found!';
const NO_ATTACHED_USER_FOUND =
  "There isn't such user attached to selected project.";

export default {
  entityAlreadyExist: ENTITY_IS_ALREADY_EXIST,
  wrongFileType: IMAGE_ONLY,
  wrongFileSize: TOO_BIG_FILE,
  unknownUser: UNKNOWN_USER,
  userAlreadyAttached: USER_ALREADY_ATTACHED,
  noProjectFound: NO_PROJECT_FOUND,
  noAttachedUserFound: NO_ATTACHED_USER_FOUND,
};
