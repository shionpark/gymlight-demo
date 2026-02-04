import { ButtonHTMLAttributes, ReactNode } from 'react';
interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
    children: ReactNode;
}
declare const _default: import("react").MemoExoticComponent<{
    ({ active, children, ...rest }: ITabButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export default _default;
