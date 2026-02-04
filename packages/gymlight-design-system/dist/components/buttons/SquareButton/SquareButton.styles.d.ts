import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../../styles';
export type ButtonVariantsType = 'normal' | 'reverse' | 'outline' | 'primary' | 'primary-outline' | 'error-outline';
export type ButtonSizeType = 'xsmall' | 'small' | 'normal';
export interface ISquareStyledButtonProps {
    wide?: boolean;
    variant?: ButtonVariantsType;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    size?: ButtonSizeType;
}
export declare const setButtonActiveStyle: (theme: Theme, variant: ButtonVariantsType) => SerializedStyles;
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ISquareStyledButtonProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
