import { memo, type ForwardRefExoticComponent, type ReactNode, type SVGProps } from 'react';

import { DualSideBar } from 'gymlight-design-system';

import * as Styled from './PerformanceSummaryCard.styles';

interface IPerformanceSummaryCardProps {
  title: ReactNode;
  Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onViewButtonClick: () => void;
  infoParagraph: string[];
}

const PerformanceSummaryCard = ({
  Icon,
  title,
  onViewButtonClick,
  infoParagraph,
}: IPerformanceSummaryCardProps) => (
  <Styled.Wrapper>
    <Icon />
    <Styled.InfoContainer>
      <Styled.InfoContainerHeader>
        <span>{title}</span>
        <Styled.ViewButton onClick={onViewButtonClick}>내역 조회</Styled.ViewButton>
      </Styled.InfoContainerHeader>
      <Styled.ValueContainer>
        {infoParagraph.map((aParagraph, index) => (
          <div key={index} className="summary-paragraph">
            {aParagraph}
          </div>
        ))}
      </Styled.ValueContainer>
    </Styled.InfoContainer>
  </Styled.Wrapper>
);

export default memo(PerformanceSummaryCard);
