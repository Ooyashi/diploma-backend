import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { ICarDocument, ICarModel } from '@interfaces';

export const carSchema = new Schema<ICarDocument, ICarModel>(
  {
    carBrand: { type: String, required: true },
    carModel: { type: String, required: true },
    carModelYear: { type: Number, required: true },
    carVinCode: { type: String, required: true },
  },
  { versionKey: false },
);

carSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    delete ret._id;
  },
});

carSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

carSchema.plugin(mongoose_paginate);

const carModel = model('Car', carSchema);
export default carModel;
