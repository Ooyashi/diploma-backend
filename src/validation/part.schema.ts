import { number, object, string } from 'joi';

import { IPart } from '@interfaces';

export const createPartSchema = object<IPart>({
  partName: string().required(),
  partBrand: string().required(),
  partPrice: number().required(),
  partDescription: string().required(),
  partQuantity: number().required(),
  //   partForCar: string().required(),
});
