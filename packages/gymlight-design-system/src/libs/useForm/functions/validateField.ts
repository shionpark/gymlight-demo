import { FieldErrorsType, FieldsType, ValidateFieldType } from "../types";
import { getErrorOptionMessage } from "../utils";

import { getErrorField } from "./getErrorField";

/**
 * 필드를 유효성 검사하는 함수입니다. 이 함수는 필드가 유효하지 않을 경우 에러 메시지를 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {React.Dispatch<React.SetStateAction<FieldErrorsType>>} setErrors - 에러 메시지를 설정하는 함수입니다.
 * @returns {ValidateFieldType} 필드를 유효성 검사하는 함수입니다.
 */
export const validateField =
  (
    fields: FieldsType,
    setErrors: React.Dispatch<React.SetStateAction<FieldErrorsType>>,
  ): ValidateFieldType =>
  (target, validationRules) => {
    const errorField = getErrorField({
      target,
      fields,
      validationRules: validationRules ?? {},
    });

    const { name: fieldName, errorOption } = errorField;

    if (errorOption) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: getErrorOptionMessage(errorOption),
      }));

      target.valid = false;
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });

      target.valid = true;
    }

    return errorField;
  };
