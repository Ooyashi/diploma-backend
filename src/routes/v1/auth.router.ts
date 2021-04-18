import { Router } from 'express';

import {
  authorizationController as authorizationControllerObject,
  AuthorizationControllerParams,
} from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const authorizationController = errorHandler<AuthorizationControllerParams>(
  authorizationControllerObject,
);
const authRouter = Router();

authRouter.post('/login', authorizationController.login);

authRouter.post(
  '/token',
  authMiddleware.checkToken,
  authorizationController.token,
);

authRouter.post('/register/:type', authorizationController.register);
authRouter.post('/forgot', authorizationController.forgot);

authRouter.get(
  '/user',
  authMiddleware.checkToken,
  authorizationController.getUser,
);

export default authRouter;
