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
const DualSideBar_styles_1 = require("./DualSideBar.styles");
const DualSideBar = (_a) => {
    var { leftSideChildren = [], rightSideChildren = [], height } = _a, rest = __rest(_a, ["leftSideChildren", "rightSideChildren", "height"]);
    return ((0, jsx_runtime_1.jsxs)(DualSideBar_styles_1.Wrapper, Object.assign({ height: height }, rest, { children: [(0, jsx_runtime_1.jsx)(DualSideBar_styles_1.LeftSection, { className: "left-section", children: leftSideChildren }), (0, jsx_runtime_1.jsx)(DualSideBar_styles_1.RightSection, { className: "right-section", children: rightSideChildren })] })));
};
exports.default = DualSideBar;
