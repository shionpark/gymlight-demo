import { useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

import type { ProductCategoryCodeType } from '@/types';
import { useToggleCheckbox, useToggleDropdownMenu, usePagination } from '@/hooks';

import { useProductList } from '../../fetchHooks';

import { useProductSort } from './useProductSort';
import { useProductViewButtons } from './useProductViewButtons';
import { useProductCategorySelect } from '../category/useProductCategorySelect';

export const useProductTable = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const pageProps = usePagination();
  const sortProps = useProductSort();
  const viewProps = useProductViewButtons();
  const categorySelectProps = useProductCategorySelect();

  const { data: productData } = useProductList({
    categoryCode: categorySelectProps.activeCategoryData?.code as ProductCategoryCodeType,
    sort: sortProps.sortParam,
    branchName: activeBranch?.name || '',
    pageNum: pageProps.currentPageNumber,
    pageSize: viewProps.setPageSizeByView(pageProps.pageSize),
  });

  const checkboxProps = useToggleCheckbox(productData?.list.length || 0);
  const dropdownProps = useToggleDropdownMenu(productData?.list.length || 0);
  const optionsMenuProps = useToggleDropdownMenu(productData?.list.length || 0);
  const filterDropdownProps = useToggleDropdownMenu(2);

  useEffect(() => {
    checkboxProps.resetCheckboxes();
  }, [activeBranch?.branchId, sortProps.sortParam]);

  useEffect(() => {
    pageProps.resetPageNumber();
    checkboxProps.resetCheckboxes();
  }, [viewProps.activeView]);

  useEffect(() => {
    pageProps.resetPageNumber();
    checkboxProps.resetCheckboxes();
  }, [categorySelectProps.activeCategoryData]);

  return {
    productData,

    pageProps,
    sortProps,
    viewProps,
    categorySelectProps,
    checkboxProps,
    dropdownProps,
    optionsMenuProps: {
      setOptionsMenuRef: optionsMenuProps.setDropdownMenuRef,
      toggleOptionsMenu: optionsMenuProps.toggleDropdownMenu,
      checkOptionsMenuOpen: optionsMenuProps.checkDropdownMenuOpen,
    },
    filterDropdownProps: {
      toggleFilterMenu: filterDropdownProps.toggleDropdownMenu,
      setFilterMenuRef: filterDropdownProps.setDropdownMenuRef,
      checkFilterMenuOpen: filterDropdownProps.checkDropdownMenuOpen,
      closeFilterDropdownMenu: filterDropdownProps.closeDropdownMenu,
    },
  };
};

export interface IProductTableProps extends ReturnType<typeof useProductTable> {}
