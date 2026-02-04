import { useCallback } from 'react';

import { useToggleTabMenu } from '@/hooks';

import type { UserStatusType } from '@/types';

import { STAFF_STATUSES } from '@/features/staff/constants';

export interface UseStaffStatusFilterReturnType {
  currentStatus: UserStatusType;
  staffStatuses: UserStatusType[];
  checkIsCurrentStatus: (tabName: UserStatusType) => boolean;
  getSelectStatusHandler: (tabName: UserStatusType) => () => void;
  currentBranch?: string;
}

export const useStaffStatusFilter = (activeBranch?: string): UseStaffStatusFilterReturnType => {
  const {
    activeTab: currentStatus,
    checkIsActiveTab: checkIsCurrentStatus,
    getSelectTabHandler: getSelectStatusHandler,
  } = useToggleTabMenu(STAFF_STATUSES);

  const isGlobalBranchStatus = (status: UserStatusType) =>
    ['승인대기', '승인거부', '탈퇴요청'].includes(status);

  /** 지점(branch) 정보가 없는 status인 경우, undefined(전 지점)를 반환 */
  const getBranchParamByStatus = useCallback(
    (currentBranch?: string) => {
      if (isGlobalBranchStatus(currentStatus)) return undefined;
      return currentBranch;
    },
    [activeBranch, currentStatus],
  );

  const currentBranch = getBranchParamByStatus(activeBranch);

  return {
    currentStatus,
    staffStatuses: STAFF_STATUSES,
    checkIsCurrentStatus,
    getSelectStatusHandler,
    currentBranch,
  };
};
