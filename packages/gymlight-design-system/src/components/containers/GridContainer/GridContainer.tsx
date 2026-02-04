import { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './GridContainer.styles';

interface IGridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns: number;
  height?: number;
  direction?: '가로' | '세로';
  gap?: number;
}

const GridContainer = ({
  children,
  columns,
  height,
  direction = '가로',
  gap = 0.8,
}: IGridContainerProps) => {
  return (
    <Styled.GridSection
      columns={columns}
      height={height}
      isHorizontal={direction === '가로'}
      gap={gap}
    >
      {children}
    </Styled.GridSection>
  );
};

export default GridContainer;
