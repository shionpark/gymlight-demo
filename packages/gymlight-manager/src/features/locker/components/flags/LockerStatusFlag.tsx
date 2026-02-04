import { StatusButton, theme } from 'gymlight-design-system';

import type { LockerStatusType } from '@/types';

interface ILockerStatusFlagProps {
  status: LockerStatusType;
}

const LockerStatusFlag = ({ status }: ILockerStatusFlagProps) => {
  const statusColors = {
    '사용 가능': theme.memberStatus.active,
    '사용 중': theme.memberStatus.expired,
    '예약 중': theme.memberStatus.expiredSoon,
    파손: theme.memberStatus.holding,
  };

  return <StatusButton colors={statusColors} status={status} />;
};

export default LockerStatusFlag;
