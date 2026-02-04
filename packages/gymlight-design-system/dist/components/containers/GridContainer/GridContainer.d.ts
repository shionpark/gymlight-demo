import { HTMLAttributes, ReactNode } from 'react';
interface IGridContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    columns: number;
    height?: number;
    direction?: '가로' | '세로';
    gap?: number;
}
declare const GridContainer: ({ children, columns, height, direction, gap, }: IGridContainerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default GridContainer;
