import { useCallback, useRef, useState } from 'react';

import {
  validateField as wrappedValidateField,
  handleSubmit as wrappedHandleSubmit,
  onBlur as wrappedOnBlur,
  register as wrappedRegister,
} from './functions';
import { FormType, UseFormReturn, FieldsType, FieldErrorsType } from './types';

/**
 * 폼 관리를 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 관리 훅의 반환 값입니다.
 */
export const useForm = <SubmitForm extends FormType>(): UseFormReturn<SubmitForm> => {
  const formRef = useRef<{ fields: FieldsType }>({ fields: {} });
  const fields: FieldsType = formRef.current.fields;
  const [errors, setErrors] = useState<FieldErrorsType>({});

  const validateField = useCallback(wrappedValidateField(fields, setErrors), [fields, setErrors]);

  const onBlur = useCallback(wrappedOnBlur(fields, validateField), [fields, validateField]);

  const register = useCallback(wrappedRegister(fields, onBlur), [fields, onBlur]);

  const handleSubmit = useCallback(wrappedHandleSubmit<SubmitForm>(fields, validateField), [
    fields,
    validateField,
  ]);

  const reset = useCallback(() => {
    Object.keys(fields).forEach((key) => {
      fields[key].value = '';
      if (fields[key].ref && fields[key].ref.current) {
        fields[key].ref.current.value = '';
      }
    });
    setErrors({});
  }, [fields]);

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
};
