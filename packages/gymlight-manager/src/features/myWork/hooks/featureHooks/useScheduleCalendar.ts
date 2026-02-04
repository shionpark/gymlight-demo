import { useCalendar } from '@/hooks';
import { useScheduleList, useMyWorkModals } from '@/features/myWork';

export const useScheduleCalendar = () => {
  const {
    moveToNextMonth,
    moveToPrevMonth,

    daysOfCurrentMonthWithAdjacentWeeks,

    currentMonth,
    currentYear,
    changeWeekNumber,
    weekNumberInMonthCalendar,

    monthCalendarRange,
    weekCalendarRange,
    daysOfCurrentWeek,
    isWeekInMonthCalendar,
  } = useCalendar();

  const { openScheduleFormModal, openScheduleFormWithFetchingDataModal } = useMyWorkModals();

  const { data: monthlyScheduleData } = useScheduleList({
    startTime: monthCalendarRange,
  });
  const { data: weeklyScheduleData } = useScheduleList({
    startTime: weekCalendarRange,
  });

  return {
    moveToNextMonth,
    moveToPrevMonth,

    daysOfCurrentMonthWithAdjacentWeeks,

    currentMonth,
    currentYear,
    changeWeekNumber,
    weekNumberInMonthCalendar,
    monthlyScheduleData,
    weeklyScheduleData,

    daysOfCurrentWeek,

    isWeekInMonthCalendar,
    openScheduleFormModal,
    openScheduleFormWithFetchingDataModal,
  };
};
