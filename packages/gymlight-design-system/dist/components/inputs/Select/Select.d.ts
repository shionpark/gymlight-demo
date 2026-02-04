import { type HTMLAttributes } from 'react';
interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
    name?: string;
    defaultValue?: string | number | readonly string[] | undefined;
    value?: string | number | readonly string[] | undefined;
    disabled?: boolean;
    children: React.ReactNode;
    wide?: boolean;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}
declare const Select: import("react").ForwardRefExoticComponent<ISelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export default Select;
