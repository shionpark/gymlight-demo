import { ReactNode } from 'react';

import * as Styled from './DashboardContainerHeader.styles';

interface IDashboardContainerHeaderProps {
  children: ReactNode;
}

const DashboardContainerHeader = ({ children }: IDashboardContainerHeaderProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default DashboardContainerHeader;
