import { ChangeEventHandler } from 'react';
interface ITablePaginationManagerProps {
    currentPageIndexNumber: number;
    totalPageNumber: number;
    pageSize: number;
    handlePageIndexNumberChange: (page: number) => void;
    handlePageSizeChange: ChangeEventHandler<HTMLSelectElement>;
    tableDataName: string;
}
declare const TablePaginationManager: ({ currentPageIndexNumber, totalPageNumber, pageSize, handlePageIndexNumberChange, handlePageSizeChange, tableDataName, }: ITablePaginationManagerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default TablePaginationManager;
