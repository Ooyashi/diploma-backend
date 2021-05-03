import { UserRole } from 'enums';
import { Router } from 'express';

import { orderController as orderControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const orderController = errorHandler(orderControllerObject);
const orderRouter = Router();

orderRouter.post(
  '/create',
  //   authMiddleware.checkToken,
  //   authMiddleware.verifyRole([UserRole.Admin]),
  orderController.createOrder,
);

orderRouter.get('/', orderController.getOrders);

export default orderRouter;
