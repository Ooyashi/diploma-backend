import { Types } from 'mongoose';

import { IPartDocument, IUserDocument } from '@interfaces';

export default interface IOrder {
  id: string;
  parts: Types.ObjectId[] | IPartDocument[];
  client: Types.ObjectId | IUserDocument;
  quantity: number;
  sum: number;
}
