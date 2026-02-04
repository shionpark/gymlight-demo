"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlledValue = exports.WithDefaultValue = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const GenderSelect_1 = __importDefault(require("./GenderSelect"));
const meta = {
    title: 'components/Inputs/GenderSelect',
    component: GenderSelect_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: {
            control: 'text',
            description: '선택 필드의 이름을 지정합니다.',
        },
        values: {
            control: 'array',
            description: '드롭다운에 표시할 값들의 배열을 지정합니다.',
            defaultValue: ['Male', 'Female', 'Other'],
        },
        defaultValue: {
            control: 'text',
            description: '초기 선택된 값을 지정합니다.',
        },
        value: {
            control: 'text',
            description: '현재 선택된 값을 지정합니다.',
        },
        onChange: {
            action: 'changed',
            description: '선택된 값이 변경될 때 호출되는 핸들러입니다.',
        },
        onBlur: {
            action: 'blurred',
            description: '선택 필드가 포커스를 잃을 때 호출되는 핸들러입니다.',
        },
    },
    parameters: {
        layout: 'centered',
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'gender',
        values: ['남', '여'],
    },
};
exports.WithDefaultValue = {
    args: {
        name: 'gender',
        values: ['남', '여'],
        defaultValue: '남',
    },
};
exports.ControlledValue = {
    args: {
        name: 'gender',
        values: ['남', '여'],
        value: '남',
    },
};
