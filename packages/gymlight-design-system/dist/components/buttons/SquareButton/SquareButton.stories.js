"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIcon = exports.Wide = exports.Primary = exports.Active = exports.Disabled = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const SquareButton_1 = __importDefault(require("./SquareButton"));
const outline_1 = require("@heroicons/react/24/outline");
/**
 *
 * ### 개요
 * 일반적으로 사용되는 버튼. 버튼의 텍스트 및 아이콘을 children으로 받음.
 *
 *  아이콘을 추가하고 싶을 경우, span 태그 내에 아이콘을 추가해야함.
 *
 *
 *
 */
const meta = {
    title: 'Components/Buttons/SquareButton',
    component: SquareButton_1.default,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['normal', 'reverse', 'outline', 'primary', 'primary-outline', 'error-outline'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['xsmall', 'small', 'normal'],
            },
        },
        disabled: {
            control: 'boolean',
        },
        active: {
            control: 'boolean',
        },
        wide: {
            control: 'boolean',
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Button',
        variant: 'normal',
        size: 'normal',
        disabled: false,
        active: false,
        wide: false,
    },
};
exports.Disabled = {
    args: Object.assign(Object.assign({}, exports.Default.args), { disabled: true }),
};
exports.Active = {
    args: Object.assign(Object.assign({}, exports.Default.args), { active: true }),
};
exports.Primary = {
    args: Object.assign(Object.assign({}, exports.Default.args), { variant: 'primary' }),
};
exports.Wide = {
    args: Object.assign(Object.assign({}, exports.Default.args), { wide: true }),
};
exports.WithIcon = {
    args: Object.assign({}, exports.Default.args),
    render: (args) => ((0, jsx_runtime_1.jsxs)(SquareButton_1.default, Object.assign({}, args, { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}) }), "Button With Icon"] }))),
};
