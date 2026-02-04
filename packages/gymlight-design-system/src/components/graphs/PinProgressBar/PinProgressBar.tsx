import type { ForwardRefExoticComponent, SVGProps, HtmlHTMLAttributes, ReactNode } from 'react';

import { RatioBar } from '@/components/';
import { IColorCell } from '../RatioBar/RatioBar.styles';

import * as Styled from './PinProgressBar.styles';

import { ArrowDownIcon } from '@heroicons/react/16/solid';

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

const PinProgressBar = ({
  pinCells,
  numeratorColor,
  numeratorNumber,
  denominatorColor,
  denominatorNumber,
  barThikness,
  colorCells,
  unitGap = 18,
}: IPinProgressBarProps) => (
  <Styled.Wrapper>
    <Styled.GraphContainer>
      <Styled.PinsContainer>
        {pinCells?.map(({ cellIndex, label, hasPin, PinIcon }, idx) => {
          const leftPosition = (cellIndex / denominatorNumber) * 100;

          return (
            <Styled.Pin key={cellIndex + '-' + idx} leftPosition={leftPosition} hasPin={hasPin}>
              {label && <pre className="pin-label">{label}</pre>}
              {PinIcon ? <PinIcon /> : <ArrowDownIcon />}
            </Styled.Pin>
          );
        })}
      </Styled.PinsContainer>
      <RatioBar
        shape="discrete"
        numeratorColor={numeratorColor}
        numeratorNumber={numeratorNumber}
        denominatorColor={denominatorColor}
        denominatorNumber={denominatorNumber}
        barThikness={barThikness}
        colorCells={colorCells}
        wide
      />
    </Styled.GraphContainer>
  </Styled.Wrapper>
);
export default PinProgressBar;
