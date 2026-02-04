import { theme } from 'gymlight-design-system';

import type { ScheduleType, ScheduleStatusType } from '@/types';

import * as Styled from './ScheduleFlag.styles';

interface IScheduleStatusFlagProps {
  status: ScheduleType | ScheduleStatusType;
}

const ScheduleStatusFlag = ({ status }: IScheduleStatusFlagProps) => {
  const statusColors = {
    PT: theme.productColor.PT,
    OT: theme.productColor.membership,
    일반: theme.color.lightGray,

    '진행 중': theme.memberStatus.active,
    완료: theme.memberStatus.holding,
    미완료: theme.memberStatus.expiredSoon,
    취소: theme.memberStatus.expired,
  };

  return <Styled.StatusFlag colors={statusColors} status={status === 'NORMAL' ? '일반' : status} />;
};

export default ScheduleStatusFlag;
