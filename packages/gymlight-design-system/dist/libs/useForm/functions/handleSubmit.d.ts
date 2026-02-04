import { FieldsType, UseFormHandleSubmitType, ValidateFieldType } from "../types";
/**
 * 폼 제출 핸들러를 생성합니다. 이 함수는 모든 필드를 유효성 검사하고, 유효하지 않은 경우 첫 번째 에러 메시지를 경고창으로 출력합니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {ValidateFieldType} validateField - 개별 필드를 유효성 검사하는 함수입니다.
 * @returns {UseFormHandleSubmitType<SubmitForm>} 폼 제출을 처리하는 함수입니다.
 */
export declare const handleSubmit: <SubmitForm>(fields: FieldsType, validateField: ValidateFieldType) => UseFormHandleSubmitType<SubmitForm>;
