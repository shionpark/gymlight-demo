"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
const react_1 = require("react");
const functions_1 = require("./functions");
/**
 * 폼 관리를 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 관리 훅의 반환 값입니다.
 */
const useForm = () => {
    const formRef = (0, react_1.useRef)({ fields: {} });
    const fields = formRef.current.fields;
    const [errors, setErrors] = (0, react_1.useState)({});
    const validateField = (0, react_1.useCallback)((0, functions_1.validateField)(fields, setErrors), [fields, setErrors]);
    const onBlur = (0, react_1.useCallback)((0, functions_1.onBlur)(fields, validateField), [fields, validateField]);
    const register = (0, react_1.useCallback)((0, functions_1.register)(fields, onBlur), [fields, onBlur]);
    const handleSubmit = (0, react_1.useCallback)((0, functions_1.handleSubmit)(fields, validateField), [
        fields,
        validateField,
    ]);
    const reset = (0, react_1.useCallback)(() => {
        Object.keys(fields).forEach((key) => {
            fields[key].value = '';
            if (fields[key].ref && fields[key].ref.current) {
                fields[key].ref.current.value = '';
            }
        });
        setErrors({});
    }, [fields]);
    return {
        register,
        handleSubmit,
        errors,
        reset,
    };
};
exports.useForm = useForm;
