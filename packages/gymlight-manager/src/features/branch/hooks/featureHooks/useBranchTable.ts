import { useEffect } from 'react';

import { useToggleDropdownMenu, useToggleCheckbox, usePagination } from '@/hooks';

import { useBranchList, useBranchSort, useBranchModals } from '@/features/branch';
import { BranchStatusType } from '@/types';

export const useBranchTable = () => {
  const { openBranchFormModal, openBranchDeleteFormModal, openBranchStatusFormModal } =
    useBranchModals();
  const { sortParam, branchNumberButtonProps, branchNameButtonProps, openDateButtonProps } =
    useBranchSort();

  const { handlePageNumberChange, currentPageNumber, handlePageSizeChange, pageSize } =
    usePagination();

  const { data } = useBranchList({
    sort: sortParam,
    pageNum: currentPageNumber,
    pageSize: pageSize,
  });

  const {
    toggleDropdownMenu,
    checkDropdownMenuOpen,
    setDropdownMenuRef,
    closeDropdownMenu,
    dropdownMenuRefs,
  } = useToggleDropdownMenu(data?.list?.length || 0);

  const {
    checkboxStates,
    toggleOneCheckbox,
    resetCheckboxes,
    toggleAllCheckboxes,
    checkboxCountSelected,
  } = useToggleCheckbox(data?.list.length || 0);

  useEffect(() => {
    resetCheckboxes();
  }, [sortParam]);

  const handleClickEditBranch =
    ({
      initName,
      initTel,
      initAddress,
      branchId,
      initCode,
      initOpenDate,
    }: {
      initName: string;
      initTel: string;
      initAddress: string;
      branchId: number;
      initCode: string;
      initOpenDate: string;
    }) =>
    () => {
      const [initOpenYear, initOpenMonth, initOpenDay] = initOpenDate
        .split('-')
        .map((dateValue) => dateValue.replace(/^0+/, ''));

      closeDropdownMenu();
      openBranchFormModal({
        initName,
        initTel,
        initAddress,
        branchId,
        initCode,
        initOpenYear,
        initOpenMonth,
        initOpenDay,
        isEdit: true,
      });
    };

  const handleClickChangeBranchStatus =
    ({
      initStatus,
      branchId,
      name,
      number,
    }: {
      initStatus: BranchStatusType;
      branchId: number;
      name: string;
      number: number;
    }) =>
    () => {
      closeDropdownMenu();
      openBranchStatusFormModal({
        initStatus,
        branchId,
        branchName: name,
        branchNumber: number,
      });
    };

  const handleClickDeleteBranch =
    ({ name, branchId }: { branchId: number; name: string }) =>
    () => {
      closeDropdownMenu();
      openBranchDeleteFormModal({ name, branchId });
    };

  return {
    data,

    sortParam,
    branchNumberButtonProps,
    branchNameButtonProps,
    openDateButtonProps,

    checkboxStates,
    toggleOneCheckbox,
    resetCheckboxes,
    toggleAllCheckboxes,
    checkboxCountSelected,

    toggleDropdownMenu,
    checkDropdownMenuOpen,
    setDropdownMenuRef,
    dropdownMenuRefs,
    closeDropdownMenu,

    pageSize,
    handlePageSizeChange,
    currentPageNumber,
    handlePageNumberChange,

    handleClickEditBranch,
    handleClickDeleteBranch,
    handleClickChangeBranchStatus,
  };
};

export interface IReturnOfUseBranchTable extends ReturnType<typeof useBranchTable> {}
