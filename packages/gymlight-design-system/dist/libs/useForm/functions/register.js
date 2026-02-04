"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
/**
 * 폼 필드를 등록하는 함수입니다. 이 함수는 필드의 참조와 유효성 검사 규칙을 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {React.FocusEventHandler<Element>} onBlur - 필드의 onBlur 이벤트 핸들러입니다.
 * @returns {FieldRegisterType} 폼 필드를 등록하는 함수입니다.
 */
const register = (fields, onBlur) => (options) => {
    const { name, defaultValue, placeholder, validationRules } = options;
    const ref = (0, react_1.useRef)(null);
    (0, utils_1.setField)(fields, name, ref, validationRules);
    return {
        ref,
        name,
        defaultValue,
        placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : '',
        minLength: (0, utils_1.getValidateOptionValue)(validationRules === null || validationRules === void 0 ? void 0 : validationRules.minLength),
        maxLength: (0, utils_1.getValidateOptionValue)(validationRules === null || validationRules === void 0 ? void 0 : validationRules.maxLength),
        onBlur,
    };
};
exports.register = register;
