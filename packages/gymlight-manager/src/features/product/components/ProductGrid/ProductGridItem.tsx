import { DualSideBar } from 'gymlight-design-system';

import { formatDuration, formatPrice } from '@/utils';
import type { ProductCategoryType, ProductStatusType } from '@/types';

import { ProductStatusFlag } from '../ProductStatusFlag';

import * as Styled from './ProductGridItem.styles';

interface IProductGridItemProps {
  productId: number;
  name: string;
  category: ProductCategoryType;
  status: ProductStatusType;
  duration: number;
  sessions: number;
  originalPrice: number;
  sellingPrice: number;
}

const ProductGridItem = ({
  productId,
  name,
  category,
  status,
  duration,
  sessions,
  originalPrice,
  sellingPrice,
}: IProductGridItemProps) => {
  const formattedDuration = formatDuration(duration);
  const formattedSession = sessions.toString();
  return (
    <Styled.GridItem key={productId}>
      <Styled.AbsoluteWrapper>
        <ProductStatusFlag status={category} />
        <ProductStatusFlag status={status} />
      </Styled.AbsoluteWrapper>
      <Styled.ProductName>{name}</Styled.ProductName>
      <Styled.ProductCard>
        <DualSideBar
          leftSideChildren={[<span>기간</span>]}
          rightSideChildren={[
            <span>
              {formattedDuration.formattedValue}
              {formattedDuration.durationUnit}
            </span>,
          ]}
        />
        <DualSideBar
          leftSideChildren={[<span>횟수</span>]}
          rightSideChildren={[<span>{formattedSession}회</span>]}
        />
        <Styled.Line />
        <DualSideBar
          leftSideChildren={[<span>정가</span>]}
          rightSideChildren={[
            <Styled.OriginalPrice>{formatPrice(originalPrice)}</Styled.OriginalPrice>,
          ]}
        />
        <DualSideBar
          leftSideChildren={[<span>판매가</span>]}
          rightSideChildren={[<span>{formatPrice(sellingPrice)}</span>]}
        />
      </Styled.ProductCard>
    </Styled.GridItem>
  );
};

export default ProductGridItem;
