import { HTMLAttributes, ReactNode } from 'react';
interface IDropdownForMenuProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const DropdownForMenu: import("react").ForwardRefExoticComponent<IDropdownForMenuProps & import("react").RefAttributes<HTMLDivElement>>;
export default DropdownForMenu;
