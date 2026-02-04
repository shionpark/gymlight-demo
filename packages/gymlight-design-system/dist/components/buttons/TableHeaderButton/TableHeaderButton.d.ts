import type { ButtonHTMLAttributes, ReactNode } from 'react';
interface ITableHeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonName: string;
    icon?: ReactNode;
    iconAnnotation?: string;
}
declare const TableHeaderButton: ({ buttonName, icon, iconAnnotation, ...rest }: ITableHeaderButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default TableHeaderButton;
