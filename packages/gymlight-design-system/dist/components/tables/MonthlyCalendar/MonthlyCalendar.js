"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Styled = __importStar(require("./MonthlyCalendar.styles"));
const MonthlyCalendar = ({ dayCells }) => {
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    const daysPerWeek = dayCells.reduce((acc, _, i) => {
        if (i % 7 === 0) {
            acc.push(dayCells.slice(i, i + 7));
        }
        return acc;
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Styled.CalendarTable, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: weekDays.map((day, index) => ((0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsx)(Styled.CellComponentWrapper, { children: day }) }, `th-${index}`))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: daysPerWeek.map((week, weekIndex) => ((0, jsx_runtime_1.jsx)("tr", { children: week.map((dayCell, dayCellIndex) => ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Styled.CellComponentWrapper, { children: dayCell }) }, `tr-${weekIndex}-${dayCellIndex}`))) }, `tr-${weekIndex}`))) })] }));
};
exports.default = MonthlyCalendar;
