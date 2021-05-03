import { Router } from 'express';

import authRouter from './auth.router';
import carRouter from './car.router';
import catalogueRouter from './catalogue.router';
import orderRouter from './order.router';
import partRouter from './part.router';
import partBrandRouter from './partbrand.router';
import shipmentRouter from './shipment.router';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/catalogue', catalogueRouter);
routes.use('/part', partRouter);
routes.use('/car', carRouter);
routes.use('/shipment', shipmentRouter);
routes.use('/order', orderRouter);
routes.use('/partbrand', partBrandRouter);

export default routes;
