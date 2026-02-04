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
const IconButton_styles_1 = require("./IconButton.styles");
const IconButton = (0, react_1.forwardRef)((_a, ref) => {
    var { icon, variant = 'normal', size = 'normal' } = _a, rest = __rest(_a, ["icon", "variant", "size"]);
    return ((0, jsx_runtime_1.jsx)(IconButton_styles_1.StyledIconButton, Object.assign({ className: "iconButton", variant: variant, size: size, ref: ref }, rest, { children: icon })));
});
IconButton.displayName = 'IconButton';
exports.default = (0, react_1.memo)(IconButton);
