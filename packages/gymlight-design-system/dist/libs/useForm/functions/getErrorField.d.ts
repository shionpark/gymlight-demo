import { GetCheckboxErrorFieldType, GetErrorFieldType } from "../types";
/**
 * 체크박스 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않은 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {HTMLInputElement} props.target - 대상이 되는 체크박스 요소입니다.
 * @param {IValidationRules} props.validationRules - 적용할 유효성 검사 규칙입니다.
 * @returns 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드 객체입니다.
 */
export declare const getCheckboxErrorField: GetCheckboxErrorFieldType;
/**
 * 폼 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않을 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {RefTargetType} props.target - 대상 입력/선택 요소입니다.
 * @param {FieldsType} props.fields - 모든 폼 필드의 컬렉션입니다.
 * @param {IValidationRules} [props.validationRules] - 적용할 유효성 검사 규칙입니다.
 * @returns {IErrorField} 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드입니다.
 */
export declare const getErrorField: GetErrorFieldType;
