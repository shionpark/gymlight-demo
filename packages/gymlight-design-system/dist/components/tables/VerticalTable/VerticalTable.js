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
const Styled = __importStar(require("./VerticalTable.styles"));
const VerticalTable = ({ columnWidths, tableHeaderCells, tableRows, height, }) => {
    const calculatedWidths = Array.from({ length: tableHeaderCells.length }, (_, index) => {
        const width = columnWidths[index];
        if (typeof width === 'string') {
            return width;
        }
        if (typeof width === 'number' && !isNaN(width)) {
            return `${width}rem`;
        }
        return 'auto';
    });
    return ((0, jsx_runtime_1.jsx)(Styled.TableWrapper, { children: (0, jsx_runtime_1.jsxs)(Styled.Table, { customHeight: height, defaultHeight: tableRows.length, children: [(0, jsx_runtime_1.jsx)("colgroup", { children: calculatedWidths.map((width, index) => ((0, jsx_runtime_1.jsx)("col", { style: { width } }, `cols${index}`))) }), (0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: tableHeaderCells.map((headerCell, index) => ((0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsx)(Styled.CellComponentWrapper, { children: headerCell }) }, `th-${index}`))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: tableRows.map((row, rowIndex) => ((0, jsx_runtime_1.jsx)("tr", { children: row.map((rowCell, cellIndex) => ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Styled.CellComponentWrapper, { children: rowCell }) }, `tr-${rowIndex}-${cellIndex}`))) }, `tr-${rowIndex}`))) })] }) }));
};
exports.default = VerticalTable;
