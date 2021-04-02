const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{6,64}$/;
const ONLY_NUMBERS_REGEX = /^\d+$/;
const ALLOW_SPACES_AND_DEFICES = /^[\w\-\s]+$/;

export default {
  passRegex: PASSWORD_REGEX,
  onlyNumbRegex: ONLY_NUMBERS_REGEX,
  allowSpaceRegex: ALLOW_SPACES_AND_DEFICES,
};
