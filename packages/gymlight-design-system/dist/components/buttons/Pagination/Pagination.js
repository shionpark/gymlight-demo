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
const solid_1 = require("@heroicons/react/24/solid");
const Styled = __importStar(require("./Pagination.styles"));
const Pagination = (_a) => {
    var { variant = 'normal', currentPage, totalPages = 1, onPageChange } = _a, rest = __rest(_a, ["variant", "currentPage", "totalPages", "onPageChange"]);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const getPageNumbers = () => {
        const maxVisiblePages = 5;
        const pageNumbers = [];
        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        pageNumbers.push(1);
        if (currentPage > 3) {
            pageNumbers.push('...');
        }
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }
        if (currentPage < totalPages - 2) {
            pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
        return pageNumbers;
    };
    const pageNumbers = getPageNumbers();
    return ((0, jsx_runtime_1.jsxs)(Styled.Wrapper, { children: [(0, jsx_runtime_1.jsx)(Styled.PageButton, { variant: "normal", disabled: isFirstPage, onClick: () => onPageChange(currentPage - 1), children: (0, jsx_runtime_1.jsx)(solid_1.ChevronLeftIcon, {}) }), pageNumbers.map((pageNum, index) => typeof pageNum === 'number' ? ((0, jsx_runtime_1.jsx)(Styled.PageButton, Object.assign({ variant: currentPage === pageNum ? 'active' : 'normal', onClick: () => onPageChange(pageNum) }, rest, { children: pageNum }), pageNum)) : ((0, jsx_runtime_1.jsx)(Styled.Ellipsis, { children: (0, jsx_runtime_1.jsx)(solid_1.EllipsisHorizontalIcon, {}) }, `ellipsis-${index}`))), (0, jsx_runtime_1.jsx)(Styled.PageButton, { variant: "normal", disabled: isLastPage, onClick: () => onPageChange(currentPage + 1), children: (0, jsx_runtime_1.jsx)(solid_1.ChevronRightIcon, {}) })] }));
};
Pagination.displayName = 'Pagination';
exports.default = (0, react_1.memo)(Pagination);
