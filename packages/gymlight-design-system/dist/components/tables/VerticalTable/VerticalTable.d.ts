import type { HTMLAttributes, ReactNode } from 'react';
interface IVerticalTableProps extends HTMLAttributes<HTMLTableElement> {
    columnWidths: (string | number)[];
    tableHeaderCells: ReactNode[];
    tableRows: ReactNode[][];
    height?: number;
}
declare const VerticalTable: ({ columnWidths, tableHeaderCells, tableRows, height, }: IVerticalTableProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default VerticalTable;
