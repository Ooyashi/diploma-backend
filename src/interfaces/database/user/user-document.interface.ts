import { Document } from 'mongoose';

import { IUser } from '@interfaces';

export interface IUserDocument extends Omit<IUser, 'id'>, Document {
  fullName: string;
}
