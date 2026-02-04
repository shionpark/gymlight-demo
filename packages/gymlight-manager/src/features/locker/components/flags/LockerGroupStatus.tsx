import type { ILockerGroupResponse, LockerStatusType } from '@/types';

import LockerStatusCircle from './LockerStatusCircle';

import { Wrapper } from './LockerGroupStatus.styles';

interface ILockerGroupStatusProps {
  lockerGroup?: ILockerGroupResponse;
}

const LockerGroupStatus = ({ lockerGroup }: ILockerGroupStatusProps) => {
  const lockerGroupStatusCountMap: {
    status: LockerStatusType;
    countKey: keyof ILockerGroupResponse;
  }[] = [
    { status: '사용 가능', countKey: 'availableCount' },
    { status: '사용 중', countKey: 'inUseCount' },
    { status: '예약 중', countKey: 'reservedCount' },
    { status: '파손', countKey: 'damagedCount' },
  ];

  return (
    <Wrapper>
      {lockerGroupStatusCountMap.map(({ status, countKey }) => (
        <span key={status}>
          <LockerStatusCircle status={status} />
          {status}
          {lockerGroup?.[countKey as keyof ILockerGroupResponse]}
        </span>
      ))}
    </Wrapper>
  );
};
export default LockerGroupStatus;
