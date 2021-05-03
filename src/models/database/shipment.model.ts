import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { IShipmentDocument, IShipmentModel } from '@interfaces';

export const shipmentSchema = new Schema<IShipmentDocument, IShipmentModel>(
  {
    id: { type: String, required: true },
    part: { type: Schema.Types.ObjectId, ref: 'Part', required: true },
    shipmentDate: { type: Date, default: Date.now(), required: true },
    shipmentPartName: { type: String, required: true },
    shipmentPartBrand: { type: String, required: true },
    shipmentQuantity: { type: Number, required: true },
  },
  { versionKey: false },
);

shipmentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    delete ret._id;
  },
});

shipmentSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform(_doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  },
});

shipmentSchema.plugin(mongoose_paginate);

const shipmentModel = model('Shipment', shipmentSchema);
export default shipmentModel;
