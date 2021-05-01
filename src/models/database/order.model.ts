import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { IOrderDocument, IOrderModel } from '@interfaces';

export const orderSchema = new Schema<IOrderDocument, IOrderModel>(
  {
    parts: { type: Array(Schema.Types.ObjectId), ref: 'Part', required: true },
    quantity: { type: Number, required: true },
    sum: { type: Number, required: true },
  },
  { versionKey: false },
);

orderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    delete ret._id;
  },
});

orderSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

orderSchema.plugin(mongoose_paginate);

const orderModel = model('Order', orderSchema);
export default orderModel;
