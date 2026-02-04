import type { ILockerResponse } from '@/types';

import { LockerStatusCircle } from '@/features/locker/components';

import * as Styled from './LockerItem.styles';

interface ILockerItemProps {
  isPreview?: boolean;
  lockerNumber?: number;
  lockerData?: ILockerResponse;
  checkIsActiveLockerId?: (lockerId: string) => boolean;
  getSelectLockerIdHandler?: (lockerId: string) => () => void;
}

const LockerItem = ({
  isPreview = false,
  lockerNumber,
  lockerData,
  checkIsActiveLockerId,
  getSelectLockerIdHandler,
}: ILockerItemProps) => {
  const { lockerId, number, status, password, endDate, memberId, memberName } = lockerData || {};

  const formatValue = (value?: string) => {
    if (value === 'N/A' || !value) return '';
    return value;
  };

  const formattedValue = {
    NAME: formatValue(memberName),
    PASSWORD: formatValue(password),
    END_DATE: formatValue(endDate),
  };

  return isPreview ? (
    <Styled.Item key={lockerId}>
      <Styled.NumberWrapper>{lockerNumber}</Styled.NumberWrapper>
      <Styled.StatusWrapper>
        <LockerStatusCircle status={'사용 가능'} />
      </Styled.StatusWrapper>
    </Styled.Item>
  ) : (
    <Styled.Item
      key={lockerId}
      unAvailable={!!memberId}
      checked={checkIsActiveLockerId && checkIsActiveLockerId(lockerId + '')}
      onClick={getSelectLockerIdHandler && getSelectLockerIdHandler(lockerId + '')}
    >
      <Styled.NumberWrapper>{number}</Styled.NumberWrapper>
      <Styled.StatusWrapper>
        <LockerStatusCircle status={status || '사용 가능'} />
      </Styled.StatusWrapper>
      <Styled.Details>
        <span>{formattedValue.NAME}</span>
        <span>{formattedValue.PASSWORD}</span>
        <span>{formattedValue.END_DATE}</span>
      </Styled.Details>
    </Styled.Item>
  );
};

export default LockerItem;
