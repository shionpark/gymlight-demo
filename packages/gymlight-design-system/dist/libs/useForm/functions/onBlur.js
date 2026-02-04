"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onBlur = void 0;
/**
 * 필드의 onBlur 이벤트 핸들러를 생성합니다. 이 함수는 필드가 포커스를 잃었을 때 유효성 검사를 수행합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {ValidateFieldType} validateField - 개별 필드를 유효성 검사하는 함수입니다.
 * @returns {React.FocusEventHandler<Element>} onBlur 이벤트 핸들러 함수입니다.
 */
const onBlur = (fields, validateField) => (event) => {
    var _a;
    const { name } = event.target;
    const validationRules = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validationRules;
    if (!validationRules)
        return;
    validateField(event.target, validationRules);
};
exports.onBlur = onBlur;
