import { FieldErrorsType, FieldRegisterType, FieldsType } from './field.type';

export type FormType = Record<keyof FieldsType, any>;

export type SubmitHandlerType<T> = (form: T) => Promise<void>;

export type UseFormHandleSubmitType<T> = (
  onValid: SubmitHandlerType<T>,
) => (event?: React.BaseSyntheticEvent) => Promise<void>;

export interface UseFormReturn<T extends FormType = FormType> {
  register: FieldRegisterType;
  handleSubmit: UseFormHandleSubmitType<T>;
  errors: FieldErrorsType;
  reset?: () => void;
}
