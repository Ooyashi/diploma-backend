import { errorMessages } from '@constants';
import { IUser } from '@interfaces';
import { ClientError, userModel } from '@models';
import { getPaginationValue } from '@utils';

const getById = (id: string) => userModel.findById(id);

const createUser = (user: IUser) => {
  const newUser = userModel.create(user);

  return newUser;
};

const editUser = (user: IUser, userId: string) => {
  if (!userModel.findOne({ _id: userId })) {
    throw new ClientError(errorMessages.unknownUser, 400);
  }

  const updatedUser = userModel.updateOne(
    { _id: userId },
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  );

  return updatedUser;
};

const getByEmail = (email: string) =>
  userModel.findOne({ email }).select('+password');

const getAllUsers = (filter: object = {}, page = 0, limit = 0) =>
  userModel.paginate(filter, getPaginationValue(page, limit));

const updateById = (id: string, data: any) =>
  userModel.updateOne({ _id: id }, data);

const deleteById = (id: string) => userModel.deleteOne({ _id: id });

export default {
  getById,
  createUser,
  editUser,
  getByEmail,
  getAllUsers,
  updateById,
  deleteById,
};
