import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

import { useToggleDropdownMenu } from '@/hooks';

import type { GenderType } from '@/types';

import { useAttendanceList } from '../fetchHooks';
import { useAttendanceFilterOptions } from './useAttendanceFilterOptions';

export const useAttendanceMember = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { dateFilterOptionBoxProps, genderFilterOptionBoxProps, startDateOption, endDateOption } =
    useAttendanceFilterOptions();

  const { data: attendanceMemberData } = useAttendanceList({
    pageNum: 1,
    pageSize: 1000000,
    branchName: activeBranch?.name,
    genders: genderFilterOptionBoxProps.activeStatusFilterOptions as GenderType[],
    checkedAt: [startDateOption, endDateOption],
  });

  const { toggleDropdownMenu, setDropdownMenuRef, checkDropdownMenuOpen } =
    useToggleDropdownMenu(1);

  return {
    attendanceMemberData,

    dropdownProps: {
      setFilterMenuRef: setDropdownMenuRef(0),
      toggleFilterMenu: () => toggleDropdownMenu(0),
      checkFilterMenuOpen: checkDropdownMenuOpen(0),
    },

    filterOptions: {
      dateFilterOptionBoxProps,
      genderFilterOptionBoxProps,
    },
  };
};

export interface IAttendanceMemberProps extends ReturnType<typeof useAttendanceMember> {}
