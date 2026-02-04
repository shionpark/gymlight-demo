export const validateDates = (startDate: Date, endDate: Date) => {
  if (!startDate || !endDate) return;

  return endDate <= startDate ? false : true;
};

export const calculateDiffDays = (startDate: Date, endDate: Date) => {
  if (!startDate || !endDate) return 0;

  const diff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

  return diff;
};

export function getMonthFromDay(days: number) {
  const months = days / 30;
  return Math.round(months);
}

export const padTwoDigitNumber = (target: string | number) => target.toString().padStart(2, '0');

export const getYearMonthDate = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {
    year,
    month,
    day,
  };
};

/**
 * Date 객체로부터 YYYY-MM-DD 형식의 문자열을 생성합니다.
 */
export const getYYYYMMDDFromDate = (date: Date = new Date()) => {
  const { year, month, day } = getYearMonthDate(date);
  const yyyymmdd = `${year}-${padTwoDigitNumber(month)}-${padTwoDigitNumber(day)}`;
  return yyyymmdd;
};

/**
 * 현재 날짜를 포맷된 문자열로 반환합니다.
 * @returns "MM월 DD일" 형식의 날짜 문자열
 */
export const getFormattedDate = (date: Date = new Date()): string => {
  const { year, month, day } = getYearMonthDate(date);
  return `${year}년 ${month}월 ${day}일`;
};

export const getNowDateAndTime = () => {
  const now = new Date();

  const { year, month: rawMonth, day: rawDay } = getYearMonthDate(now);

  const month = padTwoDigitNumber(rawMonth);
  const day = padTwoDigitNumber(rawDay);

  const hours = padTwoDigitNumber(now.getHours());
  const minutes = padTwoDigitNumber(now.getMinutes());
  const seconds = padTwoDigitNumber(now.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * 요일을 반환합니다.
 * @param date 날짜 객체 (기본값: 현재 날짜)
 * @returns "요일" 형식의 문자열 (e.g., "월요일")
 */
export const getDayOfWeek = (date: Date = new Date()): string => {
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = WEEKDAY[date.getDay()];
  return `${dayOfWeek}요일`;
};

/**
 * 현재 시간을 "HH:MM" 형식으로 반환합니다.
 * @param date 날짜 객체 (기본값: 현재 날짜)
 * @param includeSeconds 초 포함 여부 (기본값: false)
 * @returns "HH:MM" 또는 "HH:MM:SS" 형식의 시간 문자열
 */
export const getFormattedTime = (
  date: Date = new Date(),
  includeSeconds: boolean = false,
): string => {
  const hours = padTwoDigitNumber(date.getHours());
  const minutes = padTwoDigitNumber(date.getMinutes());

  const formattedTime = `${hours}:${minutes}`;

  if (!includeSeconds) {
    return formattedTime;
  }
  const seconds = padTwoDigitNumber(date.getSeconds());
  return formattedTime + `:${seconds}`;
};

/**
 * 현재 날짜와 시간을 모두 반환합니다.
 * @returns { date: string, dayOfWeek: string, time: string }
 */
export const getFullDateTime = (date: Date = new Date()) => {
  return {
    date: getFormattedDate(date),
    dayOfWeek: getDayOfWeek(date),
    time: getFormattedTime(date),
  };
};

/**
 * 입력받은 `startDate`로부터 지정한 `days`만큼 지난 날짜를 반환합니다.
 *
 * @param {Date} startDate - 기준이 되는 시작 날짜
 * @param {string | number} days - 더할 일 수 (숫자 또는 문자열 형태의 숫자 가능)
 * @returns {Date} - 시작 날짜로부터 `days`일이 지난 새로운 Date 객체
 *
 */
export const getDateAfterNDaysFromDate = (startDate: Date, days: string | number): Date => {
  const dateCopy = new Date(startDate);
  dateCopy.setDate(dateCopy.getDate() + Number(days));
  return dateCopy;
};

/**
 *
 *  주어진 Date 객체에서 연, 월, 일, 시, 분, HH:MM 을 개별 값으로 추출하여 제공해 줍니다.
 *
 * - DateSelect와 Input[type="time"]을 초기화 하는 값을 제공하는데에 사용합니다.
 *
 * @param {Date} date - 변환할 날짜 객체
 * @returns {Object} year, month, day, hour, minute, time (각각의 날짜 및 시간 값과 HH:MM 형식의 문자열)
 */
export const getEachDateTimePartsFromDate = (dateObject: Date) => {
  const dateFormatter = new Intl.DateTimeFormat('ko', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dateParts = dateFormatter.formatToParts(dateObject);

  const [year, month, day, hour, minute] = ['year', 'month', 'day', 'hour', 'minute'].map(
    (aType) => dateParts.find((part) => part.type === aType)?.value || '',
  );

  const time = `${hour}:${minute}`;

  return { year, month, day, hour, minute, time };
};

/**
 *
 * 주어진 날짜 string에서 연, 월, 일, 시, 분, HH:MM 을 개별 값으로 추출하여 제공해 줍니다.
 *
 * 서버로부터 받은 YYYY-MM-DD HH:MM:SS형식의 데이터를 변환하는데 사용합니다.
 *
 * @param {Date} date - 변환할 날짜 객체
 * @returns {Object} year, month, day, hour, minute, time (각각의 날짜 및 시간 값과 HH:MM 형식의 문자열)
 */
export const getEachDateTimeValuesFromString = (datetimeStr: string) => {
  const [datePart, timePart] = datetimeStr.split(' ');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  const time = `${hour}:${minute}`;

  return {
    year,
    month: `${+month}`,
    day: `${+day}`,
    hour: `${+hour}`,
    minute: `${+minute}`,
    time,
  };
};
