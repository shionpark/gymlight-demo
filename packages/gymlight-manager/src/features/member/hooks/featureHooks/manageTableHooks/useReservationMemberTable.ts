import { PRODUCT_CATEGORIES, RESERVATION_PATHS } from '@/constants';

import { useFilterOption, usePagination, useToggleDropdownMenu } from '@/hooks';

import { useMemberModals, useReservationList } from '@/features/member';
import { useMyBranchInfo } from '@/features/auth';
import { IButtonFilterOptionBoxProps } from '@/components/ButtonFilterOptionBox/ButtonFilterOptionBox';

export const useReservationMemberTable = () => {
  const { handlePageNumberChange, currentPageNumber, handlePageSizeChange, pageSize } =
    usePagination();

  const {
    setDropdownMenuRef: setFilterDropdownRef,
    checkDropdownMenuOpen: checkFilterDropdownMenuOpen,
    toggleDropdownMenu: toggleFilterDropdownMenuOpen,
  } = useToggleDropdownMenu(1);

  const isFilterDropdownOpened = checkFilterDropdownMenuOpen(0);
  const toggleFilterDropdownOpen = () => toggleFilterDropdownMenuOpen(0);

  const {
    activeStatusFilterOptions: reservationPaths,
    getStatusStateToggleHandler: getReservationPathStateToggleHandler,
  } = useFilterOption({
    statusFilterOptions: RESERVATION_PATHS,
  });

  const reservationPathOptionBoxProps = {
    statusName: '예약 경로',
    statusFilterOptions: RESERVATION_PATHS,
    activeStatusFilterOptions: reservationPaths,
    getStatusStateToggleHandler: getReservationPathStateToggleHandler,
  } as unknown as IButtonFilterOptionBoxProps;

  const {
    activeStatusFilterOptions: productTypes,
    getStatusStateToggleHandler: getProductTypeStateToggleHandler,
  } = useFilterOption({
    statusFilterOptions: PRODUCT_CATEGORIES,
  });

  const productCategoryOptionBoxProps = {
    statusName: '문의 상품',
    statusFilterOptions: PRODUCT_CATEGORIES,
    activeStatusFilterOptions: productTypes,
    getStatusStateToggleHandler: getProductTypeStateToggleHandler,
  } as unknown as IButtonFilterOptionBoxProps;

  const { branchName } = useMyBranchInfo();

  const { data } = useReservationList({
    reservationPaths,
    productTypes,
    pageNum: currentPageNumber,
    pageSize: pageSize,
    branchName: branchName as string,
  });

  const filterBoxProps = {
    reservationPathOptionBoxProps,
    productCategoryOptionBoxProps,
  };

  const { openReservationMemberFormModal } = useMemberModals();

  return {
    data,
    setFilterDropdownRef,
    checkFilterDropdownMenuOpen,
    toggleFilterDropdownOpen,
    isFilterDropdownOpened,
    filterBoxProps,

    handlePageNumberChange,
    currentPageNumber,
    pageSize,
    handlePageSizeChange,
    openReservationMemberFormModal,
  };
};
