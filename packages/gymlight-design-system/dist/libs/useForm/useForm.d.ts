import { FormType, UseFormReturn } from './types';
/**
 * 폼 관리를 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 관리 훅의 반환 값입니다.
 */
export declare const useForm: <SubmitForm extends FormType>() => UseFormReturn<SubmitForm>;
