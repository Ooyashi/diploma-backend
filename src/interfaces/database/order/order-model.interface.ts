import { PaginateModel } from 'mongoose';

import { IOrderDocument } from '@interfaces';

export interface IOrderModel extends PaginateModel<IOrderDocument> {}
