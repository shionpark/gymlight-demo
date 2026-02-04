import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';
import { useToggleDropdownMenu, usePagination, useToggleCheckbox } from '@/hooks';

import {
  useStaffSort,
  useStaffList,
  useStaffRoleFilter,
  useStaffStatusFilter,
} from '@/features/staff/hooks';

export const useStaffTable = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const sortProps = useStaffSort();
  const paginationProps = usePagination();
  const roleFilterProps = useStaffRoleFilter();
  const statusFilterProps = useStaffStatusFilter(activeBranch?.name);

  const { data: staffData } = useStaffList({
    sort: sortProps.sortParam,
    pageNum: paginationProps.currentPageNumber,
    pageSize: paginationProps.pageSize,
    branchName: statusFilterProps.currentBranch,
    statuses: [statusFilterProps.currentStatus],
    roleNames: roleFilterProps.selectedRoles,
  });

  const checkboxProps = useToggleCheckbox(staffData?.list.length || 0);
  const dropdownProps = useToggleDropdownMenu(staffData?.list.length || 0);

  useEffect(() => {
    checkboxProps.resetCheckboxes();
  }, [sortProps.sortParam, staffData]);

  useEffect(() => {
    paginationProps.resetPageNumber();
  }, [roleFilterProps.selectedRoles]);

  return {
    staffData,
    sortProps,
    checkboxProps,
    dropdownProps,
    paginationProps,

    roleFilterProps,
    statusFilterProps,
  };
};

export interface IStaffTableProps extends ReturnType<typeof useStaffTable> {}
