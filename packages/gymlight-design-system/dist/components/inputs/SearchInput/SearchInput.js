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
const buttons_1 = require("../../../components/buttons");
const SearchInput_styles_1 = require("./SearchInput.styles");
const outline_1 = require("@heroicons/react/24/outline");
const solid_1 = require("@heroicons/react/24/solid");
const SearchInput = (0, react_1.forwardRef)((_a, ref) => {
    var { name, type = 'text', width, errorMessage, size = 'normal', handleInit } = _a, rest = __rest(_a, ["name", "type", "width", "errorMessage", "size", "handleInit"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchInput_styles_1.InputContainer, Object.assign({ width: width }, rest, { children: (0, jsx_runtime_1.jsxs)("label", { htmlFor: "search", children: [(0, jsx_runtime_1.jsx)(outline_1.MagnifyingGlassIcon, {}), (0, jsx_runtime_1.jsx)(SearchInput_styles_1.StyledInput, Object.assign({ id: "search", ref: ref, name: name, type: type, inputSize: size }, rest)), handleInit && ((0, jsx_runtime_1.jsx)(buttons_1.IconButton, { className: "init-icon", size: "small", icon: (0, jsx_runtime_1.jsx)(solid_1.XMarkIcon, {}), onClick: handleInit }))] }) })), (0, jsx_runtime_1.jsx)(SearchInput_styles_1.ErrorMessage, { children: errorMessage !== null && errorMessage !== void 0 ? errorMessage : '' })] }));
});
SearchInput.displayName = 'SearchInput';
exports.default = (0, react_1.memo)(SearchInput);
