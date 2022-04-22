import { FC } from 'react';

import { CreateUserDto } from 'common/types/types';
import { useAppForm } from 'hooks/hooks';
import { Button, Input } from 'components/common/common';
import { ButtonType, InputType } from 'common/enums/enums';
import { createUser as createUserValidationSchema } from 'validation-schemas/validation-schemas';
import styles from './styles.module.scss';

const DEFAULT_CREATE_USER_PAYLOAD: CreateUserDto = {
  name: '',
  email: '',
};

type CreateUserFormProps = {
  onSubmit: (payload: CreateUserDto) => void;
};

const CreateUserForm: FC<CreateUserFormProps> = ({ onSubmit }) => {
  const { control, errors, handleSubmit, reset } = useAppForm<CreateUserDto>({
    defaultValues: DEFAULT_CREATE_USER_PAYLOAD,
    validationSchema: createUserValidationSchema,
  });

  const createUser = (payload: CreateUserDto): void => {
    onSubmit(payload);
    reset();
  };

  return (
    <div>
      <h1 className={styles.title}>Create User</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          type={InputType.TEXT}
          label="Name"
          placeholder="Enter your name"
          name="name"
          control={control}
          errors={errors}
        />
        <Input
          type={InputType.EMAIL}
          label="Email"
          placeholder="Enter your email"
          name="email"
          control={control}
          errors={errors}
        />
        <Button
          type={ButtonType.SUBMIT}
          label="Create User"
          onClick={handleSubmit(createUser)}
        />
      </form>
    </div>
  );
};

export default CreateUserForm;
