import { Document } from 'mongoose';

import { IPartBrand, IPartDocument } from '@interfaces';

export interface IPartBrandBaseDocument
  extends Omit<IPartBrand, 'id'>,
    Document {}

export interface IPartBrandDocument extends IPartBrandBaseDocument {
  part: IPartDocument['_id'];
}

export interface IPartBrandPopulatedDocument extends IPartBrandBaseDocument {
  parts: IPartDocument[];
}
