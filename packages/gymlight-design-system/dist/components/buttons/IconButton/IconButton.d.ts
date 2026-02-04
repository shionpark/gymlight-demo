import { ButtonHTMLAttributes } from 'react';
import { IStyledIconButtonProps } from './IconButton.styles';
interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IStyledIconButtonProps {
    icon: React.ReactNode;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<IIconButtonProps & import("react").RefAttributes<HTMLButtonElement>>>;
export default _default;
