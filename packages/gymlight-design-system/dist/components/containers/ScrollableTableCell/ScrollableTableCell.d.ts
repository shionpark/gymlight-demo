import type { HtmlHTMLAttributes, ReactNode } from 'react';
interface IScrollableTableCellProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const _default: import("react").MemoExoticComponent<{
    ({ children, ...rest }: IScrollableTableCellProps): import("@emotion/react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export default _default;
