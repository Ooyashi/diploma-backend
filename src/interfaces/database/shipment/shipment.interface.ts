import { Types } from 'mongoose';

import { IPartDocument } from '@interfaces';

export default interface IShipment {
  id: string;
  part: Types.ObjectId | IPartDocument;
  shipmentDate: Date;
  shipmentPartName: string;
  shipmentPartBrand: string;
  shipmentQuantity: number;
}
