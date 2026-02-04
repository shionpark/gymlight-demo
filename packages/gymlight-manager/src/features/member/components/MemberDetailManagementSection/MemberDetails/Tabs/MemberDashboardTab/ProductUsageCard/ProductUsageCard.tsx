import type { ReactNode } from 'react';
import { memo } from 'react';

import { RatioBar, styles, theme } from 'gymlight-design-system';

import * as Styled from './ProductUsageCard.styles';

import { formatYYYYMMDD, getDateAfterNDaysFromDate } from '@/utils';

import {
  IdentificationIcon as MembershipIcon,
  ClipboardDocumentIcon as PTIcon,
  TagIcon as ClothesIcon,
  LockClosedIcon as LockerIcon,
} from '@heroicons/react/24/outline';

export interface IProductUsageCardProps {
  productType: '회원권' | '운동복' | '락커' | 'PT'; // 상품 카테고리

  remainingDays?: number;
  remainingSessions?: number;
}

const ProductUsageCard = ({
  productType,
  remainingDays,
  remainingSessions,
}: IProductUsageCardProps) => {
  const Icons: Record<'회원권' | '운동복' | '락커' | 'PT', ReactNode> = {
    회원권: <MembershipIcon />,
    운동복: <ClothesIcon />,
    락커: <LockerIcon />,
    PT: <PTIcon />,
  };

  const remainedValue = productType === 'PT' ? remainingSessions! : remainingDays!;

  const endDate = getDateAfterNDaysFromDate(new Date(), remainedValue);
  const expirationDate = formatYYYYMMDD(
    endDate.getFullYear(),
    endDate.getMonth() + 1,
    endDate.getDate(),
  );

  return (
    <Styled.Wrapper>
      <Styled.ProductCategory>
        {Icons[productType]}
        <span>{productType}</span>
      </Styled.ProductCategory>
      <Styled.PaidProduct>
        <Styled.RemainingAmountText>
          {`${remainedValue}${productType === 'PT' ? '회' : '일'}`}
        </Styled.RemainingAmountText>
        <p>{productType !== 'PT' ? `만기일: ${expirationDate}` : ``}</p>
      </Styled.PaidProduct>

      <Styled.RemainingAmountGraph>
        <RatioBar
          shape={productType === `PT` ? 'discrete' : `continuous`}
          numeratorNumber={remainedValue}
          denominatorNumber={productType === 'PT' ? 50 : 365}
          numeratorColor={`${theme.color.primary}`}
          denominatorColor={`${theme.color.lightGray}`}
          wide
        />
      </Styled.RemainingAmountGraph>
    </Styled.Wrapper>
  );
};
export default memo(ProductUsageCard);
