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
const solid_1 = require("@heroicons/react/20/solid");
const Checkbox_styles_1 = require("./Checkbox.styles");
const Checkbox = (0, react_1.forwardRef)((_a, ref) => {
    var { id, checked, disabled = false, isRequired = false } = _a, rest = __rest(_a, ["id", "checked", "disabled", "isRequired"]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Checkbox_styles_1.StyledCheckbox, Object.assign({ id: id, type: "checkbox", disabled: disabled, isRequired: isRequired, ref: ref, checked: checked }, rest)), (0, jsx_runtime_1.jsx)(Checkbox_styles_1.StyledLabel, { htmlFor: id, children: (0, jsx_runtime_1.jsx)(solid_1.CheckIcon, {}) })] }));
});
exports.default = (0, react_1.memo)(Checkbox);
