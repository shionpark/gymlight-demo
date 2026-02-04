"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const constants_1 = require("../../../constants");
const Input_1 = require("../Input");
const PhoneInput_styles_1 = require("./PhoneInput.styles");
const PhoneInput = ({ name, defaultValue, placeholder, register, requiredMessage, validationRules, errors, wide, stateValue, onChangeState, readonly, }) => {
    var _a;
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    (0, react_1.useEffect)(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    const formatPhoneNumber = (value) => {
        const phone = value.replace(/[^0-9]/g, '');
        const phoneLength = phone.length;
        if (phoneLength <= 3)
            return `010-`;
        if (phoneLength <= 7)
            return `010-${phone.slice(3)}`;
        return `010-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
    };
    const handleChange = (event) => {
        let inputValue = event.target.value.replace(/[^0-9]/g, '');
        if (!inputValue.startsWith('010')) {
            inputValue = '010' + inputValue.substring(3);
        }
        const formattedValue = formatPhoneNumber('010-' + inputValue.substring(3));
        if (register) {
            setValue(formattedValue);
        }
        else {
            setValue(formattedValue);
            onChangeState && onChangeState(formattedValue);
        }
    };
    return ((0, jsx_runtime_1.jsx)(PhoneInput_styles_1.PhoneInputContainer, { wide: wide !== null && wide !== void 0 ? wide : false, children: (0, jsx_runtime_1.jsx)(Input_1.Input, Object.assign({ readOnly: readonly, type: "tel", value: value, onChange: handleChange, errorMessage: (_a = errors[name]) !== null && _a !== void 0 ? _a : '' }, (register
            ? register({
                name,
                placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : '010-XXXX-XXXX',
                validationRules: validationRules
                    ? validationRules
                    : {
                        required: requiredMessage || true,
                        maxLength: constants_1.VALIDATION.PHONE.MAX_LENGTH,
                        pattern: {
                            value: constants_1.REG_EXP.PHONE,
                            message: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
                        },
                    },
                defaultValue: defaultValue,
            })
            : {
                value: stateValue,
                onChange: handleChange,
                placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : '010-0000-0000',
            }))) }));
};
exports.default = PhoneInput;
