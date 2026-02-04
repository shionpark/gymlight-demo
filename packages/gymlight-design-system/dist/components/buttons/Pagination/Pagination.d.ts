import { ButtonHTMLAttributes } from 'react';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    variant?: 'normal' | 'active';
}
declare const _default: import("react").MemoExoticComponent<{
    ({ variant, currentPage, totalPages, onPageChange, ...rest }: IButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export default _default;
