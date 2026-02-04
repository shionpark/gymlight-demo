"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const WeeklyCalendar_1 = __importDefault(require("./WeeklyCalendar"));
/** ## WeeklyCalendar
 *
 * ### 개요
 *
 * 주간 계획표를 표시하기 위한 테이블
 *
 * ### 사용처
 *
 * -  트레이너의 업무관리
 * - 팀장트레이너의 팀관리
 *
 * ### 사용 팁
 *
 * dateCells, dayCells 모두 길이가 7인 배열이어야합니다.
 *
 *
 */
const meta = {
    title: 'components/tables/WeeklyCalendar',
    component: WeeklyCalendar_1.default,
    argTypes: {
        dateCells: {
            description: '날짜를 표시하는 컴포넌트 배열',
            details: 'ReactNode[]',
        },
        dayCells: {
            description: '스케쥴 컴포넌트 배열을 원소로 갖는 배열',
            details: 'ReactNode[][]',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        dayCells: Array.from({ length: 7 }, (_, i) => Array.from({ length: 4 }, (_, j) => ((0, jsx_runtime_1.jsxs)("div", { children: [i, "\uC77C\uC815", j] })))),
        dateCells: Array.from({ length: 7 }, (_, i) => i + 1),
    },
};
