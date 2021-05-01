import { Document } from 'mongoose';

import { IPartBrand } from '@interfaces';

export interface IPartBaseDocument extends Omit<IPartBrand, 'id'>, Document {}

export interface IPartDocument extends IPartBaseDocument {
  car: IPartDocument['_id'];
}

export interface IPartPopulatedDocument extends IPartBaseDocument {
  car: IPartDocument[];
}
