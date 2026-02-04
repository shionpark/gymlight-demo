import { StatusButton, theme } from 'gymlight-design-system';

import type { ProductCategoryType, ProductStatusType } from '@/types';

interface IProductStatusFlagProps {
  status: ProductCategoryType | ProductStatusType;
}

const ProductStatusFlag = ({ status }: IProductStatusFlagProps) => {
  const statusColors = {
    PT: theme.productColor.PT,
    운동복: theme.productColor.clothes,
    회원권: theme.productColor.membership,
    락커: theme.productColor.locker,
    패키지: theme.productColor.package,
    판매중: theme.memberStatus.active,
    판매중지: theme.memberStatus.expiredSoon,
    이벤트: theme.memberStatus.holding,
    삭제: theme.memberStatus.expired,
  };

  return <StatusButton colors={statusColors} status={status} />;
};

export default ProductStatusFlag;
