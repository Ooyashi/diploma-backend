import { Router } from 'express';

import authRouter from './auth.router';
import catalogueRouter from './catalogue.router';
import partRouter from './part.router';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/catalogue', catalogueRouter);
routes.use('/part', partRouter);

export default routes;
