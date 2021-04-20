import { UserRole } from 'enums';
import { Request, Response } from 'express';
import validateObject from 'utils/validation.util';

import { errorMessages, responseMessages } from '@constants';
import { AuthorizationRequestsParamsWithType } from '@controllers';
import { ILoginData, IRefreshToken, ITokensData, IUser } from '@interfaces';
import { ClientError } from '@models';
import { successResponseHandler } from '@responses';
import { authorizationService, nodemailerService } from '@services';
import { validate } from '@utils';
import { createUserSchema, loginUserSchema } from '@validation';

const register = async (
  req: Request<AuthorizationRequestsParamsWithType, {}, IUser>,
  res: Response<ITokensData>,
) => {
  const type = req.query.type;

  if (!type) {
    throw new Error('yoy');
  }
  req.body.role = String(type);

  switch (type) {
    case UserRole.User:
      validateObject(createUserSchema, req.body);
      break;

    default:
      throw new ClientError(errorMessages.InvalidUserType, 400);
  }

  const tokens = await authorizationService.register(req.body);
  res.json(tokens);
};

const login = async (
  req: Request<{}, {}, ILoginData>,
  res: Response<ITokensData>,
) => {
  validate(loginUserSchema, req.body);
  const tokens = await authorizationService.login(
    req.body.email,
    req.body.password,
  );

  res.json(tokens);
};

const token = async (
  req: Request<{}, {}, IRefreshToken>,
  res: Response<ITokensData>,
) => {
  const newTokens = await authorizationService.updateToken(
    req.body.refresh_token,
  );
  res.json(newTokens);
};

const forgot = async (_req: Request, res: Response) => {
  await nodemailerService.forgotMail();
  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.messageHasBeenSent,
    ),
  );
};

const getUser = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization ?? '';
  const user = await authorizationService.getUser(accessToken);
  res.json(user);
};

export default {
  register,
  login,
  token,
  forgot,
  getUser,
};
