import { useEffect, useMemo } from 'react';

import { useMe } from '@/features/auth';

import { useFilterOption, usePagination, useSearchInput, useToggleDropdownMenu } from '@/hooks';

import { GENDERS, MEMBER_STATUS_OPTIONS } from '@/constants';

import { useMemberSort, useMemberList, useMemberSearchList } from '@/features/member';

import { IDateFilterOptionBoxProps } from '@/components/DateFilterOptionBox/DateFilterOptionBox';
import { IButtonFilterOptionBoxProps } from '@/components/ButtonFilterOptionBox/ButtonFilterOptionBox';
import { useBranchNameList } from '@/features/branch';
import { formatYYYYMMDD } from '@/utils';

export const useRegisteredMemberTable = () => {
  const { data: meData } = useMe();

  const hasAuth = meData?.role === '관리자' || meData?.role === '매니저';
  const { data: branchNames } = useBranchNameList();

  const branchName = useMemo(() => {
    if (!meData?.branchId || !branchNames) return undefined;
    return branchNames.find(({ branchId }) => branchId === meData.branchId)?.name;
  }, [meData?.branchId, branchNames]);

  const {
    handlePageNumberChange,
    currentPageNumber: pageNum,
    handlePageSizeChange,
    pageSize,
  } = usePagination();

  const {
    nameButtonProps,
    ageButtonProps,
    joinDateButtonProps,
    startDateButtonProps,
    endDateButtonProps,
    remainingDaysButtonProps,
    remainingCountButtonProps,
    sortParam,
  } = useMemberSort();

  const {
    setDropdownMenuRef: setFilterDropdownRef,
    checkDropdownMenuOpen: checkFilterDropdownMenuOpen,
    toggleDropdownMenu: toggleFilterDropdownMenuOpen,
  } = useToggleDropdownMenu(1);

  const isFilterDropdownOpened = checkFilterDropdownMenuOpen(0);
  const toggleFilterDropdownOpen = () => toggleFilterDropdownMenuOpen(0);

  //검색 인풋
  const {
    searchInputRef,
    isSearching,

    searchParam,

    runSearch,
    endSearch,
  } = useSearchInput();

  // 쿼리 DateRange 옵션: 시작일, 종료일
  const dateFilterOptions = ['시작일', '종료일', '가입일'] as const;
  const {
    getDateFilterStateAsArray,
    dateFilterStates,
    getDateStateChangeHandler,
    setDateFilterState,
  } = useFilterOption({
    dateFilterOptions,
  });

  useEffect(() => {
    const date = new Date();

    const initRangeEnd = formatYYYYMMDD(
      date.getFullYear() + 2,
      date.getMonth() + 1,
      date.getDate(),
    );
    const initRangeStart = '2000-01-01';

    setDateFilterState({ dateFilterName: '시작일', from: initRangeStart, to: initRangeEnd });
    setDateFilterState({ dateFilterName: '종료일', from: initRangeStart, to: initRangeEnd });
    setDateFilterState({ dateFilterName: '가입일', from: initRangeStart, to: initRangeEnd });
  }, []);
  const dateFilterOptionBoxProps = {
    dateFilterOptions,
    dateFilterStates,
    getDateStateChangeHandler,
  } as unknown as IDateFilterOptionBoxProps;

  // 쿼리 gender 옵션
  const {
    activeStatusFilterOptions: genders,
    getStatusStateToggleHandler: getGenderStateToggleHandler,
  } = useFilterOption({
    statusFilterOptions: GENDERS,
  });

  const genderFilterOptionBoxProps = {
    statusName: '성별',
    statusFilterOptions: GENDERS,
    activeStatusFilterOptions: genders,
    getStatusStateToggleHandler: getGenderStateToggleHandler,
  } as unknown as IButtonFilterOptionBoxProps;

  // 쿼리 statuses 옵션
  const {
    activeStatusFilterOptions: statuses,
    getStatusStateToggleHandler: getStatusesStateToggleHandler,
  } = useFilterOption({
    statusFilterOptions: MEMBER_STATUS_OPTIONS,
  });

  const memberStatusFilterOptionBoxProps = {
    statusName: '상태',
    statusFilterOptions: MEMBER_STATUS_OPTIONS,
    activeStatusFilterOptions: statuses,
    getStatusStateToggleHandler: getStatusesStateToggleHandler,
  } as unknown as IButtonFilterOptionBoxProps;

  // 쿼리
  const { data: memberListData } = useMemberList({
    sort: sortParam,
    pageNum,
    pageSize,
    genders,
    statuses,
    joinDateRange: getDateFilterStateAsArray('가입일'),
    startDateRange: getDateFilterStateAsArray('시작일'),
    branchName: branchName || '',
    endDateRange: getDateFilterStateAsArray('종료일'),
  });
  const { data: searchedMemberListData } = useMemberSearchList({
    pageNum,
    pageSize,
    name: searchParam,
  });

  return {
    memberListData,
    searchedMemberListData,

    runSearch,
    isSearching,
    endSearch,
    searchInputRef,

    nameButtonProps,
    ageButtonProps,
    joinDateButtonProps,
    startDateButtonProps,
    endDateButtonProps,
    remainingDaysButtonProps,
    remainingCountButtonProps,

    handlePageNumberChange,
    pageNum,
    pageSize,
    handlePageSizeChange,

    hasAuth,

    isFilterDropdownOpened,
    toggleFilterDropdownOpen,
    setFilterDropdownRef,
    filterBoxProps: {
      dateFilterOptionBoxProps,
      genderFilterOptionBoxProps,
      memberStatusFilterOptionBoxProps,
    },
  };
};
