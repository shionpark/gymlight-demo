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
const TabButton_styles_1 = require("./TabButton.styles");
const TabButton = (_a) => {
    var { active, children } = _a, rest = __rest(_a, ["active", "children"]);
    return ((0, jsx_runtime_1.jsx)(TabButton_styles_1.StyledTabButton, Object.assign({ active: active }, rest, { children: children })));
};
TabButton.displayName = 'TabButton';
exports.default = (0, react_1.memo)(TabButton);
