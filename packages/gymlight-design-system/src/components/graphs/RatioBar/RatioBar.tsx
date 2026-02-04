import { memo } from 'react';
import type { HtmlHTMLAttributes } from 'react';

import * as Styled from './RatioBar.styles';

interface IRatioBarProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    Omit<Styled.IWrapperStylesProps, 'barThikness' | 'wide'> {
  numeratorNumber: number;
  denominatorNumber: number;
  numeratorColor: string;
  denominatorColor: string;
  barThikness?: number;
  wide?: boolean;
  shape?: 'continuous' | 'discrete';
}

const RatioBar = ({
  numeratorColor,
  numeratorNumber,
  denominatorColor,
  denominatorNumber,
  barThikness,
  wide,
  colorCells,
  shape = 'continuous',
  ...rest
}: IRatioBarProps) => {
  return (
    <Styled.Wrapper
      wide={wide}
      shape={shape}
      numeratorColor={numeratorColor}
      numeratorNumber={numeratorNumber}
      denominatorColor={denominatorColor}
      denominatorNumber={denominatorNumber}
      barThikness={barThikness}
      colorCells={colorCells}
      {...rest}
    >
      {shape === 'continuous'
        ? [<div className="numerator" />, <div className="denominator" />]
        : Array.from({ length: denominatorNumber }).map((_, index) => (
            <div
              key={index}
              className={`${index < numeratorNumber ? 'numerator' : 'denominator'}`}
              id={`bar-cell-${index}`}
            />
          ))}
    </Styled.Wrapper>
  );
};

RatioBar.defaultProps = {
  vertical: false,
  barThikness: 1,
  wide: false,
};

export default memo(RatioBar);
