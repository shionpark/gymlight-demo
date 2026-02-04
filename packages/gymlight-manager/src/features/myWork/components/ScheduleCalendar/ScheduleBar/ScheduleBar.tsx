import type { HTMLAttributes } from 'react';

import type { ScheduleStatusType, ScheduleType } from '@/types';

import { ClockIcon } from '@heroicons/react/24/outline';

import { ScheduleFlag } from '@/features/myWork';

import * as Styled from './ScheduleBar.styles';

interface IScheduleBarProps extends HTMLAttributes<HTMLButtonElement> {
  scheduleType: ScheduleType;
  status: ScheduleStatusType;
  timeRange: string;
}

const ScheduleBar = ({ scheduleType, status, timeRange, ...rest }: IScheduleBarProps) => (
  <Styled.Wrapper scheduleType={scheduleType} {...rest}>
    <ScheduleFlag status={scheduleType} />
    <ScheduleFlag status={status} />
    <Styled.TimeContainer>
      <ClockIcon height="1em" />
      {timeRange}
    </Styled.TimeContainer>
  </Styled.Wrapper>
);

export default ScheduleBar;
