import {
  GetCheckboxErrorFieldType,
  GetErrorFieldType,
  IValidationRules,
  ValidationRuleType,
  ValidationRuleValueType,
} from "../types";
import {
  getValidateOptionValue,
  isCheckboxElement,
  getMatchRuleRegExp,
} from "../utils";

import { validationRegExps } from "../validationRegExps";

/**
 * 체크박스 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않은 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {HTMLInputElement} props.target - 대상이 되는 체크박스 요소입니다.
 * @param {IValidationRules} props.validationRules - 적용할 유효성 검사 규칙입니다.
 * @returns 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드 객체입니다.
 */
export const getCheckboxErrorField: GetCheckboxErrorFieldType = ({
  target,
  validationRules,
}) => {
  const { name, checked } = target;

  const requiredOption = validationRules.required;
  const isRequired = getValidateOptionValue(requiredOption);

  const invalid = !!isRequired && !checked;

  return {
    name,
    errorOption: invalid
      ? (requiredOption as ValidationRuleType<ValidationRuleValueType>)
      : undefined,
  };
};

/**
 * 폼 필드를 유효성 검사 규칙에 따라 검사하고, 유효하지 않을 경우 에러 필드를 반환합니다.
 * @param {Object} props - 속성 객체입니다.
 * @param {RefTargetType} props.target - 대상 입력/선택 요소입니다.
 * @param {FieldsType} props.fields - 모든 폼 필드의 컬렉션입니다.
 * @param {IValidationRules} [props.validationRules] - 적용할 유효성 검사 규칙입니다.
 * @returns {IErrorField} 유효하지 않을 경우 이름과 에러 옵션이 포함된 에러 필드입니다.
 */
export const getErrorField: GetErrorFieldType = ({ target, fields }) => {
  const { name, value } = target;
  const field = fields[name];

  if (!field || !field.validationRules) return { name, errorOption: undefined };

  const { validationRules } = field;

  // 특수 타입 Field의 유효성 검사
  if (isCheckboxElement(target)) {
    return getCheckboxErrorField({
      target,
      validationRules,
    });
  }

  // 설정된 유효성 규칙에 따라 Field 검사
  const ruleTypes = Object.keys(validationRules) as (keyof IValidationRules)[];

  const errorRuleType = ruleTypes.find((ruleType) => {
    let rule: RegExp;

    if (!validationRegExps[ruleType]) return false;

    if (ruleType === "match") {
      const matchRegExp = getMatchRuleRegExp(validationRules, fields);
      if (!matchRegExp) return false;
      rule = matchRegExp;
    } else {
      const validationOption = validationRules[ruleType];
      const optionValue =
        getValidateOptionValue<ValidationRuleValueType>(validationOption);

      if (!optionValue) return false;

      rule = validationRegExps[ruleType](optionValue);
    }

    return !rule.test(value as string);
  });

  return {
    name,
    errorOption: errorRuleType ? validationRules[errorRuleType] : undefined,
  };
};
