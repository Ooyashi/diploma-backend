import { Request, Response } from 'express';

import { responseMessages } from '@constants';
import { IPart } from '@interfaces';
import {
  IServerResponse,
  IServerResponseWithData,
  successResponseHandler,
} from '@responses';
import { productService } from '@services';
import { validate } from '@utils';
import { createPartSchema } from '@validation';

const getParts = async (
  req: Request,
  res: Response<IServerResponseWithData<IPart[]>>,
) => {
  const parts = await productService.getParts();
  res.json(successResponseHandler.getSuccessResponseWithData(parts));
};

const createPart = async (
  req: Request<{}, {}, IPart>,
  res: Response<IServerResponse>,
) => {
  validate(createPartSchema, req.body);
  await productService.createPart(req.body);

  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.createdSuccessfully,
    ),
  );
};

export default {
  getParts,
  createPart,
};
