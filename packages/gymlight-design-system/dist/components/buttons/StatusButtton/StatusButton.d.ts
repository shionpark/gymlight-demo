import { ButtonHTMLAttributes, ReactNode } from 'react';
type ColorsType = Record<string, string>;
export interface IStatusButtonProps<T extends ColorsType> extends ButtonHTMLAttributes<HTMLDivElement> {
    colors: T;
    status: Extract<keyof T, string>;
    children?: ReactNode;
}
declare const StatusButton: <T extends ColorsType>({ colors, status, children, ...rest }: IStatusButtonProps<T>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default StatusButton;
