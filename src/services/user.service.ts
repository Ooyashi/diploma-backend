import bcrypt from 'bcrypt';

import { errorMessages } from '@constants';
import { IUser } from '@interfaces';
import { ClientError } from '@models';
import { userRepository } from '@repositories';

const getUser = async (userId: string) => {
  const user = await userRepository.getById(userId).exec();

  if (!user) {
    throw new ClientError(errorMessages.unknownUser);
  }

  const { password, _id, ...result } = { ...user.toObject(), id: user._id };

  return result;
};

const updateUser = (userId: string, user: IUser) =>
  userRepository.updateById(userId, user).exec();

const changePassword = (userId: string, password: string) => {
  const newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

  return userRepository.updateById(userId, { password: newPassword }).exec();
};

export default {
  getUser,
  updateUser,
  changePassword,
};
