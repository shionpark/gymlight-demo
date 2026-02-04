export interface IColorCell {
    cellIndex: number;
    cellColor: string;
}
export interface IWrapperStylesProps {
    numeratorNumber: number;
    denominatorNumber: number;
    numeratorColor: string;
    denominatorColor: string;
    colorCells?: IColorCell[];
    barThikness?: number;
    wide?: boolean;
    shape?: 'continuous' | 'discrete';
}
export declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IWrapperStylesProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
