import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ISquareStyledButtonProps } from './SquareButton.styles';
interface ISquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ISquareStyledButtonProps {
    children: ReactNode;
}
declare const _default: import("react").MemoExoticComponent<({ variant, disabled, active, size, children, ...rest }: ISquareButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element>;
export default _default;
