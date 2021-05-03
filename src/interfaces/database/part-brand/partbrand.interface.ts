import { Types } from 'mongoose';

import { IPartDocument } from '@interfaces';

export default interface IPartBrand {
  id: string;
  part: Types.ObjectId | IPartDocument;
  brandName: string;
}
