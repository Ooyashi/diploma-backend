import { userEnums } from 'enums';
import Joi from 'joi';

import { regexes } from '@constants';

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .min(6)
    .max(64)
    .regex(new RegExp(regexes.passRegex)),
});

export const changePasswordSchema = Joi.object({
  password: Joi.string()
    .required()
    .min(6)
    .max(64)
    .regex(new RegExp(regexes.passRegex)),

  passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
});
export const createUserSchema = Joi.object({
  firstName: Joi.string().required().min(2).max(30).alphanum(),
  lastName: Joi.string().required().min(2).max(30).alphanum(),
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .min(6)
    .max(64)
    .regex(new RegExp(regexes.passRegex)),
  phoneNumber: Joi.string()
    .min(11)
    .max(15)
    .regex(new RegExp(regexes.onlyNumbRegex)),
  role: Joi.string()
    .required()
    .valid(userEnums.userRoleEnum.User, userEnums.userRoleEnum.Admin),
});
