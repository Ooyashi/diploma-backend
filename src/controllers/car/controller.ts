import { Request, Response } from 'express';
import carService from 'services/car.service';

import { responseMessages } from '@constants';
import { ICar, IPart } from '@interfaces';
import {
  IServerResponse,
  IServerResponseWithData,
  successResponseHandler,
} from '@responses';
import { productService } from '@services';
import { validate } from '@utils';
import { createCarSchema, createPartSchema } from '@validation';

const getCars = async (
  req: Request,
  res: Response<IServerResponseWithData<ICar[]>>,
) => {
  const cars = await carService.getCars();
  res.json(successResponseHandler.getSuccessResponseWithData(cars));
};

const createCar = async (
  req: Request<{}, {}, ICar>,
  res: Response<IServerResponse>,
) => {
  validate(createCarSchema, req.body);
  await carService.createCar(req.body);

  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.createdSuccessfully,
    ),
  );
};

export default {
  getCars,
  createCar,
};
