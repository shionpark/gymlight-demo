import { ValidationRuleValueType, ValidationRuleType, ValidationRuleWithMessageType, IValidationRules, FieldsType } from "../types";
/**
 * 유효성 검사 규칙에 메시지가 있는지 확인합니다.
 * @template T - 유효성 검사 규칙 값의 타입입니다.
 * @param {ValidationRuleType<T>} rule - 확인할 유효성 검사 규칙입니다.
 * @returns {rule is ValidationRuleWithMessageType<T>} 규칙에 메시지가 있으면 true, 아니면 false를 반환합니다.
 */
export declare const hasValidationMessage: <T extends ValidationRuleValueType>(rule: ValidationRuleType<T>) => rule is ValidationRuleWithMessageType<T>;
/**
 * 유효성 검사 옵션 값을 반환합니다.
 * @template T - 유효성 검사 규칙 값의 타입입니다.
 * @param {ValidationRuleType<T>} [rule] - 유효성 검사 규칙입니다.
 * @returns {any} 유효성 검사 옵션 값입니다.
 */
export declare const getValidateOptionValue: <T extends ValidationRuleValueType>(rule?: ValidationRuleType<T>) => any;
/**
 * 유효성 검사 규칙의 에러 메시지를 반환합니다.
 * @param {string | ValidationRuleType} rule - 유효성 검사 규칙입니다.
 * @returns {string} 에러 메시지입니다.
 */
export declare const getErrorOptionMessage: (rule: string | ValidationRuleType) => string;
/**
 * 유효성 검사 규칙의 정규 표현식을 반환합니다.
 * @template K - 유효성 검사 규칙의 키 타입입니다.
 * @param {IValidationRules} validationRules - 유효성 검사 규칙의 객체입니다.
 * @param {K} ruleType - 유효성 검사 규칙의 키입니다.
 * @returns {RegExp | undefined} 유효성 검사 규칙의 정규 표현식입니다.
 */
export declare const getRuleRegExp: <K extends keyof IValidationRules>(validationRules: IValidationRules, ruleType: K) => RegExp | ((matchField: string) => RegExp) | undefined;
/**
 * 매치 유효성 검사 규칙의 정규 표현식을 반환합니다.
 * @param {IValidationRules} validationRules - 유효성 검사 규칙의 객체입니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {RegExp | undefined} 매치 유효성 검사 규칙의 정규 표현식입니다.
 */
export declare const getMatchRuleRegExp: (validationRules: IValidationRules, fields: FieldsType) => RegExp | undefined;
