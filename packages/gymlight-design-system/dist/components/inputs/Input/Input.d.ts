import { HTMLInputTypeAttribute } from 'react';
import { IInputContainerProps, InputBorderType, InputSizeType } from './Input.styles';
interface IInputProps extends IInputContainerProps {
    name?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    defaultValue?: string;
    placeholder?: string;
    readOnly?: boolean;
    width?: number | undefined;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: string | undefined;
    border?: InputBorderType;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    size?: InputSizeType;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<IInputProps & import("react").RefAttributes<HTMLInputElement>>>;
export default _default;
