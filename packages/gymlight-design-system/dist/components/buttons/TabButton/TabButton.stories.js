"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowOutline = exports.Active = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const TabButton_1 = __importDefault(require("./TabButton"));
/**
 *
 * ### 개요
 *
 * 페이지의 하위 요소. 탭을 클릭하면 해당 탭에 맞는 컴포넌트가 보여짐.
 *
 * ### 사용처
 *
 * 회원관리(공통), 통계관리(관리자), 회계관리(관리자), 지점관리(관리자), 내업무관리(트레이너), 실적관리(트레이너) 페이지
 *
 */
const meta = {
    title: 'Components/Buttons/TabButton',
    component: TabButton_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        onClick: { action: 'clicked' },
        children: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Tab',
    },
};
exports.Active = {
    args: {
        children: 'Tab',
        active: true,
    },
    render: (args) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({}, args)) })),
};
exports.OverflowOutline = {
    args: {
        children: 'Tab',
    },
    render: (args) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({}, args)), (0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({}, args)), (0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({}, args)), (0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({ className: "selected" }, args))] })),
};
