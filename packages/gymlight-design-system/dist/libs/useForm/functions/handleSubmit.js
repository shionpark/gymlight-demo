"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSubmit = void 0;
const utils_1 = require("../utils");
/**
 * 폼 제출 핸들러를 생성합니다. 이 함수는 모든 필드를 유효성 검사하고, 유효하지 않은 경우 첫 번째 에러 메시지를 경고창으로 출력합니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {ValidateFieldType} validateField - 개별 필드를 유효성 검사하는 함수입니다.
 * @returns {UseFormHandleSubmitType<SubmitForm>} 폼 제출을 처리하는 함수입니다.
 */
const handleSubmit = (fields, validateField) => (onValid) => (event) => __awaiter(void 0, void 0, void 0, function* () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // 1) 전체 Field 유효성 검사
    // 2) 유효하지 않은 첫번째 Field 정보 획득
    let isValid = true;
    let firstErrorOption;
    for (const key in fields) {
        const field = fields[key];
        if (!field)
            continue;
        const { ref, validationRules } = field;
        const target = ref.current;
        if (!target)
            continue;
        const { errorOption } = validateField(target, validationRules);
        if (!isValid)
            continue;
        if (errorOption) {
            firstErrorOption = errorOption;
            isValid = false;
        }
    }
    // 경고창으로 에러메시지 출력
    if (firstErrorOption) {
        const errorMessage = (0, utils_1.getErrorOptionMessage)(firstErrorOption);
        if (errorMessage) {
            alert(errorMessage);
        }
    }
    // 폼이 유효할 경우 제출
    if (isValid) {
        const submitForm = (0, utils_1.copyFieldValues)(fields);
        yield onValid(submitForm);
    }
});
exports.handleSubmit = handleSubmit;
