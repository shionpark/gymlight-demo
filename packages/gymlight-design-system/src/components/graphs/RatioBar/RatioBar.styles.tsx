import { styles } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

const getContinuousBarRatioCss = ({
  numeratorNumber,
  denominatorNumber,
  numeratorColor,
  denominatorColor,
  barThikness,
  wide,
}: IWrapperStylesProps) => {
  const numeratorPercentage = (numeratorNumber / denominatorNumber) * 100;
  const denominatorPercentage = ((denominatorNumber - numeratorNumber) / denominatorNumber) * 100;

  return css`
    width: ${wide ? ' 100%' : 'inherit'};

    & > .numerator {
      background-color: ${numeratorColor};
      height: ${barThikness}rem;
      width: ${numeratorPercentage}%;
    }
    & > .denominator {
      background-color: ${denominatorColor};
      height: ${barThikness}rem;
      width: ${denominatorPercentage}%;
    }
  `;
};

const generateColorCellStyles = (colorCells: IColorCell[]) => {
  return css`
    ${colorCells
      .filter(({ cellColor }) => cellColor)
      .map(
        ({ cellIndex, cellColor }) => `#bar-cell-${cellIndex} {
      background-color: ${cellColor};
      }`,
      )
      .join(' ')}
  `;
};

const getDiscreteBarRatioCss = ({
  denominatorNumber,
  numeratorColor,
  denominatorColor,
  barThikness,
  wide,
}: Omit<IWrapperStylesProps, 'numeratorNumber'>) => {
  const totalGapPercentage = 18;
  const unitGap = totalGapPercentage / (denominatorNumber - 1);
  const unitWidth = `calc(${(82 / denominatorNumber).toFixed(8)}% - ${unitGap / denominatorNumber}%)`;

  return css`
    width: ${wide ? ' 100%' : 'inherit'};
    gap: ${unitGap}%;

    & > .numerator,
    & > .denominator {
      margin: 0;
      padding: 0;
      flex-basis: ${unitWidth};
      background-color: ${numeratorColor};
      height: ${barThikness}rem;
    }

    & > .numerator {
      background-color: ${numeratorColor};
    }
    & > .denominator {
      background-color: ${denominatorColor};
    }
  `;
};

export const Wrapper = styled.div<IWrapperStylesProps>`
  border: groove ${({ theme }) => theme.border.light} ${styles.border.level1}rem;
  display: flex;
  border-radius: 0.2rem;

  ${({ colorCells }) => (colorCells ? generateColorCellStyles(colorCells) : '')}

  ${({
    numeratorNumber,
    denominatorNumber,
    numeratorColor,
    denominatorColor,
    barThikness,
    wide,
    shape,
  }) =>
    shape === 'continuous'
      ? getContinuousBarRatioCss({
          numeratorNumber,
          denominatorNumber,
          numeratorColor,
          denominatorColor,
          barThikness,
          wide,
        })
      : getDiscreteBarRatioCss({
          denominatorColor,
          denominatorNumber,
          numeratorColor,
          wide,
          barThikness,
        })}
`;
