type ButtonVariantsType = 'normal' | 'primary' | 'icon-only' | 'active';
export type ButtonSizeType = 'xsmall' | 'small' | 'normal' | 'large';
export interface IStyledIconButtonProps {
    variant?: ButtonVariantsType;
    size?: ButtonSizeType;
}
export declare const StyledIconButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IStyledIconButtonProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
