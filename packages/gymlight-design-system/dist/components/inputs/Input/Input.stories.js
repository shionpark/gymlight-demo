"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInput = exports.SmallSize = exports.ReadOnly = exports.WithErrorMessage = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const Input_1 = __importDefault(require("./Input"));
const meta = {
    title: 'components/Inputs/Input',
    component: Input_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: { control: 'text' },
        type: { control: 'text' },
        value: { control: 'text' },
        defaultValue: { control: 'text' },
        placeholder: { control: 'text' },
        readOnly: { control: 'boolean' },
        width: { control: 'number' },
        min: { control: 'number' },
        max: { control: 'number' },
        minLength: { control: 'number' },
        maxLength: { control: 'number' },
        pattern: { control: 'text' },
        errorMessage: { control: 'text' },
        onChange: { action: 'changed' },
        onKeyDown: { action: 'key down' },
        onKeyPress: { action: 'key press' },
        onBlur: { action: 'blurred' },
        size: { control: { type: 'radio', options: ['small', 'normal'] } },
    },
};
exports.default = meta;
// 기본 스토리 정의
exports.Default = {
    args: {
        name: 'default',
        placeholder: '입력하세요',
        size: 'normal',
        errorMessage: '',
    },
};
// 에러 메시지 스토리
exports.WithErrorMessage = {
    args: {
        name: 'with-error',
        placeholder: '입력하세요',
        errorMessage: '이 필드는 필수입니다.',
        size: 'normal',
    },
};
// ReadOnly 상태 스토리
exports.ReadOnly = {
    args: {
        name: 'read-only',
        value: '읽기 전용 텍스트',
        readOnly: true,
        size: 'normal',
    },
};
// 작은 사이즈 스토리
exports.SmallSize = {
    args: {
        name: 'small-size',
        placeholder: '작은 입력 필드',
        size: 'small',
    },
};
// 숫자 입력 필드 스토리
exports.NumberInput = {
    args: {
        name: 'number-input',
        type: 'number',
        placeholder: '숫자를 입력하세요',
        min: 0,
        max: 100,
    },
};
