export type LabeledContainerSizeType = 'normal' | 'large' | 'small';
export type AlignType = 'start' | 'center' | 'end';
export interface ILabeledContainerStyleProps {
    size?: LabeledContainerSizeType;
    labelAlign?: AlignType;
    contentAlign?: AlignType;
    bold?: boolean;
    vertical?: boolean;
    width?: number;
    labelRatio?: number;
    contentRatio?: number;
}
export declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ILabeledContainerStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const content: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
