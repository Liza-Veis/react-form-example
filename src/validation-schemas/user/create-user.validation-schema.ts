import * as Joi from 'joi';

import { UserValidationMessage, UserValidationRule } from 'common/enums/enums';
import { CreateUserDto } from 'common/types/types';

const createUser = Joi.object<CreateUserDto>({
  name: Joi.string()
    .trim()
    .min(UserValidationRule.NAME_MIN_LENGTH)
    .max(UserValidationRule.NAME_MAX_LENGTH)
    .required()
    .messages({
      'string.empty': UserValidationMessage.NAME_REQUIRED,
      'string.min': UserValidationMessage.NAME_MIN_LENGTH,
      'string.max': UserValidationMessage.NAME_MAX_LENGTH,
    }),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': UserValidationMessage.EMAIL_REQUIRED,
      'string.email': UserValidationMessage.EMAIL_NOT_VALID,
    }),
});

export { createUser };
