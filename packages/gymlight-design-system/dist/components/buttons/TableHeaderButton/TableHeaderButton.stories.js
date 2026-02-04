"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIconAnnotation = exports.WithIcon = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const TableHeaderButton_1 = __importDefault(require("./TableHeaderButton"));
const solid_1 = require("@heroicons/react/24/solid");
/**  ## TableHeaderButton
 *
 * ### 개요
 *
 * 테이블에서 컬럼의 현재 정렬 상태를 보여주고, 정렬을 트리거하는 데 사용되는 버튼
 *
 * ### 사용처
 *
 * 테이블의 헤더중 정렬 기능이 있는 컬럼의 헤더
 *
 * ### 사용팁
 *
 * 정렬기능이 있는 테이블의 헤더 컴포넌트로 제공해주세요.
 * iconAnnotation을 사용하실거라면, 버튼의 width를 충분히 확보해주세요
 *
 */
const meta = {
    title: 'Components/Buttons/TableHeaderButton',
    component: TableHeaderButton_1.default,
    argTypes: {
        icon: {
            description: '버튼에 표시할 아이콘. 해당 column의 도메인 데이터에대한 정렬 정보를 표시',
        },
        iconAnnotation: {
            description: '정렬 정보를 아이콘만으로 표현하기 힘들때 삽입할 텍스트',
        },
        buttonName: {
            description: '테이블 컬럼의 이름 \n ex) 호점 ',
            control: 'string',
        },
    },
};
exports.default = meta;
/** Default
 *
 * sortOrder가 asc로 설정된 모습
 */
exports.Default = {
    args: {
        buttonName: '버튼',
    },
};
/** WithIcon
 *
 * sortOrder가 asc로 설정된 모습
 */
exports.WithIcon = {
    args: {
        icon: (0, jsx_runtime_1.jsx)(solid_1.BarsArrowUpIcon, {}),
        buttonName: '버튼',
    },
};
/** With IconAnnotation
 *
 * 정렬 순서에 보충설명이 들어간 모습
 */
exports.WithIconAnnotation = {
    args: {
        icon: (0, jsx_runtime_1.jsx)(solid_1.BarsArrowDownIcon, {}),
        iconAnnotation: '내림차순',
        buttonName: '팀 이름',
    },
};
