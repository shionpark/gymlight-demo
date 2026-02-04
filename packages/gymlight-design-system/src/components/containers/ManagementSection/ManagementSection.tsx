import { ReactNode } from 'react';

import * as Styled from './ManagementSection.styles';

interface IManagementSectionProp {
  tabs?: ReactNode;
  buttons?: ReactNode;
  children: ReactNode;
}

const ManagementSection = ({ tabs, buttons, children }: IManagementSectionProp) => {
  return (
    <>
      <Styled.TopWrapper>
        <Styled.LeftSection>{tabs}</Styled.LeftSection>
        <Styled.RightSection>{buttons}</Styled.RightSection>
      </Styled.TopWrapper>
      <Styled.MainSection>{children}</Styled.MainSection>
    </>
  );
};

export default ManagementSection;
