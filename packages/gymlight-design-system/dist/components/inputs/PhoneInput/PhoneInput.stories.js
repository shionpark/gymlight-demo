"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPreselectedNumber = exports.WideInput = exports.WithErrorMessage = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const styles_1 = require("../../../styles");
const PhoneInput_1 = __importDefault(require("./PhoneInput"));
const mockRegister = (options) => {
    const ref = (0, react_1.useRef)(null);
    return {
        ref,
        name: options.name,
        placeholder: options.placeholder || '',
        onBlur: () => {
            console.log(`${options.name} 필드 블러 처리`);
        },
    };
};
const meta = {
    title: 'components/Inputs/PhoneInput',
    component: PhoneInput_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_2.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: { control: 'text' },
        defaultValue: { control: 'text' },
        placeholder: { control: 'text' },
        register: { control: 'object' },
        validationRules: { control: 'object' },
        requiredMessage: { control: 'text' },
        errors: { control: 'object' },
        wide: { control: 'boolean' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'phone',
        defaultValue: '010-',
        placeholder: '010-XXXX-XXXX',
        register: mockRegister,
        errors: {},
        wide: false,
    },
};
exports.WithErrorMessage = {
    args: {
        name: 'phone',
        defaultValue: '010-1234-5678',
        placeholder: '010-XXXX-XXXX',
        register: mockRegister,
        errors: {
            phone: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
        },
        wide: false,
    },
};
exports.WideInput = {
    args: {
        name: 'phone',
        defaultValue: '010-',
        placeholder: '010-XXXX-XXXX',
        register: mockRegister,
        errors: {},
        wide: true,
    },
};
exports.WithPreselectedNumber = {
    args: {
        name: 'phone',
        defaultValue: '010-1234-5678',
        placeholder: '010-XXXX-XXXX',
        register: mockRegister,
        errors: {},
        wide: false,
    },
};
