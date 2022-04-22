import { joiResolver } from '@hookform/resolvers/joi';
import { Schema } from 'joi';
import {
  Control,
  FieldErrors,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';

type UseAppFormParams = {
  defaultValues: Record<string, unknown>;
  validationSchema: Schema;
};

type UseAppFormReturn<T extends FieldValues = FieldValues> = {
  control: Control;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<T>;
  reset: UseFormReset<T>;
};

const useAppForm = <T extends FieldValues = FieldValues>({
  validationSchema,
  defaultValues,
}: UseAppFormParams): UseAppFormReturn<T> => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FieldValues>({
    defaultValues,
    resolver: joiResolver(validationSchema),
  });

  return {
    control,
    errors,
    handleSubmit: handleSubmit as UseFormHandleSubmit<T>,
    reset: reset as UseFormReset<T>,
  };
};

export { useAppForm };
