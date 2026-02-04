"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const SelectWithCustomOption_1 = __importDefault(require("./SelectWithCustomOption"));
/** ## SelectWithCustomOption
 *
 *
 * ## 개요
 *
 * 사용자가 value를 직접 수정할수있는 option을 포함하는 Select
 *
 * ## 사용처
 *
 * 페이지네이션 쿼리로 데이터를 조회하는곳, 그중에서 유저의 자율 설정이 필요하다 싶은 모든곳
 *
 * ## 사용 팁
 *
 * 그냥 일반 Select처럼 사용하세요.
 * children으로 option을 여러개 넣어주면 됩니다.
 *
 * 자동으로 "직접입력" 이라는 option이 추가되고, 해당 option 선택시, Select가 input으로 변경됩니다.
 * 만약 "직접입력" 텍스트를 다른 값으로 변경하고싶다면, triggerValue에 원하는 값을 전달해주세요.
 */
const meta = {
    component: SelectWithCustomOption_1.default,
    title: 'components/inputs/SelectWithCustomOption',
    argTypes: {
        name: { control: 'text' },
        defaultValue: { control: 'text' },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
        children: { control: 'text', description: 'Select options' },
        onChange: { action: 'changed' },
        onBlur: { action: 'blurred' },
        triggerValue: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", { value: "1", children: "1" }), (0, jsx_runtime_1.jsx)("option", { value: "2", children: "2" }), (0, jsx_runtime_1.jsx)("option", { value: "3", children: "3" })] })),
    },
};
