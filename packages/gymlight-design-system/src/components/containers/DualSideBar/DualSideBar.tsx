import type { HTMLAttributes, ReactNode } from 'react';
import { LeftSection, RightSection, Wrapper } from './DualSideBar.styles';

interface IDualSideBarProps extends HTMLAttributes<HTMLDivElement> {
  leftSideChildren?: ReactNode[];
  rightSideChildren?: ReactNode[];
  height?: number;
}

const DualSideBar = ({
  leftSideChildren = [],
  rightSideChildren = [],
  height,
  ...rest
}: IDualSideBarProps) => (
  <Wrapper height={height} {...rest}>
    <LeftSection className="left-section">{leftSideChildren}</LeftSection>
    <RightSection className="right-section">{rightSideChildren}</RightSection>
  </Wrapper>
);

export default DualSideBar;
