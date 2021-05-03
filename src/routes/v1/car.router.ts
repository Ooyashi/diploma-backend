import { UserRole } from 'enums';
import { Router } from 'express';

import { carController as carControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const carController = errorHandler(carControllerObject);
const carRouter = Router();

carRouter.post(
  '/create',
  //   authMiddleware.checkToken,
  //   authMiddleware.verifyRole([UserRole.Admin]),
  carController.createCar,
);

carRouter.get('/', carController.getCars);

export default carRouter;
