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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const components_1 = require("../../../components");
const Styled = __importStar(require("./PinProgressBar.styles"));
const solid_1 = require("@heroicons/react/16/solid");
const PinProgressBar = ({ pinCells, numeratorColor, numeratorNumber, denominatorColor, denominatorNumber, barThikness, colorCells, unitGap = 18, }) => ((0, jsx_runtime_1.jsx)(Styled.Wrapper, { children: (0, jsx_runtime_1.jsxs)(Styled.GraphContainer, { children: [(0, jsx_runtime_1.jsx)(Styled.PinsContainer, { children: pinCells === null || pinCells === void 0 ? void 0 : pinCells.map(({ cellIndex, label, hasPin, PinIcon }, idx) => {
                    const leftPosition = (cellIndex / denominatorNumber) * 100;
                    return ((0, jsx_runtime_1.jsxs)(Styled.Pin, { leftPosition: leftPosition, hasPin: hasPin, children: [label && (0, jsx_runtime_1.jsx)("pre", { className: "pin-label", children: label }), PinIcon ? (0, jsx_runtime_1.jsx)(PinIcon, {}) : (0, jsx_runtime_1.jsx)(solid_1.ArrowDownIcon, {})] }, cellIndex + '-' + idx));
                }) }), (0, jsx_runtime_1.jsx)(components_1.RatioBar, { shape: "discrete", numeratorColor: numeratorColor, numeratorNumber: numeratorNumber, denominatorColor: denominatorColor, denominatorNumber: denominatorNumber, barThikness: barThikness, colorCells: colorCells, wide: true })] }) }));
exports.default = PinProgressBar;
