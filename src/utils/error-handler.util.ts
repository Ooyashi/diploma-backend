import { NextFunction, Request, Response } from 'express';

const errorHandler = <C>(controller: C) =>
  Object.entries(controller).reduce<C>(
    (acc: C, [key, handler]) => ({
      ...acc,
      [key]: async (req: Request, res: Response, next: NextFunction) => {
        try {
          await handler(req, res, next);
        } catch (e) {
          next(e);
        }
      },
    }),
    // tslint:disable-next-line
    {} as C,
  );

export default errorHandler;
