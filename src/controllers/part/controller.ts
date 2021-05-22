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
  _req: Request,
  res: Response<IServerResponseWithData<IPart[]>>,
) => {
  const parts = await productService.getParts();
  res.json(successResponseHandler.getSuccessResponseWithData(parts));
};

const getPartsByVinCode = async (req: Request, res: Response) => {
  const test = await productService.vinCodeSearch(req.body.vinCode);
  res.json(test);
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
  getPartsByVinCode,
};
