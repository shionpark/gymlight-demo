"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSize = exports.withError = exports.ReadOnly = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const react_2 = require("react");
const Textarea_1 = __importDefault(require("./Textarea"));
/** ## Textarea
 *
 * ### 개요
 *
 * 여러줄의 텍스트를 입력받거나, 표시하기위한 컴포넌트
 *
 * ### 사용처
 *
 * 폼, 상세정보 모달
 *
 * ### 팁
 *
 * 텍스트 길이정보를 업데이트 하기위해서는 text state를 제공해주어야 합니다.
 * - Default 컴포넌트의 show code 버튼을 누르면 참고 코드를 볼 수 있습니다.
 * - read-only모드인경우에는 텍스트 길이가 표시되지 않습니다.
 *
 *
 */
const meta = {
    title: 'Components/Forms/Textarea',
    component: Textarea_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        name: { control: 'text' },
        value: { control: 'text' },
        errorMessage: { control: 'text' },
        placeholder: { control: 'text' },
        size: {
            description: 'height 설정 <br> "normal" | "small" | number (rem)',
            control: {
                type: 'select',
            },
            options: [...Array.from({ length: 30 }, (_, i) => i + 1), 'small', 'normal'],
        },
        width: {
            description: 'width 설정 <br> (단위: rem)',
        },
        isReadOnly: {
            control: 'boolean',
            description: '입력 가능 여부',
        },
        maxTextLength: {
            control: 'number',
            min: 1,
            description: '입력 가능한 글자 수',
        },
    },
};
exports.default = meta;
/** 기본 (입력 모드)
 * - 텍스트 입력 가능
 * - 글자수 표시
 */
exports.Default = {
    args: {
        name: 'default',
    },
    render: () => {
        const [text, setText] = (0, react_2.useState)('');
        const onChange = (event) => {
            setText(event.target.value);
        };
        return ((0, jsx_runtime_1.jsx)(Textarea_1.default, { onChange: onChange, value: text, size: "normal", maxTextLength: 40, placeholder: "\uC790\uC720\uB86D\uAC8C \uC785\uB825\uAC00\uB2A5" }));
    },
};
/** 읽기 전용모드
 * - 텍스트 조회만 가능
 * - 글자수, 오류메시지 미표시
 */
exports.ReadOnly = {
    args: {
        name: 'readOnly',
        value: '입력 불가',
        size: 'normal',
        errorMessage: '',
        isReadOnly: true,
    },
};
/** 오류 메시지 존재
 * - 메시지를 좌측 하단에 표기
 * - 입력 모드에서만 표시됨
 *
 */
exports.withError = {
    args: {
        name: 'With Error Message',
        errorMessage: '잘못 입력하셨습니다.',
    },
};
/** 작은사이즈
 * size를 small로 설정한것
 * - 입력 모드에서만 표시됨
 *
 */
exports.SmallSize = {
    args: {
        name: 'smallSize',
        size: 'small',
    },
};
