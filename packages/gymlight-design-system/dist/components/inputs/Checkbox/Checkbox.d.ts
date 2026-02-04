import type { InputHTMLAttributes } from 'react';
import type { ICheckboxStylesProp } from './Checkbox.styles';
export interface ICheckboxProps extends ICheckboxStylesProp, InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    id?: string;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<ICheckboxProps & import("react").RefAttributes<HTMLInputElement>>>;
export default _default;
