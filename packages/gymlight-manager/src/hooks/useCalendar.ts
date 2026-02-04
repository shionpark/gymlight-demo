import { formatYYYYMMDD } from '@/utils';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';

interface IUseCalendarReturn {
  /** 현재 달에 속한 기준 Date 객체 */
  currentMonthDate: Date;
  /** currentMonthDate Setter*/
  setCurrentMonthDate: Dispatch<SetStateAction<Date>>;

  /**현재 월 */
  currentMonth: number;
  /**현재 년 */
  currentYear: number;

  /** 현재 주에 속한 기준 Date 객체  */
  currentWeekDate: Date;

  /** 현재 주 번호: 달의 몇번째 주 인지 표기*/
  weekNumberInMonthCalendar: number;

  /** currentWeekDate Setter*/
  setCurrentWeekDate: Dispatch<SetStateAction<Date>>;

  /** 한 주의 날짜들을 나타내는 Date 객체 배열 */
  daysOfCurrentWeek: Date[];

  /** 한 달의 모든 날짜를 포함하는 Date 객체 배열  */
  daysOfCurrentMonth: Date[];

  /**한 달력에 속한 모든 주의 날짜를 포함하는 Date 객체 배열 */
  daysOfCurrentMonthWithAdjacentWeeks: Date[];

  /** currentMonthDate 를 다음달로 변경 */
  moveToNextMonth: () => void;
  /** currentMonthDate 를 이전달로 변경 */
  moveToPrevMonth: () => void;

  /** weekDate를 현재달의 n번째 주로 변경 */
  changeWeekNumber: (index: number) => void;

  /** 선택된 week가 선택된 Month에 속하는지 여부*/
  isWeekInMonthCalendar: boolean;

  /** WeekDate가 나타내는 날짜 범위*/
  weekCalendarRange: [string, string];
  /**MonthDate가 나타내는 날짜범위
   *
   * ['YYYY-MM-DD', 'YYYY-MM-DD' ]
   */
  monthCalendarRange: [string, string];
}

interface IUseCalendarArgs {
  date?: Date;
}

