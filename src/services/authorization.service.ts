import bcrypt from 'bcrypt';
import { UserRole } from 'enums';

import { errorMessages, validationMessages } from '@constants';
import { IUser } from '@interfaces';
import { ClientError } from '@models';
import { userRepository } from '@repositories';
import { userService } from '@services';
import {
  createJwtToken,
  env,
  isDuplicateMongoError,
  verifyJwtToken,
} from '@utils';

const setAuth = async (userId: string, userRole: string) => {
  const authToken = createJwtToken(
    { id: userId, role: userRole },
    env.authorizationTokenDuration,
  );

  const refreshToken = createJwtToken(
    { id: userId, role: userRole },
    env.refreshTokenDuration,
  );

  return {
    access_token: authToken,
    refresh_token: refreshToken,
  };
};

const cryptPass = (password: string) => {
  const cryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

  return cryptedPassword;
};

const login = async (email: string, password: string) => {
  const user = await userRepository.getByEmail(email).exec();

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return { error: 'Invalid Login' };
  }

  return setAuth(user.id, user.role);
};

const updateToken = async (token: string) => {
  const authData = verifyJwtToken(token);
  if (!authData) {
    throw new ClientError(validationMessages.invalidAuthorizationToken);
  }

  return setAuth(authData.id, authData.role);
};

const register = async (role: UserRole, user: IUser) => {
  user.password = cryptPass(user.password);

  try {
    const newUser = await userRepository.createUser(user);

    return setAuth(newUser.id, newUser.role);
  } catch (error) {
    if (isDuplicateMongoError(error)) {
      return new ClientError(errorMessages.entityAlreadyExist);
    }
    return error;
  }
};

const getUser = async (token: string) => {
  const authData = verifyJwtToken(token);
  if (!authData) {
    throw new ClientError(validationMessages.invalidAuthorizationToken);
  }

  const user = await userRepository.getById(authData.id).exec();

  return user?.toObject<IUser>();
};

export default {
  login,
  updateToken,
  register,
  getUser,
};
