import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { IPartDocument, IPartModel } from '@interfaces';

export const partSchema = new Schema<IPartDocument, IPartModel>(
  {
    partName: { type: String, required: true },
    partBrand: { type: String, required: true },
    partPrice: { type: Number, required: true },
    partDescription: { type: String, required: true },
    partQuantity: { type: Number, required: true },
    // partForCar: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  },
  { versionKey: false },
);

partSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    delete ret._id;
  },
});

partSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

partSchema.plugin(mongoose_paginate);

const partModel = model('Part', partSchema);
export default partModel;
