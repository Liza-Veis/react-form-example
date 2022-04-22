import { UserValidationRule } from './user-validation-rule.enum';

const UserValidationMessage = {
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: `Name must have a minimum of ${UserValidationRule.NAME_MIN_LENGTH} characters`,
  NAME_MAX_LENGTH: `Name must have a maximum of
    ${UserValidationRule.NAME_MAX_LENGTH} characters`,
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_NOT_VALID: 'The email format is not valid',
} as const;

export { UserValidationMessage };
