import { Request, Response } from 'express';

import { responseMessages } from '@constants';
import { IPart, IPartBrand, IShipment } from '@interfaces';
import {
  IServerResponse,
  IServerResponseWithData,
  successResponseHandler,
} from '@responses';
import { productService, shipmentService } from '@services';
import { validate } from '@utils';
import {
  createPartBrandSchema,
  createPartSchema,
  createShipmentSchema,
} from '@validation';

const getShipments = async (
  req: Request,
  res: Response<IServerResponseWithData<IShipment[]>>,
) => {
  const shipments = await shipmentService.getShipments();
  res.json(successResponseHandler.getSuccessResponseWithData(shipments));
};

const createShipment = async (
  req: Request<{}, {}, IShipment>,
  res: Response<IServerResponse>,
) => {
  validate(createShipmentSchema, req.body);
  await shipmentService.createShipment(req.body);

  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.createdSuccessfully,
    ),
  );
};

export default {
  getShipments,
  createShipment,
};
