import { Router } from 'express';

import { catalogueController as catalogueControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const catalogueController = errorHandler(catalogueControllerObject);
const catalogueRouter = Router();

catalogueRouter.get('/products', catalogueController.getProducts);

catalogueRouter.get(
  '/pay',
  // authMiddleware.checkToken,
  catalogueController.payOrder,
);

catalogueRouter.post(
  '/products',
  // authMiddleware.checkToken,
  catalogueController.listOfProducts,
);

export default catalogueRouter;
