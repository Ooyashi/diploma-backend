import { array, date, number, object, string } from 'joi';

import { ICar, IOrder, IPart, IPartBrand, IShipment } from '@interfaces';

export const createCarSchema = object<ICar>({
  carBrand: string().required(),
  carModel: string().required(),
  carModelYear: number().required(),
  carVinCode: string().required(),
});
