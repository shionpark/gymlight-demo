"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorField = exports.getCheckboxErrorField = void 0;
const utils_1 = require("../utils");
const validationRegExps_1 = require("../validationRegExps");
/**
 * 체크박스 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않은 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {HTMLInputElement} props.target - 대상이 되는 체크박스 요소입니다.
 * @param {IValidationRules} props.validationRules - 적용할 유효성 검사 규칙입니다.
 * @returns 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드 객체입니다.
 */
const getCheckboxErrorField = ({ target, validationRules, }) => {
    const { name, checked } = target;
    const requiredOption = validationRules.required;
    const isRequired = (0, utils_1.getValidateOptionValue)(requiredOption);
    const invalid = !!isRequired && !checked;
    return {
        name,
        errorOption: invalid
            ? requiredOption
            : undefined,
    };
};
exports.getCheckboxErrorField = getCheckboxErrorField;
/**
 * 폼 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않을 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {RefTargetType} props.target - 대상 입력/선택 요소입니다.
 * @param {FieldsType} props.fields - 모든 폼 필드의 컬렉션입니다.
 * @param {IValidationRules} [props.validationRules] - 적용할 유효성 검사 규칙입니다.
 * @returns {IErrorField} 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드입니다.
 */
const getErrorField = ({ target, fields }) => {
    const { name, value } = target;
    const field = fields[name];
    if (!field || !field.validationRules)
        return { name, errorOption: undefined };
    const { validationRules } = field;
    // 특수 타입 Field의 유효성 검사
    if ((0, utils_1.isCheckboxElement)(target)) {
        return (0, exports.getCheckboxErrorField)({
            target,
            validationRules,
        });
    }
    // 설정된 유효성 규칙에 따라 Field 검사
    const ruleTypes = Object.keys(validationRules);
    const errorRuleType = ruleTypes.find((ruleType) => {
        let rule;
        if (!validationRegExps_1.validationRegExps[ruleType])
            return false;
        if (ruleType === "match") {
            const matchRegExp = (0, utils_1.getMatchRuleRegExp)(validationRules, fields);
            if (!matchRegExp)
                return false;
            rule = matchRegExp;
        }
        else {
            const validationOption = validationRules[ruleType];
            const optionValue = (0, utils_1.getValidateOptionValue)(validationOption);
            if (!optionValue)
                return false;
            rule = validationRegExps_1.validationRegExps[ruleType](optionValue);
        }
        return !rule.test(value);
    });
    return {
        name,
        errorOption: errorRuleType ? validationRules[errorRuleType] : undefined,
    };
};
exports.getErrorField = getErrorField;
