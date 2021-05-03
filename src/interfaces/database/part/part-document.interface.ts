import { Document } from 'mongoose';

import { IPart, IPartBrand } from '@interfaces';

export interface IPartBaseDocument extends Omit<IPart, 'id'>, Document {}

export interface IPartDocument extends IPartBaseDocument {
  car: IPartDocument['_id'];
}

export interface IPartPopulatedDocument extends IPartBaseDocument {
  car: IPartDocument[];
}
