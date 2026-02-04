import { ReactNode } from "react";
import { UseFormReturn, FormType } from "./types";
/**
 * 폼 컨텍스트를 사용하기 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 컨텍스트의 값을 반환합니다.
 */
export declare const useFormContext: <SubmitForm extends FormType>() => UseFormReturn<SubmitForm>;
interface FormProviderProps<T extends FormType> extends UseFormReturn<T> {
    children: ReactNode;
}
/**
 * 폼 컨텍스트 프로바이더 컴포넌트입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @param {FormProviderProps<SubmitForm>} props - 폼 컨텍스트 프로바이더의 속성입니다.
 * @returns {JSX.Element} 폼 컨텍스트 프로바이더 컴포넌트입니다.
 */
export declare const FormProvider: <SubmitForm extends FormType>(props: FormProviderProps<SubmitForm>) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
