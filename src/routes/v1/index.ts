import { Router } from 'express';

import authRouter from './auth.router';
import catalogueRouter from './catalogue.router';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/catalogue', catalogueRouter);

export default routes;
