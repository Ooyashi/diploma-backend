import { Document } from 'mongoose';

import { IUser } from '@interfaces';

export interface IUserDocument extends IUser, Document {
  fullName: string;
}
