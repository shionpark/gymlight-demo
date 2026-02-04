import { usePerformanceList } from '@/features/accounting';
import { useCalendar, usePagination } from '@/hooks';

export const useSalaryCalculationTable = () => {
  const { pageSize, currentPageNumber, handlePageNumberChange, handlePageSizeChange } =
    usePagination();

  const date = new Date();
  date.setDate(date.getMonth() - 2);

  const { currentYear, currentMonth, moveToNextMonth, moveToPrevMonth, monthCalendarRange } =
    useCalendar({ date });

  const dataRangeInfoText = `${currentYear}년 ${currentMonth}월`;

  const { data: performanceData } = usePerformanceList({
    updatedAt: monthCalendarRange,
    pageNum: currentPageNumber,
    pageSize,
  });

  const performanceListData = performanceData?.list;
  const totalPageNumbers = performanceData?.totalPages;

  return {
    dataRangeInfoText,
    moveToNextMonth,
    moveToPrevMonth,
    performanceListData,
    pageSize,
    currentPageNumber,
    handlePageNumberChange,
    handlePageSizeChange,
    totalPageNumbers,
  };
};
