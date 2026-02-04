import { FieldRefType, FieldsType, FormType, IValidationRules, RefTargetType } from "../types";
/**
 * 대상 필드의 값을 반환합니다.
 * @param {RefTargetType} target - 값이 필요한 대상 필드입니다.
 * @returns {unknown} 대상 필드의 값입니다.
 */
export declare const getFieldValue: (target: RefTargetType) => string | boolean;
/**
 * 모든 필드의 값을 복사하여 반환합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {FormType} 복사된 폼 필드 값의 객체입니다.
 */
export declare const getFieldValues: (fields: FieldsType) => FormType;
/**
 * 필드를 설정합니다. 필드의 참조, 유효성 검사 규칙, 값을 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {K} name - 설정할 필드의 이름입니다.
 * @param {FieldRefType} ref - 필드의 참조입니다.
 * @param {IValidationRules} [validationRules] - 필드의 유효성 검사 규칙입니다.
 */
export declare const setField: <K extends keyof FieldsType>(fields: FieldsType, name: K, ref: FieldRefType, validationRules?: IValidationRules) => void;
/**
 * 모든 필드의 값을 복사하여 반환합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {FormType} 복사된 폼 필드 값의 객체입니다.
 */
export declare const copyFieldValues: (fields: FieldsType) => FormType;
