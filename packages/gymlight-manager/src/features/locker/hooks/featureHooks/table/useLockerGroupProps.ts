import { useEffect, useMemo } from 'react';

import { useToggleTabMenu } from '@/hooks';
import type { ILockerGroupResponse } from '@/types';

interface IUseLockerGroupPropsReturnType {
  /** 락커 그룹명 목록. useToggleTabMenu 훅의 파라미터. */
  lockerGroupNames: string[];

  /** 락커 그룹명 선택 함수 */
  getSelectLockerGroupNameHandler: (lockerGroupName: string) => () => void;

  /** 락커 그룹명 선택 여부 */
  checkIsActiveLockerGroupName: (lockerGroupName: string) => boolean;

  /** 선택된 락커 그룹 */
  activeLockerGroupData?: ILockerGroupResponse;

  /** 선택된 락커 그룹 id */
  activeLockerGroupId?: number;

  /** 락커 마지막 번호 */
  lastLockerItemNumber: number;
}

/**
 * 락커 그룹 선택 및 선택된 락커 그룹 값을 관리하는 커스텀 훅
 *
 * @param lockerGroupsData - 락커 그룹 배열
 *
 */

export const useLockerGroupProps = (
  lockerGroupsData?: ILockerGroupResponse[],
): IUseLockerGroupPropsReturnType => {
  const lockerGroupNames = useMemo(
    () => lockerGroupsData?.map((group) => group.name) ?? [''],
    [lockerGroupsData],
  );

  const {
    activeTab: activeLockerGroupName,
    setActiveTab: setIsActiveLockerGroupName,
    getSelectTabHandler: getSelectLockerGroupNameHandler,
    checkIsActiveTab: checkIsActiveLockerGroupName,
  } = useToggleTabMenu(lockerGroupNames);

  const activeLockerGroupData = useMemo(() => {
    return lockerGroupsData?.find((group) => group.name === activeLockerGroupName);
  }, [activeLockerGroupName, lockerGroupsData]);

  const lastLockerItemNumber = useMemo(() => {
    if (!lockerGroupsData?.length) return 0;

    return Math.max(
      ...lockerGroupsData.map(({ startNumber, quantity }) => startNumber + quantity - 1),
    );
  }, [lockerGroupsData]);

  useEffect(() => {
    if (lockerGroupsData?.length && !lockerGroupNames?.includes(activeLockerGroupName)) {
      setIsActiveLockerGroupName(lockerGroupsData[0].name);
    }
  }, [lockerGroupsData]);

  return {
    lockerGroupNames,
    getSelectLockerGroupNameHandler,
    checkIsActiveLockerGroupName,
    activeLockerGroupData,
    activeLockerGroupId: activeLockerGroupData?.lockerGroupId,
    lastLockerItemNumber,
  };
};
