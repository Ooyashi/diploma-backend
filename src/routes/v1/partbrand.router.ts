import { UserRole } from 'enums';
import { Router } from 'express';

import { partBrandController as partBrandControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const partBrandController = errorHandler(partBrandControllerObject);
const partBrandRouter = Router();

partBrandRouter.post(
  '/create',
  //   authMiddleware.checkToken,
  //   authMiddleware.verifyRole([UserRole.Admin]),
  partBrandController.createPartBrand,
);

partBrandRouter.get('/', partBrandController.getPartBrands);

export default partBrandRouter;
