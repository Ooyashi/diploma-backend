import { PaginateModel } from 'mongoose';

import { IShipmentDocument } from '@interfaces';

export interface IShipmentModel extends PaginateModel<IShipmentDocument> {}
