import { Request, Response } from 'express';
import carService from 'services/car.service';
import orderService from 'services/order.service';

import { responseMessages } from '@constants';
import { ICar, IOrder, IPart } from '@interfaces';
import { orderRepository } from '@repositories';
import {
  IServerResponse,
  IServerResponseWithData,
  successResponseHandler,
} from '@responses';
import { productService } from '@services';
import { validate } from '@utils';
import {
  createCarSchema,
  createOrderSchema,
  createPartSchema,
} from '@validation';

const getOrders = async (
  req: Request,
  res: Response<IServerResponseWithData<IOrder[]>>,
) => {
  const orders = await orderService.getOrders();
  res.json(successResponseHandler.getSuccessResponseWithData(orders));
};

const createOrder = async (
  req: Request<{}, {}, IOrder>,
  res: Response<IServerResponse>,
) => {
  validate(createOrderSchema, req.body);
  await orderService.createOrder(req.body);

  res.json(
    successResponseHandler.getSuccessResponse(
      responseMessages.createdSuccessfully,
    ),
  );
};

export default {
  getOrders,
  createOrder,
};
