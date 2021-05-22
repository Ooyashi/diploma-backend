import { UserRole } from 'enums';
import { Request, Response } from 'express';

import { responseMessages } from '@constants';
import { ILoginData, IRefreshToken, ITokensData, IUser } from '@interfaces';
import { successResponseHandler } from '@responses';
import { authorizationService, nodemailerService } from '@services';
import { validate } from '@utils';
import { loginUserSchema } from '@validation';

const registerClient = async (
  req: Request<{}, {}, IUser>,
  res: Response<ITokensData>,
) => {
  const tokens = await authorizationService.register(UserRole.Client, req.body);

  res.json(tokens);
};

const login = async (req: Request<{}, {}, ILoginData>, res: Response) => {
  validate(loginUserSchema, req.body);
  console.log(req.body);

  const tokens = await authorizationService.login(
    req.body.email,
    req.body.password,
  );

  console.log(tokens);

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
  registerClient,
  login,
  token,
  forgot,
  getUser,
};