export const useCalendar = (args?: IUseCalendarArgs): IUseCalendarReturn => {
  const [currentMonthDate, setCurrentMonthDate] = useState(args?.date ?? new Date());

  // 달력이 표시하는 년 월
  const currentYear = currentMonthDate.getFullYear();
  const currentMonth = currentMonthDate.getMonth() + 1;

  // 1일
  const startDateOfMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), 1);

  // 말일
  const endDateOfMonth = new Date(
    currentMonthDate.getFullYear(),
    currentMonthDate.getMonth() + 1,
    0,
  );

  // 달력이 표시하는 첫번째 주의 일요일 (지난달일 수도있음)
  const startDateOfFirstWeek: Date =
    startDateOfMonth.getDay() === 0
      ? startDateOfMonth
      : new Date(
          currentMonthDate.getFullYear(),
          startDateOfMonth.getMonth(),
          1 - startDateOfMonth.getDay(),
        );

  // 달력이 표시하는 마지막 주의 토요일 (다음달일 수도있음)
  const endDateOfLastWeek: Date =
    endDateOfMonth.getDay() === 6
      ? endDateOfMonth
      : new Date(
          currentMonthDate.getFullYear(),
          currentMonthDate.getMonth(),
          endDateOfMonth.getDate() + 6 - endDateOfMonth.getDay(),
        );

  const monthCalendarRange = [
    formatYYYYMMDD(
      startDateOfFirstWeek.getFullYear(),
      startDateOfFirstWeek.getMonth() + 1,
      startDateOfFirstWeek.getDate(),
    ),
    formatYYYYMMDD(
      endDateOfLastWeek.getFullYear(),
      endDateOfLastWeek.getMonth() + 1,
      endDateOfLastWeek.getDate(),
    ),
  ] as [string, string];

  // 주간 캘린더 Date
  const [currentWeekDate, setCurrentWeekDate] = useState(new Date());

  // 요일
  const dayOfWeekDate = currentWeekDate.getDay();
  // 날짜
  const dateOfWeekDate = currentWeekDate.getDate();

  // 주의 시작일(일요일)
  const startDateOfWeek = new Date(
    currentWeekDate.getFullYear(),
    currentWeekDate.getMonth(),
    dateOfWeekDate - dayOfWeekDate,
  );
  // 주의 말일(토요일)
  const endDateOfWeek = new Date(
    startDateOfWeek.getFullYear(),
    startDateOfWeek.getMonth(),
    startDateOfWeek.getDate() + 6,
  );

  const weekCalendarRange = [
    formatYYYYMMDD(
      startDateOfWeek.getFullYear(),
      startDateOfWeek.getMonth() + 1,
      startDateOfWeek.getDate(),
    ),
    formatYYYYMMDD(
      endDateOfWeek.getFullYear(),
      endDateOfWeek.getMonth() + 1,
      endDateOfWeek.getDate(),
    ),
  ] as [string, string];

  // 캘린더에 표기할 구간에 해당하는 날짜만큼의 Date배열을 반환
  const getEachDayOfInterval = (start: Date, end: Date): Date[] => {
    const numDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1;

    return Array.from({ length: numDays }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    }) as Date[];
  };

  // 한주
  const daysOfCurrentWeek: Date[] = useMemo(
    () => getEachDayOfInterval(startDateOfWeek, endDateOfWeek),
    [startDateOfWeek, endDateOfWeek],
  );

  // 한달
  const daysOfCurrentMonth: Date[] = useMemo(
    () => getEachDayOfInterval(startDateOfMonth, endDateOfMonth),
    [startDateOfMonth, endDateOfMonth],
  );

  // 한 달력에 포함된 모든 주
  const daysOfCurrentMonthWithAdjacentWeeks: Date[] = useMemo(
    () => getEachDayOfInterval(startDateOfFirstWeek, endDateOfLastWeek),
    [startDateOfFirstWeek, endDateOfMonth],
  );

  const moveToNextMonth = () => {
    setCurrentMonthDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };
  const moveToPrevMonth = () => {
    setCurrentMonthDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const changeWeekNumber = (weekIndex: number) => {
    const weekStartDates = [];

    for (let i = 0; i < daysOfCurrentMonthWithAdjacentWeeks.length; i += 7) {
      weekStartDates.push(daysOfCurrentMonthWithAdjacentWeeks[i]);
    }

    const selectedWeek = weekStartDates[weekIndex];
    if (selectedWeek) {
      setCurrentWeekDate(selectedWeek);
    }
  };

  const getYearMonthValue = (date: Date) => date.getFullYear() * 12 + date.getMonth();

  const isWeekInMonthCalendar = useMemo(() => {
    const startMonthValue = getYearMonthValue(daysOfCurrentMonthWithAdjacentWeeks[0]);
    const endMonthValue = getYearMonthValue(
      daysOfCurrentMonthWithAdjacentWeeks[daysOfCurrentMonthWithAdjacentWeeks.length - 1],
    );
    const currentWeekValue = getYearMonthValue(startDateOfWeek);

    return currentWeekValue >= startMonthValue && currentWeekValue <= endMonthValue;
  }, [daysOfCurrentMonthWithAdjacentWeeks, startDateOfWeek]);

  const weekNumberInMonthCalendar = useMemo(() => {
    if (!isWeekInMonthCalendar) {
      return -1;
    }

    const startIndex = daysOfCurrentMonthWithAdjacentWeeks
      .filter((_, index) => index % 7 === 0)
      .findIndex((date) => date.getTime() === startDateOfWeek.getTime());
    return startIndex + 1;
  }, [isWeekInMonthCalendar, startDateOfWeek, daysOfCurrentMonthWithAdjacentWeeks]);

  return {
    currentYear,
    currentMonth,

    currentMonthDate,
    setCurrentMonthDate,
    weekCalendarRange,

    monthCalendarRange,

    daysOfCurrentMonth,
    daysOfCurrentMonthWithAdjacentWeeks,

    currentWeekDate,
    setCurrentWeekDate,

    daysOfCurrentWeek,
    weekNumberInMonthCalendar,

    isWeekInMonthCalendar,

    moveToNextMonth,
    moveToPrevMonth,
    changeWeekNumber,
  };
};
