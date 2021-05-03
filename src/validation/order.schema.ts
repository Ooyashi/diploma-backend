import { array, date, number, object, string } from 'joi';

import { IOrder, IPart, IPartBrand, IShipment } from '@interfaces';

export const createOrderSchema = object<IOrder>({
  parts: array().required().items(string()),
  quantity: number().required().min(0),
  sum: number().required().min(1),
});
