import { useToggleTabMenu, useSearchInput, usePagination } from '@/hooks';

export const useScheduleTable = () => {
  const { currentPageNumber, handlePageNumberChange, handlePageSizeChange, pageSize } =
    usePagination();

  const {
    searchInputRef,
    isSearching,

    searchParam,

    runSearch,
    endSearch,
  } = useSearchInput();

  const tabsMenus = ['전체', 'OT', 'PT'] as const;

  const { activeTab, getSelectTabHandler, checkIsActiveTab } = useToggleTabMenu(tabsMenus);

  const getTabButtonVariant = (
    tabName: '전체' | 'OT' | 'PT',
  ): 'normal' | 'reverse' | 'outline' | 'primary' | 'primary-outline' | 'error-outline' => {
    return checkIsActiveTab(tabName) ? 'primary' : 'outline';
  };

  const categoryParam = activeTab === '전체' ? ['OT', 'PT'] : [activeTab];

  /** fetch api 수업 목록
   *
   * const {data} = useScheduleList({category:categoryParam , pageNum, pageSize})
   */

  return {
    getSelectTabHandler,
    checkIsActiveTab,

    pageSize,
    handlePageSizeChange,

    currentPageNumber,
    handlePageNumberChange,

    getTabButtonVariant,
    tabsMenus,

    searchInputRef,
    isSearching,

    searchParam,

    runSearch,
    endSearch,
  };
};
