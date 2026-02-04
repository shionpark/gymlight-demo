import { MonthlyCalendar, WeeklyCalendar } from 'gymlight-design-system';

import {
  PlusIcon,
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
  MagnifyingGlassIcon as ZoomInIcon,
} from '@heroicons/react/24/solid';

import * as Styled from './ScheduleCalendar.styles';

import { ScheduleBar } from './ScheduleBar';
import { ScheduleBox } from './ScheduleBox';
import { useScheduleCalendar } from '../../hooks';
import { getYYYYMMDDFromDate } from '@/utils';

const ScheduleCalendar = () => {
  const {
    moveToNextMonth,
    moveToPrevMonth,

    daysOfCurrentMonthWithAdjacentWeeks,

    currentMonth,
    currentYear,
    changeWeekNumber,
    weekNumberInMonthCalendar,
    daysOfCurrentWeek,
    isWeekInMonthCalendar,
    weeklyScheduleData,
    monthlyScheduleData,

    openScheduleFormModal,
    openScheduleFormWithFetchingDataModal,
  } = useScheduleCalendar();

  const getWeekSelectButtonVariant = (monthDatesIndex: number) =>
    Math.floor((monthDatesIndex + 1) / 7) === weekNumberInMonthCalendar && isWeekInMonthCalendar
      ? 'primary'
      : 'primary-outline';

  const dateCells = daysOfCurrentWeek.map((day) => day.getDate());

  const getTimeOnlyFromFullDateString = (dateTime: string) => dateTime.split(' ')[1].slice(0, 5);

  return (
    <Styled.Wrapper>
      <WeeklyCalendar
        dateCells={dateCells}
        dayCells={daysOfCurrentWeek.map((aDay) => {
          const dateString = getYYYYMMDDFromDate(aDay);

          // `weeklyScheduleData`가 존재하고 `dateString` 키가 있는지 확인 후 조회
          const schedules =
            //@ts-ignore
            weeklyScheduleData?.[dateString]?.map(
              //@ts-ignore
              ({ title, status, scheduleType, startTime, endTime, scheduleId }) => (
                <ScheduleBox
                  key={`${title}-${startTime}`}
                  title={title}
                  scheduleType={scheduleType}
                  status={status}
                  timeRange={`${getTimeOnlyFromFullDateString(startTime)} - ${getTimeOnlyFromFullDateString(endTime)}`}
                  onClick={() =>
                    openScheduleFormWithFetchingDataModal({ initScheduleId: scheduleId })
                  }
                />
              ),
            ) || [];

          return [
            ...schedules,
            <Styled.AddScheduleButton
              size="normal"
              variant="reverse"
              onClick={() => {
                openScheduleFormModal({
                  startDateYear: aDay.getFullYear().toString(),
                  startDateMonth: (aDay.getMonth() + 1).toString(),
                  startDateDay: aDay.getDate().toString(),
                });
              }}
            >
              <PlusIcon /> <span>일정추가</span>
            </Styled.AddScheduleButton>,
          ];
        })}
      />
      <Styled.MonthlyCalendarHeader
        leftSideChildren={[
          <h3>
            {currentYear}년 {currentMonth}월
          </h3>,
        ]}
        rightSideChildren={[
          <Styled.MonthSwapButton size="normal" variant="primary-outline" onClick={moveToPrevMonth}>
            <LeftIcon />
          </Styled.MonthSwapButton>,
          <Styled.MonthSwapButton size="normal" variant="primary-outline" onClick={moveToNextMonth}>
            <RightIcon />
          </Styled.MonthSwapButton>,
        ]}
      />
      <MonthlyCalendar
        dayCells={daysOfCurrentMonthWithAdjacentWeeks.map((date, index) => {
          const dateString = getYYYYMMDDFromDate(date);
          const schedules =
            //@ts-ignore
            monthlyScheduleData?.[dateString]?.map(
              //@ts-ignore
              ({ title, status, scheduleType, startTime, endTime, scheduleId }) => (
                <ScheduleBar
                  key={`${title}-${endTime}-${scheduleType}`}
                  scheduleType={scheduleType}
                  status={status}
                  timeRange={`${getTimeOnlyFromFullDateString(startTime)}`}
                  onClick={() =>
                    openScheduleFormWithFetchingDataModal({ initScheduleId: scheduleId })
                  }
                />
              ),
            ) || [];
          return (
            <>
              <Styled.MonthDateCellHeader>
                <Styled.date>{date.getDate()}</Styled.date>
                {index % 7 === 6 && index && (
                  <Styled.WeekSelectButton
                    size="small"
                    variant={getWeekSelectButtonVariant(index)}
                    onClick={() => {
                      changeWeekNumber(Math.floor(index / 7));
                    }}
                  >
                    <ZoomInIcon />
                  </Styled.WeekSelectButton>
                )}
              </Styled.MonthDateCellHeader>
              {schedules}
            </>
          );
        })}
      />
    </Styled.Wrapper>
  );
};

export default ScheduleCalendar;
