import { ReactNode } from 'react';
import { ButtonSection, MainSection, TopSection } from './ManagementSection.styles';

interface IManagementSectionProp {
  tabs?: ReactNode;
  buttons?: ReactNode;
  children: ReactNode;
}

const ManagementSection = ({ tabs, buttons, children }: IManagementSectionProp) => {
  return (
    <>
      <TopSection>
        {tabs}
        <ButtonSection>{buttons}</ButtonSection>
      </TopSection>
      <MainSection>{children}</MainSection>
    </>
  );
};

export default ManagementSection;
