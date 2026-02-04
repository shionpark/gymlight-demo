"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Styled = __importStar(require("./RatioBar.styles"));
const RatioBar = (_a) => {
    var { numeratorColor, numeratorNumber, denominatorColor, denominatorNumber, barThikness, wide, colorCells, shape = 'continuous' } = _a, rest = __rest(_a, ["numeratorColor", "numeratorNumber", "denominatorColor", "denominatorNumber", "barThikness", "wide", "colorCells", "shape"]);
    return ((0, jsx_runtime_1.jsx)(Styled.Wrapper, Object.assign({ wide: wide, shape: shape, numeratorColor: numeratorColor, numeratorNumber: numeratorNumber, denominatorColor: denominatorColor, denominatorNumber: denominatorNumber, barThikness: barThikness, colorCells: colorCells }, rest, { children: shape === 'continuous'
            ? [(0, jsx_runtime_1.jsx)("div", { className: "numerator" }), (0, jsx_runtime_1.jsx)("div", { className: "denominator" })]
            : Array.from({ length: denominatorNumber }).map((_, index) => ((0, jsx_runtime_1.jsx)("div", { className: `${index < numeratorNumber ? 'numerator' : 'denominator'}`, id: `bar-cell-${index}` }, index))) })));
};
RatioBar.defaultProps = {
    vertical: false,
    barThikness: 1,
    wide: false,
};
exports.default = (0, react_1.memo)(RatioBar);
