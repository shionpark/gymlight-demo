import { memo } from 'react';

import type { IProductUsageCardProps } from './ProductUsageCard/ProductUsageCard';
import { ProductUsageCard } from './ProductUsageCard';

import * as Styled from './MemberDashboardTab.styles';

export interface IMemberDashboardTabProps {
  currentProductStates?: IProductUsageCardProps[];
}

const MemberDashboardTab = ({ currentProductStates }: IMemberDashboardTabProps) => {
  return (
    <Styled.Wrapper>
      {currentProductStates?.map((cardProps) => (
        <ProductUsageCard key={cardProps.productType} {...cardProps} />
      ))}
    </Styled.Wrapper>
  );
};

export default memo(MemberDashboardTab);
