import { ObjectSchema } from 'joi';

import { validationMessages } from '@constants';
import { ClientError } from '@models';

const validateObject = <T>(validationSchema: ObjectSchema<T>, params: T) => {
  if (!validationSchema) {
    throw new Error(validationMessages.invalidDataType);
  }

  const { error } = validationSchema.validate(params);
  if (error) {
    throw new ClientError(validationMessages.invalidInput, 400, error);
  }
};

export default validateObject;
