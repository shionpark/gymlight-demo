import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';

import {
  useMemberSearch,
  useLockerItemProps,
  useLockerGroupList,
  useLockerGroupProps,
  useLockerGroupDetail,
} from '@/features/locker/hooks';

export const useLockerTable = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { data: lockerGroupsData } = useLockerGroupList({
    branchName: activeBranch?.name || '',
  });

  const {
    lockerGroupNames,
    checkIsActiveLockerGroupName,
    getSelectLockerGroupNameHandler,
    activeLockerGroupData,
    activeLockerGroupId,
    lastLockerItemNumber,
  } = useLockerGroupProps(lockerGroupsData);

  const { data: activeLockerGroupDetails } = useLockerGroupDetail({
    branchName: activeBranch?.name || '',
    lockerGroupId: activeLockerGroupId || 0,
  });

  const {
    getSelectLockerIdHandler,
    checkIsActiveLockerId,
    activeLockerId,
    activeLockerData,
    activeLockerNumber,
  } = useLockerItemProps(activeLockerGroupDetails);

  const memberSearchProps = useMemberSearch();

  return {
    activeLockerGroupDetails,
    lockerGroupProps: {
      lockerGroupNames,
      checkIsActiveLockerGroupName,
      getSelectLockerGroupNameHandler,
      activeLockerGroupData,
      activeLockerGroupId,
      lastLockerItemNumber,
    },
    lockerItemProps: {
      getSelectLockerIdHandler,
      checkIsActiveLockerId,
      activeLockerId,
      activeLockerData,
      activeLockerNumber,
    },
    memberSearchProps,
  };
};

export interface IReturnOfUseLockerTable extends ReturnType<typeof useLockerTable> {}
