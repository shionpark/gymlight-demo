import type { UserStatusType } from '@/types';
import { memo } from 'react';

import { StatusButton, theme } from 'gymlight-design-system';

interface IStaffStatusFlagProps {
  status: UserStatusType;
}

const StaffStatusFlag = ({ status }: IStaffStatusFlagProps) => (
  <StatusButton colors={theme.staffStatusFlag} status={status} />
);

export default memo(StaffStatusFlag);
