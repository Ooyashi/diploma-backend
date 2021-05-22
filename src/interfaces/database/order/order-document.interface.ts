import { Document } from 'mongoose';

import { IOrder, IPartDocument } from '@interfaces';
import { IUserDocument } from '../user';

export interface IOrderBaseDocument extends Omit<IOrder, 'id'>, Document {}

export interface IOrderDocument extends IOrderBaseDocument {
  parts: Array<IPartDocument['_id']>;
  client: IUserDocument['_id'];
}

export interface IProductPopulatedDocument extends IOrderBaseDocument {
  parts: IPartDocument[];
  client: IUserDocument;
}
