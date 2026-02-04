"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const MonthlyCalendar_1 = __importDefault(require("./MonthlyCalendar"));
/** ## MonthlyCalendar
 *
 * ### 개요
 *
 * 달력
 *
 * ### 사용처
 *
 * - 트레이너 일정관리
 * - 팀원 트레이너 일정 조회
 *
 * ### 사용팁
 *
 * 표시할 범위에 해당하는 컴포넌트의 배열을
 * dayCells prop으로 제공하면 됩니다.
 *
 *
 */
const meta = {
    title: 'components/tables/MonthlyCalendar',
    component: MonthlyCalendar_1.default,
    argTypes: {
        dayCells: {
            description: '각 날짜에 대한 ReactNode 배열',
            control: 'array',
            table: {
                type: { summary: 'ReactNode[]' },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        dayCells: Array.from({ length: 30 }, (_, i) => (0, jsx_runtime_1.jsx)("div", { children: i })),
    },
};
