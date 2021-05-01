import { Types } from 'mongoose';

import { ICarDocument } from '../car/car-document.interface';
import ICar from '../car/car.interface';

export default interface IPart {
  id: string;
  partName: string;
  partBrand: string;
  partPrice: number;
  partDescription: string;
  partQuantity: number;
  // partForCar: Types.ObjectId | ICarDocument;
}
