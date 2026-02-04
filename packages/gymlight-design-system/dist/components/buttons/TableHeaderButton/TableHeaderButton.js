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
const TableHeaderButton_styles_1 = require("./TableHeaderButton.styles");
const TableHeaderButton = (_a) => {
    var { buttonName, icon, iconAnnotation } = _a, rest = __rest(_a, ["buttonName", "icon", "iconAnnotation"]);
    return ((0, jsx_runtime_1.jsx)(TableHeaderButton_styles_1.StyledButton, Object.assign({}, rest, { children: (0, jsx_runtime_1.jsxs)(TableHeaderButton_styles_1.ContentWrapper, { children: [(0, jsx_runtime_1.jsx)("span", { children: buttonName }), (0, jsx_runtime_1.jsxs)(TableHeaderButton_styles_1.IconWrapper, { children: [icon, iconAnnotation && (0, jsx_runtime_1.jsx)(TableHeaderButton_styles_1.SmallText, { children: iconAnnotation })] })] }) })));
};
exports.default = TableHeaderButton;
