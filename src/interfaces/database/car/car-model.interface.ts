import { PaginateModel } from 'mongoose';

import { IOrderDocument } from '@interfaces';

import { ICarDocument } from './car-document.interface';

export interface ICarModel extends PaginateModel<ICarDocument> {}
