import { UserRole } from 'enums';
import Joi from 'joi';

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(64),
});

export const changePasswordSchema = Joi.object({
  password: Joi.string().required().min(6).max(64),
  passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
});

export const createUserSchema = Joi.object({
  firstName: Joi.string().required().min(2).max(30),
  lastName: Joi.string().required().min(2).max(30),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(64),
  phoneNumber: Joi.string().required().min(9).max(15),
  role: Joi.string().required().valid(UserRole.Admin, UserRole.Client),
});
