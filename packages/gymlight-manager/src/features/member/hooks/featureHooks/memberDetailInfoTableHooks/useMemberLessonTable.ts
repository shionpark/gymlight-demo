import { useFilterOption, usePagination, useToggleTabMenu } from '@/hooks';

export const useMemberLessonTable = () => {
  const tabMenus = ['전체', 'OT', 'PT'] as const;
  const { activeTab, getSelectTabHandler, checkIsActiveTab } = useToggleTabMenu(tabMenus);

  const selectedLessonCategories = activeTab === '전체' ? ['OT', 'PT'] : [activeTab];

  const dateFilterOptions = ['기간'] as const;

  const { dateFilterStates, getDateStateChangeHandler } = useFilterOption({ dateFilterOptions });

  const {
    handlePageNumberChange,
    currentPageNumber: pageNum,
    handlePageSizeChange,
    pageSize,
  } = usePagination();

  /**
   * const {data} = useMemberLessonList({
   *  dateRange: [from, to],
   *  filters:selectedLessonCategories,
   * })
   */

  interface ILessonCard {
    id: number;
    lessonType: 'PT' | 'OT';
    date: '2024-01-01 08:30:00';
  }

  const mockData = {
    list: [
      { id: 1, lessonType: 'PT', trainerName: '박', date: '2024-01-01 08:30:00' },
      { id: 2, lessonType: 'OT', trainerName: '최', date: '2024-01-02 09:15:30' },
      { id: 3, lessonType: 'PT', trainerName: '신', date: '2024-01-03 14:45:20' },
    ],
    totalElement: 3,
    totalPages: 1,
  };

  return {
    tabMenus,
    data: mockData,
    getSelectTabHandler,
    checkIsActiveTab,

    dateFilterOptions,
    getDateStateChangeHandler,
    dateFilterStates,

    handlePageNumberChange,
    pageNum,
    handlePageSizeChange,
    pageSize,
  };
};
