import type { ForwardRefExoticComponent, SVGProps, HtmlHTMLAttributes } from 'react';
import { IColorCell } from '../RatioBar/RatioBar.styles';
export interface IPinCell {
    cellIndex: number;
    label?: string;
    hasPin?: boolean;
    PinIcon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}
export interface IPinProgressBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
    pinCells?: IPinCell[];
    colorCells?: IColorCell[];
    numeratorNumber: number;
    denominatorNumber: number;
    numeratorColor: string;
    denominatorColor: string;
    barThikness?: number;
    unitGap?: number;
}
declare const PinProgressBar: ({ pinCells, numeratorColor, numeratorNumber, denominatorColor, denominatorNumber, barThikness, colorCells, unitGap, }: IPinProgressBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default PinProgressBar;
