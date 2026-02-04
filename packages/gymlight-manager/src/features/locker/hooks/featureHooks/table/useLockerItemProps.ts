import { useEffect, useMemo } from 'react';

import { useToggleTabMenu } from '@/hooks';
import type { ILockerGroupDetailResponse, ILockerResponse } from '@/types';

interface IUseLockerItemPropsReturnType {
  /** 락커 선택 함수. 선택된 락커 그룹의 locker id를 파라미터로 받음. */
  getSelectLockerIdHandler: (lockerId: string) => () => void;

  /** 락커 선택 여부 */
  checkIsActiveLockerId: (lockerId: string) => boolean;

  /** 선택된 락커 id */
  activeLockerId: number;

  /** 선택된 락커 */
  activeLockerData?: ILockerResponse;

  /** 선택된 락커 번호 */
  activeLockerNumber?: number;
}

/**
 * 락커 선택 및 선택된 락커 값을 관리하는 커스텀 훅
 *
 * @param lockersData - 락커 배열
 *
 */

export const useLockerItemProps = (
  lockerGroupDetails?: ILockerGroupDetailResponse,
): IUseLockerItemPropsReturnType => {
  const { startNumber, quantity, lockers } = lockerGroupDetails || {};

  const lockerItemIds = useMemo(
    () => lockers?.map((item) => item.lockerId + '') ?? [''],
    [lockers],
  );

  const {
    activeTab: activeLockerId,
    setActiveTab: setLockerId,
    getSelectTabHandler: getSelectLockerIdHandler,
    checkIsActiveTab: checkIsActiveLockerId,
  } = useToggleTabMenu(lockerItemIds);

  const activeLockerData = useMemo(() => {
    return lockers?.find((item) => item.lockerId === +activeLockerId);
  }, [activeLockerId, lockers]);

  // 활성화 된 락커 그룹의 첫번째 락커를 활성화
  useEffect(() => {
    if (lockers && !lockerItemIds?.includes(activeLockerId)) {
      setLockerId(lockers[0].lockerId + '');
    }
  }, [lockerItemIds.length]);

  return {
    activeLockerId: +activeLockerId,
    getSelectLockerIdHandler,
    checkIsActiveLockerId,
    activeLockerData,
    activeLockerNumber: activeLockerData?.number,
  };
};
