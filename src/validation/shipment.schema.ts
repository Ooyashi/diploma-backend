import { date, number, object, string } from 'joi';

import { IPart, IShipment } from '@interfaces';

export const createShipmentSchema = object<IShipment>({
  part: string().required(),
  shipmentDate: date().required(),
  shipmentPartName: string().required(),
  shipmentPartBrand: string().required(),
  shipmentQuantity: number().required(),
});
