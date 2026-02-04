import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IMenuWrapperProps } from './Dropdown.styles';
interface IDropDownToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IMenuWrapperProps {
    button?: ReactNode;
    children: ReactNode;
    isDropdownMenuOpened: boolean;
    distance?: number;
    width?: number;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<IDropDownToggleButtonProps & import("react").RefAttributes<HTMLDivElement>>>;
export default _default;
