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
const LabeledContainer_styles_1 = require("./LabeledContainer.styles");
const LabeledContainer = (_a) => {
    var { labelText, children, size = 'normal', labelAlign = 'center', contentAlign, id } = _a, rest = __rest(_a, ["labelText", "children", "size", "labelAlign", "contentAlign", "id"]);
    return ((0, jsx_runtime_1.jsxs)(LabeledContainer_styles_1.Wrapper, Object.assign({ size: size, labelAlign: labelAlign, contentAlign: contentAlign }, rest, { className: "labeled-container", children: [(0, jsx_runtime_1.jsx)(LabeledContainer_styles_1.Label, { htmlFor: id, className: "label", children: labelText }), (0, jsx_runtime_1.jsx)("div", { className: "content", children: children })] })));
};
exports.default = LabeledContainer;
