"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedText = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const StatusButton_1 = __importDefault(require("./StatusButton"));
/**
 * #### 개요
 *
 * prop으로 넘겨주는 색상코드(`colors`)에서 현재 상태(`status`)의 배경색을 갖는 버튼
 *
 * #### 사용처
 *
 * 상품의 카테고리 버튼(ex.회원권, PT, ...), 락커의 상태 표시 버튼(ex.사용가능, 사용중, ...)
 *
 * #### 사용 방법
 *
 * 색상 코드 객체와 현재 버튼의 상태를 prop으로 넘겨줌
 *
 */
const meta = {
    title: 'Components/Buttons/StatusButton',
    component: StatusButton_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        colors: { control: 'text' },
        status: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    render: (args) => {
        const productStatus = {
            판매중: '#32CD32',
            판매중지: '#FF4500',
            이벤트: '#FFA500',
            삭제: '#FF0000',
        };
        const status = '판매중';
        return (0, jsx_runtime_1.jsx)(StatusButton_1.default, { colors: productStatus, status: status });
    },
};
exports.FormattedText = {
    render: (args) => {
        const productCategories = {
            PT: '#FFD700',
            운동복: '#FF6347',
            회원권: '#4682B4',
            락커: '#6A5ACD',
            패키지: '#20B2AA',
        };
        const status = '회원권';
        return ((0, jsx_runtime_1.jsx)(StatusButton_1.default, { colors: productCategories, status: status, children: `판매중: ${status}` }));
    },
};
