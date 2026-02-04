"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFieldValues = exports.setField = exports.getFieldValues = exports.getFieldValue = void 0;
const lodash_1 = require("lodash");
const type_utils_1 = require("./type.utils");
/**
 * 대상 필드의 값을 반환합니다.
 * @param {RefTargetType} target - 값이 필요한 대상 필드입니다.
 * @returns {unknown} 대상 필드의 값입니다.
 */
const getFieldValue = (target) => {
    const { value } = target;
    if ((0, type_utils_1.isCheckboxElement)(target)) {
        return target.checked;
    }
    return value;
};
exports.getFieldValue = getFieldValue;
/**
 * 모든 필드의 값을 복사하여 반환합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {FormType} 복사된 폼 필드 값의 객체입니다.
 */
const getFieldValues = (fields) => {
    const copiedFields = {};
    for (const key in fields) {
        if (fields[key]) {
            copiedFields[key] = (0, lodash_1.cloneDeep)(fields[key].value);
        }
    }
    return copiedFields;
};
exports.getFieldValues = getFieldValues;
/**
 * 필드를 설정합니다. 필드의 참조, 유효성 검사 규칙, 값을 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {K} name - 설정할 필드의 이름입니다.
 * @param {FieldRefType} ref - 필드의 참조입니다.
 * @param {IValidationRules} [validationRules] - 필드의 유효성 검사 규칙입니다.
 */
const setField = (fields, name, ref, validationRules) => {
    var _a, _b;
    fields[name] = Object.assign(Object.assign({}, fields[name]), { ref, validationRules: validationRules !== null && validationRules !== void 0 ? validationRules : undefined, value: (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "" });
};
exports.setField = setField;
/**
 * 모든 필드의 값을 복사하여 반환합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @returns {FormType} 복사된 폼 필드 값의 객체입니다.
 */
const copyFieldValues = (fields) => {
    var _a;
    const copiedForm = {};
    for (const key in fields) {
        const field = fields[key];
        if (field) {
            const target = (_a = field.ref) === null || _a === void 0 ? void 0 : _a.current;
            if (target) {
                copiedForm[key] = (0, lodash_1.cloneDeep)((0, exports.getFieldValue)(target));
            }
        }
    }
    return copiedForm;
};
exports.copyFieldValues = copyFieldValues;
