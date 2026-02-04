"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.WithPreselectedOption = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const Select_1 = __importDefault(require("./Select"));
const meta = {
    title: 'components/Inputs/Select',
    component: Select_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: { control: 'text' },
        defaultValue: { control: 'text' },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
        children: { control: 'text', description: 'Select options' },
        onChange: { action: 'changed' },
        onBlur: { action: 'blurred' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", { value: "", disabled: true, selected: true, hidden: true, children: "\uC120\uD0DD\uD558\uC138\uC694" }), (0, jsx_runtime_1.jsx)("option", { value: "option1", children: "\uC635\uC158 1" }), (0, jsx_runtime_1.jsx)("option", { value: "option2", children: "\uC635\uC158 2" }), (0, jsx_runtime_1.jsx)("option", { value: "option3", children: "\uC635\uC158 3" })] })),
        defaultValue: '',
    },
};
exports.WithPreselectedOption = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC120\uD0DD\uD558\uC138\uC694" }), (0, jsx_runtime_1.jsx)("option", { value: "option1", children: "\uC635\uC158 1" }), (0, jsx_runtime_1.jsx)("option", { value: "option2", children: "\uC635\uC158 2" }), (0, jsx_runtime_1.jsx)("option", { value: "option3", children: "\uC635\uC158 3" })] })),
        defaultValue: 'option2',
    },
};
exports.Disabled = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC120\uD0DD\uD558\uC138\uC694" }), (0, jsx_runtime_1.jsx)("option", { value: "option1", children: "\uC635\uC158 1" }), (0, jsx_runtime_1.jsx)("option", { value: "option2", children: "\uC635\uC158 2" }), (0, jsx_runtime_1.jsx)("option", { value: "option3", children: "\uC635\uC158 3" })] })),
        disabled: true,
    },
};
