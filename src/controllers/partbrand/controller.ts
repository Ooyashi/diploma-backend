import { Request, Response } from 'express';

import { responseMessages } from '@constants';
import { IPart, IPartBrand } from '@interfaces';
import {
  IServerResponse,
  IServerResponseWithData,
  successResponseHandler,
} from '@responses';
import { partBrandService, productService } from '@services';
import { validate } from '@utils';
import { createPartBrandSchema, createPartSchema } from '@validation';

const getPartBrands = async (
  req: Request,
  res: Response<IServerResponseWithData<IPartBrand[]>>,
) => {
  const partBrands = await partBrandService.getPartBrands();
  res.json(successResponseHandler.getSuccessResponseWithData(partBrands));
};

const createPartBrand = async (
  req: Request<{}, {}, IPartBrand>,
  res: Response<IServerResponse>,
) => {
  validate(createPartBrandSchema, req.body);
  await partBrandService.createPartBrand(req.body);

  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.createdSuccessfully,
    ),
  );
};

export default {
  getPartBrands,
  createPartBrand,
};
