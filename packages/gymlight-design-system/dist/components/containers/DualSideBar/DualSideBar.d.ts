import type { HTMLAttributes, ReactNode } from 'react';
interface IDualSideBarProps extends HTMLAttributes<HTMLDivElement> {
    leftSideChildren?: ReactNode[];
    rightSideChildren?: ReactNode[];
    height?: number;
}
declare const DualSideBar: ({ leftSideChildren, rightSideChildren, height, ...rest }: IDualSideBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DualSideBar;
