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
const Input_styles_1 = require("./Input.styles");
const Input = (0, react_1.forwardRef)((_a, ref) => {
    var { name, type = 'text', width, errorMessage, size = 'normal', border = 'solid' } = _a, rest = __rest(_a, ["name", "type", "width", "errorMessage", "size", "border"]);
    return ((0, jsx_runtime_1.jsxs)(Input_styles_1.InputContainer, Object.assign({ width: width }, rest, { children: [(0, jsx_runtime_1.jsx)(Input_styles_1.StyledInput, Object.assign({ ref: ref, name: name, type: type, inputSize: size, borderStyle: border }, rest)), errorMessage && (0, jsx_runtime_1.jsx)(Input_styles_1.ErrorMessage, { children: errorMessage })] })));
});
Input.displayName = 'Input';
exports.default = (0, react_1.memo)(Input);
