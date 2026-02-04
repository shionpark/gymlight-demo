import { createContext, ReactNode, useContext } from "react";

import { UseFormReturn, FormType } from "./types";

const FormContext = createContext<UseFormReturn | null>(null);

/**
 * 폼 컨텍스트를 사용하기 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 컨텍스트의 값을 반환합니다.
 */
export const useFormContext = <
  SubmitForm extends FormType,
>(): UseFormReturn<SubmitForm> =>
  useContext(FormContext) as UseFormReturn<SubmitForm>;

interface FormProviderProps<T extends FormType> extends UseFormReturn<T> {
  children: ReactNode;
}

/**
 * 폼 컨텍스트 프로바이더 컴포넌트입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @param {FormProviderProps<SubmitForm>} props - 폼 컨텍스트 프로바이더의 속성입니다.
 * @returns {JSX.Element} 폼 컨텍스트 프로바이더 컴포넌트입니다.
 */
export const FormProvider = <SubmitForm extends FormType>(
  props: FormProviderProps<SubmitForm>,
) => {
  const { children, ...rest } = props;

  return (
    <FormContext.Provider value={{ ...rest } as UseFormReturn}>
      {children}
    </FormContext.Provider>
  );
};
