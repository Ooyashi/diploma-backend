import { date, number, object, string } from 'joi';

import { IPart, IPartBrand, IShipment } from '@interfaces';

export const createPartBrandSchema = object<IPartBrand>({
  part: string().required(),
  brandName: string().required(),
});
