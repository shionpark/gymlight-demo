export type InputSizeType = 'small' | 'normal';
export type InputBorderType = 'solid' | 'bottom' | 'none';
export interface IInputContainerProps {
    width?: number | undefined;
}
export interface IInputStyleProps {
    error?: boolean;
    readOnly?: boolean;
    inputSize?: InputSizeType;
    borderStyle?: InputBorderType;
}
export declare const InputContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IInputContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IInputStyleProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const ErrorMessage: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
