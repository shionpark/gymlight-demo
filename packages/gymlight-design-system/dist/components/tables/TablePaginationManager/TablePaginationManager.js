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
const containers_1 = require("../../../components/containers");
const buttons_1 = require("../../../components/buttons");
const inputs_1 = require("../../../components/inputs");
const Styled = __importStar(require("./TablePaginationManager.styles"));
const TablePaginationManager = ({ currentPageIndexNumber, totalPageNumber, pageSize, handlePageIndexNumberChange, handlePageSizeChange, tableDataName, }) => ((0, jsx_runtime_1.jsx)(Styled.Wrapper, { children: (0, jsx_runtime_1.jsx)(containers_1.DualSideBar, { leftSideChildren: [
            (0, jsx_runtime_1.jsx)(buttons_1.Pagination, { currentPage: currentPageIndexNumber, totalPages: totalPageNumber, onPageChange: handlePageIndexNumberChange }),
        ], rightSideChildren: [
            (0, jsx_runtime_1.jsx)(containers_1.LabeledContainer, { labelText: `한 페이지당 ${tableDataName} 수`, width: 20, labelRatio: 2, contentRatio: 2, children: (0, jsx_runtime_1.jsx)(inputs_1.SelectWithCustomOption, { value: pageSize, onChange: handlePageSizeChange, wide: true, withCancelButton: false, children: [3, 5, 10, 15, 18, 20].map((num) => ((0, jsx_runtime_1.jsx)("option", { value: num.toString(), children: num }, num))) }) }),
        ] }) }));
exports.default = TablePaginationManager;
