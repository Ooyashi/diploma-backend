import { model, Schema } from 'mongoose';
import mongoose_paginate from 'mongoose-paginate-v2';

import { IUserDocument, IUserModel } from '@interfaces';

export const userSchema = new Schema<IUserDocument, IUserModel>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: { type: String, enum: ['User', 'Admin'], required: true },
  },

  { versionKey: false },
);

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc: any, ret: any) {
    delete ret._id;
  },
});

userSchema.virtual('fullName').get(function (this: IUserDocument) {
  return this.firstName + this.lastName;
});

userSchema.plugin(mongoose_paginate);

const userModel = model<IUserDocument, IUserModel>('User', userSchema);
export default userModel;
