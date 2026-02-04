"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sizes = exports.Variants = exports.Primary = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const IconButton_1 = __importDefault(require("./IconButton"));
const outline_1 = require("@heroicons/react/24/outline");
/**
 * ### 개요
 *
 * 아이콘을 클릭해 액션을 취하기 위한 버튼
 *
 * icon을 prop으로 받음
 *
 *
 *
 */
const meta = {
    title: 'Components/Buttons/IconButton',
    component: IconButton_1.default,
    argTypes: {
        icon: {
            control: 'select',
            options: {
                None: null,
                UserPlusIcon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}),
                FilterIcon: (0, jsx_runtime_1.jsx)(outline_1.AdjustmentsHorizontalIcon, {}),
                Logout: (0, jsx_runtime_1.jsx)(outline_1.ArrowRightStartOnRectangleIcon, {}),
            },
        },
        variant: {
            control: {
                type: 'radio',
                options: ['normal', 'primary', 'icon-only', 'active'],
            },
        },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'normal', 'large'],
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}),
        variant: 'normal',
        size: 'normal',
    },
};
exports.Primary = {
    args: Object.assign(Object.assign({}, exports.Default.args), { variant: 'primary' }),
};
exports.Variants = {
    render: ({ size }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "Primary" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: "primary", size: size }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: "Default" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: "normal", size: size }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: "Icon Only" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: "icon-only", size: size }), (0, jsx_runtime_1.jsx)("div", { children: "Active" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: "active", size: size })] })),
    argTypes: {
        variant: {
            control: false,
        },
    },
};
exports.Sizes = {
    render: ({ variant }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "Small" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: variant, size: "small" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: "Medium" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: variant, size: "normal" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: "Large" }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { icon: (0, jsx_runtime_1.jsx)(outline_1.UserPlusIcon, {}), variant: variant, size: "large" })] })),
    argTypes: {
        size: {
            control: false,
        },
    },
};
