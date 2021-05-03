import { UserRole } from 'enums';
import { Router } from 'express';

import { shipmentController as shipmentControllerObject } from '@controllers';
import { authMiddleware } from '@middlewares';
import { errorHandler } from '@utils';

const shipmentController = errorHandler(shipmentControllerObject);
const shipmentRouter = Router();

shipmentRouter.post(
  '/create',
  //   authMiddleware.checkToken,
  //   authMiddleware.verifyRole([UserRole.Admin]),
  shipmentController.createShipment,
);

shipmentRouter.get('/', shipmentController.getShipments);

export default shipmentRouter;
