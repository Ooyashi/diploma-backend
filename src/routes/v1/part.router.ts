import { UserRole } from 'enums';
import { Router } from 'express';

import { partController as partControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const partController = errorHandler(partControllerObject);
const partRouter = Router();

partRouter.post(
  '/create',
  //   authMiddleware.checkToken,
  //   authMiddleware.verifyRole([UserRole.Admin]),
  partController.createPart,
);

partRouter.get('/', partController.getParts);

partRouter.post('/search', partController.getPartsByVinCode);

export default partRouter;
