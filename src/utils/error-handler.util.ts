import { NextFunction, Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

type AsyncRequestHandler<P extends ParamsDictionary> =
  | ((req: Request<P>, res: Response, next: NextFunction) => Promise<void>)
  | ((req: Request<P>, res: Response, next: NextFunction) => void);

const errorHandler = <P extends ParamsDictionary>(
  controller: Record<string, AsyncRequestHandler<P>>,
) =>
  Object.entries(controller).reduce(
    (acc: Record<string, AsyncRequestHandler<P>>, [key, handler]) => ({
      ...acc,
      [key]: async (req, res, next) => {
        try {
          await handler(req, res, next);
        } catch (e) {
          next(e);
        }
      },
    }),
    {},
  );

export default errorHandler;
