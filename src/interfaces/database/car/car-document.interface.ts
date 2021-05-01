import { Document } from 'mongoose';

import { IOrder, IPartDocument } from '@interfaces';

export interface ICarDocument extends Omit<IOrder, 'id'>, Document {}
