import type { HTMLAttributes } from 'react';

import type { ScheduleStatusType, ScheduleType } from '@/types';

import { ClockIcon } from '@heroicons/react/24/outline';

import { ScheduleFlag } from '@/features/myWork';

import * as Styled from './ScheduleBox.styles';

interface IScheduleBoxProps extends HTMLAttributes<HTMLButtonElement> {
  scheduleType: ScheduleType;
  status: ScheduleStatusType;
  title: string;
  timeRange: string;
}

const ScheduleBox = ({ scheduleType, timeRange, title, status, ...rest }: IScheduleBoxProps) => (
  <Styled.Wrapper scheduleType={scheduleType} {...rest}>
    <Styled.FlagContainer>
      <ScheduleFlag status={scheduleType} />
      <ScheduleFlag status={status} />
    </Styled.FlagContainer>
    <Styled.TimeContainer>
      <ClockIcon height="1.3em" /> {timeRange}
    </Styled.TimeContainer>
    <Styled.Title>{title}</Styled.Title>
  </Styled.Wrapper>
);

export default ScheduleBox;
