interface IGridSectionProps {
    columns: number;
    height?: number;
    isHorizontal?: boolean;
    gap?: number;
}
export declare const GridSection: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IGridSectionProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
