import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { IPartBrandDocument, IPartBrandModel } from '@interfaces';

export const partBrandSchema = new Schema<IPartBrandDocument, IPartBrandModel>(
  {
    part: { type: Schema.Types.ObjectId, ref: 'Part', required: true },
    brandName: { type: String, required: true },
  },
  { versionKey: false },
);

partBrandSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    delete ret._id;
  },
});

partBrandSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

partBrandSchema.plugin(mongoose_paginate);

const partBrandModel = model('PartBrand', partBrandSchema);
export default partBrandModel;
