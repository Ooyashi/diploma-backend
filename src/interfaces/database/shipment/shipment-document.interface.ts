import { Document } from 'mongoose';

import { IPartDocument, IShipment } from '@interfaces';

export interface IShipmentBaseDocument
  extends Omit<IShipment, 'id'>,
    Document {}

export interface IShipmentDocument extends IShipmentBaseDocument {
  part: IPartDocument['_id'];
}

export interface IShipmentPopulatedDocument extends IShipmentBaseDocument {
  part: IPartDocument;
}
