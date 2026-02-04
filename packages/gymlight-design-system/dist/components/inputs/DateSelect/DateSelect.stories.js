"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithErrorMessage = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_2 = require("@emotion/react");
const styles_1 = require("../../../styles");
const DateSelect_1 = __importDefault(require("./DateSelect"));
const mockRegister = (options) => {
    const ref = react_1.default.createRef();
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
    title: 'components/Inputs/DateSelect',
    component: DateSelect_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_2.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: { control: 'text' },
        register: { control: 'object' },
        errors: { control: 'object' },
        yearRange: { description: '커스텀 가능한 년도 선택 범위', control: 'array' },
        monthRange: { description: '커스텀 가능한 달 선택 범위', control: 'array' },
        daysRange: { description: '커스텀 가능한 날짜 선택 범위 ', control: 'array' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'birthdate',
        register: mockRegister,
        errors: {},
    },
};
exports.WithErrorMessage = {
    args: {
        name: 'birthdate',
        register: mockRegister,
        errors: {
            birthdateYear: '연도를 입력하세요',
            birthdateMonth: '월을 입력하세요',
            birthdateDay: '일을 입력하세요',
        },
    },
};
