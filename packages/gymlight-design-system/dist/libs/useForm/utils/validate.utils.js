"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchRuleRegExp = exports.getRuleRegExp = exports.getErrorOptionMessage = exports.getValidateOptionValue = exports.hasValidationMessage = void 0;
const validationRegExps_1 = require("../validationRegExps");
const type_utils_1 = require("./type.utils");
/**
 * 유효성 검사 규칙에 메시지가 있는지 확인합니다.
 * @template T - 유효성 검사 규칙 값의 타입입니다.
 * @param {ValidationRuleType<T>} rule - 확인할 유효성 검사 규칙입니다.
 * @returns {rule is ValidationRuleWithMessageType<T>} 규칙에 메시지가 있으면 true, 아니면 false를 반환합니다.
 */
const hasValidationMessage = (rule) => {
    return rule && rule.value !== undefined;
};
exports.hasValidationMessage = hasValidationMessage;
/**
 * 유효성 검사 옵션 값을 반환합니다.
 * @template T - 유효성 검사 규칙 값의 타입입니다.
 * @param {ValidationRuleType<T>} [rule] - 유효성 검사 규칙입니다.
 * @returns {any} 유효성 검사 옵션 값입니다.
 */
const getValidateOptionValue = (rule) => {
    if (!rule)
        return;
    return (0, exports.hasValidationMessage)(rule) ? rule.value : rule;
};
exports.getValidateOptionValue = getValidateOptionValue;
/**
 * 유효성 검사 규칙의 에러 메시지를 반환합니다.
 * @param {string | ValidationRuleType} rule - 유효성 검사 규칙입니다.
 * @returns {string} 에러 메시지입니다.
 */
const getErrorOptionMessage = (rule) => {
    if ((0, exports.hasValidationMessage)(rule))
        return rule.message;
    else if ((0, type_utils_1.isString)(rule))
        return rule;
    return "";
};
exports.getErrorOptionMessage = getErrorOptionMessage;
/**
 * 유효성 검사 규칙의 정규 표현식을 반환합니다.
 * @template K - 유효성 검사 규칙의 키 타입입니다.
 * @param {IValidationRules} validationRules - 유효성 검사 규칙의 객체입니다.
 * @param {K} ruleType - 유효성 검사 규칙의 키입니다.
 * @returns {RegExp | undefined} 유효성 검사 규칙의 정규 표현식입니다.
 */
const getRuleRegExp = (validationRules, ruleType) => {
    const validationOption = validationRules[ruleType];
    const optionValue = (0, exports.getValidateOptionValue)(validationOption);
    if (!optionValue)
        return;
    return validationRegExps_1.validationRegExps[ruleType](optionValue);
};
exports.getRuleRegExp = getRuleRegExp;
/**
 * 매치 유효성 검사 규칙의 정규 표현식을 반환합니다.
 * @param {IValidationRules} validationRules - 유효성 검사 규칙의 객체입니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {RegExp | undefined} 매치 유효성 검사 규칙의 정규 표현식입니다.
 */
const getMatchRuleRegExp = (validationRules, fields) => {
    const matchOption = validationRules.match;
    const matchValue = (0, exports.getValidateOptionValue)(matchOption);
    if (!matchValue)
        return;
    return validationRegExps_1.validationRegExps.match(fields)(matchValue);
};
exports.getMatchRuleRegExp = getMatchRuleRegExp;
