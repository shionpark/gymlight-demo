import { type HTMLAttributes } from 'react';
interface IGenderSelectProps extends HTMLAttributes<HTMLSelectElement> {
    name?: string;
    values: string[];
    defaultValue?: string | undefined;
    value?: string;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}
declare const GenderSelect: import("react").ForwardRefExoticComponent<IGenderSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export default GenderSelect;
