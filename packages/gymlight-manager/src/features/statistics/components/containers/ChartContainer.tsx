import { ReactNode } from 'react';

import * as Styled from './ChartContainer.styles';

const ChartContainer = ({ children, width }: { children: ReactNode; width?: number }) => {
  return <Styled.Wrapper width={width}>{children}</Styled.Wrapper>;
};

export default ChartContainer;
