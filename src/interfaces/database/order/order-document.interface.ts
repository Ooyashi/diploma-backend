import { Document } from 'mongoose';

import { IOrder, IPartDocument } from '@interfaces';

export interface IOrderBaseDocument extends Omit<IOrder, 'id'>, Document {}

export interface IOrderDocument extends IOrderBaseDocument {
  parts: Array<IPartDocument['_id']>;
}

export interface IProductPopulatedDocument extends IOrderBaseDocument {
  parts: IPartDocument[];
}
