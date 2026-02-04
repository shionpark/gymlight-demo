import type { HtmlHTMLAttributes } from 'react';
import * as Styled from './RatioBar.styles';
interface IRatioBarProps extends HtmlHTMLAttributes<HTMLDivElement>, Omit<Styled.IWrapperStylesProps, 'barThikness' | 'wide'> {
    numeratorNumber: number;
    denominatorNumber: number;
    numeratorColor: string;
    denominatorColor: string;
    barThikness?: number;
    wide?: boolean;
    shape?: 'continuous' | 'discrete';
}
declare const _default: import("react").MemoExoticComponent<{
    ({ numeratorColor, numeratorNumber, denominatorColor, denominatorNumber, barThikness, wide, colorCells, shape, ...rest }: IRatioBarProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        vertical: boolean;
        barThikness: number;
        wide: boolean;
    };
}>;
export default _default;
