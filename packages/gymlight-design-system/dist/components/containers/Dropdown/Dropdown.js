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
const Dropdown_styles_1 = require("./Dropdown.styles");
const solid_1 = require("@heroicons/react/24/solid");
const Dropdown = (0, react_1.forwardRef)((_a, ref) => {
    var { isDropdownMenuOpened, button, children, align = 'right', distance, width } = _a, rest = __rest(_a, ["isDropdownMenuOpened", "button", "children", "align", "distance", "width"]);
    return ((0, jsx_runtime_1.jsxs)(Dropdown_styles_1.Wrapper, { children: [button ? (button) : ((0, jsx_runtime_1.jsx)(Dropdown_styles_1.DefaultButton, Object.assign({}, rest, { children: (0, jsx_runtime_1.jsx)(solid_1.EllipsisHorizontalIcon, {}) }))), isDropdownMenuOpened && ((0, jsx_runtime_1.jsx)(Dropdown_styles_1.MenuWrapper, { align: align, distance: distance, ref: ref, width: width, children: children }))] }));
});
Dropdown.displayName = 'Dropdown';
exports.default = (0, react_1.memo)(Dropdown);
