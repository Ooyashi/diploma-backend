import { Document } from 'mongoose';

import { IPart, IPartBrand } from '@interfaces';
import { ICarDocument } from '../car';

export interface IPartBaseDocument extends Omit<IPart, 'id'>, Document {}

export interface IPartDocument extends IPartBaseDocument {
  car: ICarDocument['_id'];
}

export interface IPartPopulatedDocument extends IPartBaseDocument {
  car: ICarDocument;
}
