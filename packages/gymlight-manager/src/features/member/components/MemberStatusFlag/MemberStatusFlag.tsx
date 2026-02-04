import type { MemberStatusType, ProductCategoryType } from '@/types';
import { memo } from 'react';

import { StatusButton, theme } from 'gymlight-design-system';

interface IMemberStatusFlagProps {
  status: MemberStatusType | ProductCategoryType;
}

const MemberStatusFlag = ({ status }: IMemberStatusFlagProps) => (
  <StatusButton colors={theme.memberDetailsFlag} status={status} />
);

export default memo(MemberStatusFlag);
