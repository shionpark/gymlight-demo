"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateField = void 0;
const utils_1 = require("../utils");
const getErrorField_1 = require("./getErrorField");
/**
 * 필드를 유효성 검사하는 함수입니다. 이 함수는 필드가 유효하지 않을 경우 에러 메시지를 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {React.Dispatch<React.SetStateAction<FieldErrorsType>>} setErrors - 에러 메시지를 설정하는 함수입니다.
 * @returns {ValidateFieldType} 필드를 유효성 검사하는 함수입니다.
 */
const validateField = (fields, setErrors) => (target, validationRules) => {
    const errorField = (0, getErrorField_1.getErrorField)({
        target,
        fields,
        validationRules: validationRules !== null && validationRules !== void 0 ? validationRules : {},
    });
    const { name: fieldName, errorOption } = errorField;
    if (errorOption) {
        setErrors((prev) => (Object.assign(Object.assign({}, prev), { [fieldName]: (0, utils_1.getErrorOptionMessage)(errorOption) })));
        target.valid = false;
    }
    else {
        setErrors((prev) => {
            const next = Object.assign({}, prev);
            delete next[fieldName];
            return next;
        });
        target.valid = true;
    }
    return errorField;
};
exports.validateField = validateField;
