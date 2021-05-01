import { IServerResponse, IServerResponseWithData } from './types';

const getSuccessResponseWithData = <T>(
  data: T,
  message = 'Success',
  status = 200,
  success = true,
): IServerResponseWithData<T> => ({
  data,
  message,
  status,
  success,
});

const getSuccessResponse = (
  message = 'Success',
  status = 200,
  success = true,
): IServerResponse => ({
  message,
  status,
  success,
});

export default {
  getSuccessResponseWithData,
  getSuccessResponse,
};
