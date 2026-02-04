import { useMemo } from 'react';

import { useMe } from './useMe';
import { useBranchNameList } from '@/features/branch';

import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

export const useMyBranchInfo = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { data: userData } = useMe();
  const { data: branchNames } = useBranchNameList();

  const userBranchName = useMemo(
    () =>
      userData?.role === '관리자'
        ? activeBranch?.name
        : branchNames?.find(({ branchId }) => branchId === userData?.branchId)?.name,
    [userData?.branchId, branchNames],
  );

  const branchName = userBranchName;

  return {
    role: userData?.role,
    branchName,
    branchId: userData?.branchId,
  };
};
