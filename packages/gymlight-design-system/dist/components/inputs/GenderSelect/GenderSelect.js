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
const GenderSelect_styles_1 = require("./GenderSelect.styles");
const GenderSelect = (0, react_1.forwardRef)((_a, ref) => {
    var { name, values, defaultValue, value, disabled } = _a, rest = __rest(_a, ["name", "values", "defaultValue", "value", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(GenderSelect_styles_1.StyledSelect, Object.assign({ ref: ref, name: name, defaultValue: defaultValue, value: value, disabled: disabled }, rest, { children: values.map((value) => ((0, jsx_runtime_1.jsx)("option", { value: value, children: value }, value))) })));
});
GenderSelect.displayName = 'GenderSelect';
exports.default = GenderSelect;
