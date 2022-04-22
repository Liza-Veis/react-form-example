import { FC } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

import { InputType } from 'common/enums/enums';
import styles from './styles.module.scss';

type InputProps = {
  label: string;
  name: Path<FieldValues>;
  control: Control;
  errors: FieldErrors;
  type?: InputType;
  placeholder?: string;
  rows?: number;
};

const Input: FC<InputProps> = ({
  label,
  name,
  control,
  errors,
  placeholder = '',
  type = InputType.TEXT,
}) => {
  const { field } = useController({ name, control });
  const hasError = Boolean(errors[name]);

  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={clsx([styles.input, hasError && styles.inputError])}
      />
      <span className={styles.error}>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </label>
  );
};

export default Input;
