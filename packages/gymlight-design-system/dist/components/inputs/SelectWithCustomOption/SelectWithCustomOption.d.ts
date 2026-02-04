import type { HTMLAttributes } from 'react';
interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
    name?: string;
    defaultValue?: string | number | readonly string[] | undefined;
    defaultCustomValue?: string;
    value?: string | number | readonly string[] | undefined;
    triggerValue?: string;
    disabled?: boolean;
    children: React.ReactNode;
    wide?: boolean;
    withCancelButton?: boolean;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    onBlur?: React.FocusEventHandler<HTMLSelectElement>;
    onChangeCustomValueInput?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const SelectWithCustomOption: ({ name, children, defaultValue, defaultCustomValue, value, onChange, onBlur, triggerValue, disabled, onChangeCustomValueInput, withCancelButton, ...rest }: ISelectProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectWithCustomOption;
