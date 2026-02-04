import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IGridSectionProps {
  columns: number;
  height?: number;
  isHorizontal?: boolean;
  gap?: number;
}

export const GridSection = styled.div<IGridSectionProps>`
  display: grid;
  width: 100%;
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};

  ${({ isHorizontal, columns, gap }) => css`
    gap: ${gap || 0}rem;

    ${isHorizontal
      ? css`
          grid-template-columns: repeat(${columns}, 1fr);
        `
      : css`
          grid-template-rows: repeat(${columns}, 1fr);
          grid-auto-flow: column;
        `}
  `}
`;
