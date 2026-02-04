import { ReactNode, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

import { IconButton } from 'gymlight-design-system';

import * as Styled from './DashboardContainer.styles';

interface IDashboardContainerProps {
  children: ReactNode;
  title: string | ReactNode;
  url?: string;
}

const DashboardContainer = ({ children, title, url }: IDashboardContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.TopSection>
        <Styled.Title>
          <span>{title}</span>
        </Styled.Title>
        {url && (
          <Styled.StyledLink
            to={url}
            onMouseEnter={() => setIsHovered(true)} // 마우스 진입 시 상태 변경
            onMouseLeave={() => setIsHovered(false)} // 마우스 떠날 시 상태 변경
          >
            {isHovered ? (
              <IconButton size="small" icon={<ChevronRightIcon />} />
            ) : (
              <span className="more">더보기</span>
            )}
          </Styled.StyledLink>
        )}
      </Styled.TopSection>
      <Styled.Border />
      <Styled.MainSection>{children}</Styled.MainSection>
    </Styled.Wrapper>
  );
};

export default DashboardContainer;
