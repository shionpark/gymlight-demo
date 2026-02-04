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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const ProfileInfo_styles_1 = require("./ProfileInfo.styles");
const solid_1 = require("@heroicons/react/20/solid");
const Profile_1 = __importDefault(require("./Profile/Profile"));
const ProfileInfo = (_a) => {
    var { name, role, branch, isDropdown = true } = _a, rest = __rest(_a, ["name", "role", "branch", "isDropdown"]);
    return ((0, jsx_runtime_1.jsxs)(ProfileInfo_styles_1.ProfileInfoContainer, Object.assign({}, rest, { children: [(0, jsx_runtime_1.jsx)(Profile_1.default, {}), (0, jsx_runtime_1.jsx)(ProfileInfo_styles_1.ProfileInfoContent, { children: role === '관리자' ? ((0, jsx_runtime_1.jsx)("span", { children: role })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", { className: "profile-name", children: [name, "\uB2D8"] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: "profile-role", children: role }), branch && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: 'gray' }, children: "|" }), (0, jsx_runtime_1.jsx)("span", { className: "profile-branch", children: branch })] }))] })] })) }), isDropdown && (0, jsx_runtime_1.jsx)(solid_1.ChevronDownIcon, {})] })));
};
ProfileInfo.displayName = 'ProfileInfo';
exports.default = (0, react_1.memo)(ProfileInfo);
