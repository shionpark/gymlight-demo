import { HTMLInputTypeAttribute } from 'react';
import { IInputContainerProps, InputSizeType } from './SearchInput.styles';
interface IInputProps extends IInputContainerProps {
    name?: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    readOnly?: boolean;
    width?: number | undefined;
    errorMessage?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    handleInit?: () => void;
    style?: React.CSSProperties;
    size?: InputSizeType;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<IInputProps & import("react").RefAttributes<HTMLInputElement>>>;
export default _default;
