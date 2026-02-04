"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const Select_1 = require("../Select");
const Input_1 = require("../Input");
const buttons_1 = require("../../../components/buttons");
const SelectWithCustomOption_styles_1 = require("./SelectWithCustomOption.styles");
const SelectWithCustomOption = (_a) => {
    var { name, children, defaultValue, defaultCustomValue, value, onChange, onBlur, triggerValue, disabled, onChangeCustomValueInput, withCancelButton = true } = _a, rest = __rest(_a, ["name", "children", "defaultValue", "defaultCustomValue", "value", "onChange", "onBlur", "triggerValue", "disabled", "onChangeCustomValueInput", "withCancelButton"]);
    const [displayValue, setDisplayValue] = (0, react_1.useState)(value || '');
    const editingOptionValue = triggerValue ? triggerValue : '직접입력';
    const initIsEditing = Boolean(value === editingOptionValue || (defaultCustomValue && defaultCustomValue !== 'N/A'));
    const [isEditing, setIsEditing] = (0, react_1.useState)(initIsEditing);
    const handleSelectChange = (e) => {
        if (onChange) {
            onChange(e);
        }
        if (e.target.value === editingOptionValue) {
            setDisplayValue(editingOptionValue);
            setIsEditing(true);
            return;
        }
        setIsEditing(false);
        setDisplayValue(e.target.value);
    };
    const handleInputChange = (e) => {
        const event = new Event('change', { bubbles: true });
        const target = Object.assign(Object.assign({}, e.target), { value: e.target.value });
        Object.defineProperty(event, 'target', { writable: true, value: target });
        if (onChangeCustomValueInput) {
            onChangeCustomValueInput(event);
        }
        else if (onChange) {
            onChange(event);
        }
    };
    const customInputInitValue = defaultCustomValue !== undefined ? defaultCustomValue : value ? `${value}` : '';
    return ((0, jsx_runtime_1.jsxs)(SelectWithCustomOption_styles_1.Wrapper, { isEditing: isEditing, children: [isEditing && ((0, jsx_runtime_1.jsx)(Input_1.Input, { readOnly: disabled, value: customInputInitValue, onChange: handleInputChange })), isEditing && withCancelButton ? ((0, jsx_runtime_1.jsx)(buttons_1.SquareButton, { wide: true, size: "small", onClick: () => {
                    setIsEditing(false);
                    setDisplayValue(value || '');
                }, children: "\uCDE8\uC18C" })) : ((0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({ value: displayValue, onChange: handleSelectChange, disabled: disabled, onBlur: onBlur }, rest, { children: [children, triggerValue ? ('') : ((0, jsx_runtime_1.jsx)("option", { className: "editable", value: editingOptionValue, children: "\uC785\uB825" }))] })))] }));
};
exports.default = SelectWithCustomOption;
