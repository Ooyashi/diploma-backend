import { Types } from 'mongoose';

import { IPartDocument } from '@interfaces';

export default interface IOrder {
  id: string;
  parts: Types.ObjectId[] | IPartDocument[];
  quantity: number;
  sum: number;
}
