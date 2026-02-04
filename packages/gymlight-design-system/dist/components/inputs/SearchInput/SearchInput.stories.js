"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithInitFn = exports.SmallSize = exports.ReadOnly = exports.WithErrorMessage = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const SearchInput_1 = __importDefault(require("./SearchInput"));
/**
 *
 * ### 개요
 *
 * 검색을 위한 Input
 *
 * ### 사용처
 *
 * Header 및 Table
 *
 * ### 설명
 * Input 컴포넌트에서 SearchInput 컴포넌트에 불필요한 속성은 제거하여 작성했습니다.
 *
 * 스타일적으로 바뀐 부분은 아이콘과 border radius가 추가되었습니다!!!!
 * */
const meta = {
    title: 'components/Inputs/SearchInput',
    component: SearchInput_1.default,
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
        errorMessage: { control: 'text' },
        onChange: { action: 'changed' },
        onKeyDown: { action: 'key down' },
        onKeyPress: { action: 'key press' },
        onBlur: { action: 'blurred' },
        size: { control: { type: 'radio', options: ['small', 'normal'] } },
    },
};
exports.default = meta;
/** 기본 검색창 */
exports.Default = {
    args: {
        name: 'default',
        placeholder: '검색어 입력',
        size: 'normal',
        errorMessage: '',
        readOnly: false,
    },
};
/** 에러 메시지 검색창 */
exports.WithErrorMessage = {
    args: {
        name: 'with-error',
        placeholder: '검색어 입력',
        errorMessage: '잘못된 검색어입니다.',
        size: 'normal',
    },
};
/** ReadOnly 상태 스토리 */
exports.ReadOnly = {
    args: {
        name: 'read-only',
        placeholder: '읽기 전용 필드',
        readOnly: true,
        size: 'normal',
    },
};
/** 작은 사이즈 검색창 */
exports.SmallSize = {
    args: {
        name: 'small-size',
        placeholder: '작은 입력 필드',
        size: 'small',
    },
};
exports.WithInitFn = {
    args: Object.assign(Object.assign({}, exports.Default.args), { handleInit: () => alert('click!') }),
};
