"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Select_1 = require("../Select");
const DateSelect_styles_1 = require("./DateSelect.styles");
const DateSelect = ({ name, register, errors, defaultDayValue, defaultMonthValue, defaultYearValue, yearValue, monthValue, dayValue, onYearChange, onMonthChange, onDayChange, yearRange, monthRange, daysRange, disabled, }) => {
    const years = yearRange
        ? yearRange
        : Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
    const months = monthRange ? monthRange : Array.from({ length: 12 }, (_, i) => i + 1);
    const days = daysRange ? daysRange : Array.from({ length: 31 }, (_, i) => i + 1);
    if (register) {
        return ((0, jsx_runtime_1.jsxs)(DateSelect_styles_1.DateSelectContainer, { children: [(0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({}, register({ name: `${name}Year` }), { defaultValue: defaultYearValue, disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uB144\uB3C4" }), years.map((year) => ((0, jsx_runtime_1.jsx)("option", { value: year, children: year }, year)))] })), (0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({}, register({ name: `${name}Month` }), { defaultValue: defaultMonthValue, disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC6D4" }), months.map((month) => ((0, jsx_runtime_1.jsx)("option", { value: month, children: month }, month)))] })), (0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({}, register({ name: `${name}Day` }), { defaultValue: defaultDayValue, disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC77C" }), days.map((day) => ((0, jsx_runtime_1.jsx)("option", { value: day, children: day }, day)))] })), (0, jsx_runtime_1.jsx)(DateSelect_styles_1.ErrorMessage, { children: errors[`${name}Year`] || errors[`${name}Month`] || errors[`${name}Day`]
                        ? '생년월일을 정확히 입력해주세요.'
                        : '' })] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)(DateSelect_styles_1.DateSelectContainer, { children: [(0, jsx_runtime_1.jsxs)(Select_1.Select, { value: yearValue, onChange: (e) => onYearChange === null || onYearChange === void 0 ? void 0 : onYearChange(e.target.value), disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uB144\uB3C4" }), years.map((year) => ((0, jsx_runtime_1.jsx)("option", { value: year, children: year }, year)))] }), (0, jsx_runtime_1.jsxs)(Select_1.Select, { value: monthValue, onChange: (e) => onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(e.target.value), disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC6D4" }), months.map((month) => ((0, jsx_runtime_1.jsx)("option", { value: month, children: month }, month)))] }), (0, jsx_runtime_1.jsxs)(Select_1.Select, { value: dayValue, onChange: (e) => onDayChange === null || onDayChange === void 0 ? void 0 : onDayChange(e.target.value), disabled: disabled, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\uC77C" }), days.map((day) => ((0, jsx_runtime_1.jsx)("option", { value: day, children: day }, day)))] }), (0, jsx_runtime_1.jsx)(DateSelect_styles_1.ErrorMessage, { children: errors.year || errors.month || errors.day ? '선택된 일정이 유효하지 않습니다.' : '' })] }));
    }
};
exports.default = DateSelect;
