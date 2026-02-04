import { formatYYYYMMDD } from '@/utils';
import { useState } from 'react';

interface IUseDateTimeStateArgs {
  initData?: {
    initYear?: string;
    initMonth?: string;
    initDay?: string;
  };
}

/**DateSelect Component를 state기반으로 사용하기 위한 커스텀 훅 */
export const useDateSelectState = (args?: IUseDateTimeStateArgs) => {
  const dateObj = new Date();
  const initYear = dateObj.getFullYear().toString();
  const initMonth = (dateObj.getMonth() + 1).toString();
  const initDay = dateObj.getDate().toString();

  const [year, setYear] = useState(args?.initData?.initYear || initYear);
  const [month, setMonth] = useState(args?.initData?.initMonth || initMonth);
  const [day, setDay] = useState(args?.initData?.initDay || initDay);

  /** Request에 제출할 YYYYMMDD형식의 Datestring */
  const dateString = formatYYYYMMDD(year, month, day);

  /** DateSelect의 state관련 props */
  const selectStateControlProps = {
    yearValue: year,
    onYearChange: setYear,
    dayValue: day,
    onDayChange: setDay,
    monthValue: month,
    onMonthChange: setMonth,
    errors: {},
  };

  return {
    year,
    month,
    day,
    setYear,
    setMonth,
    setDay,
    selectStateControlProps,

    dateString,
  };
};
