"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Active = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const Pagination_1 = __importDefault(require("./Pagination"));
const react_2 = require("react");
/**
 *
 * ### 개요
 * 페이지의 넘김 버튼. 기본적으로 다섯개의 페이지가 보여지며, '다음' 버튼을 누르면 그 다음 다섯개의 페이지가 보여짐.
 *
 * 맨 처음 페이지를 클릭할 경우 왼쪽 화살표가 disabled 되며, 맨 마지막 페이지를 클릭할 경우 오른쪽 화살표가 disabled 됌.
 *
 * ### 사용법 예시
 * 작성하고 있는 컴포넌트 내에 page 상태를 관리하는 훅을 생성합니다.
 *
 ```tsx
  const currentPage = 1;
  const [page, setPage] = useState(currentPage);
  const handlePage = (pageNum: number) => {
    setPage(pageNum);
  };
 ```
 * Pagination를 리턴합니다. 다음과 같이 작성할 수 있습니다.

 * ```tsx
 * <Pagination
    currentPage={page}
    totalPages={10}
    onPageChange={(pageNum) => handlePage(pageNum)}
  />
 * ```
 *
 */
const meta = {
    title: 'Components/Buttons/Pagination',
    component: Pagination_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        onClick: { action: 'clicked' },
        onPageChange: { action: 'clicked' },
        variant: { control: 'text', options: ['normal', 'active'] },
        currentPage: { control: 'number', defaultValue: 1 },
        totalPages: { control: 'number', defaultValue: 10 },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        variant: 'normal',
        currentPage: 1,
        totalPages: 15,
    },
    render: (args) => {
        const [currentPage, setCurrentPage] = (0, react_2.useState)(args.currentPage);
        const handlePageChange = (page) => {
            setCurrentPage(page);
            args.onPageChange(page);
        };
        return (0, jsx_runtime_1.jsx)(Pagination_1.default, Object.assign({}, args, { currentPage: currentPage, onPageChange: handlePageChange }));
    },
};
exports.Active = {
    args: Object.assign(Object.assign({}, exports.Default), { variant: 'active', currentPage: 1 }),
};
