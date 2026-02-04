import type { FieldErrorsType, FieldRegisterType } from '@/libs';

import { Select } from '../Select';

import { DateSelectContainer, ErrorMessage } from './DateSelect.styles';

interface IDateSelectProps {
  name: string;

  register?: FieldRegisterType;
  errors: FieldErrorsType;

  defaultYearValue?: string;
  defaultMonthValue?: string;
  defaultDayValue?: string;

  yearValue?: string; // 리팩토링된 컴포넌트에 필요한 props 추가
  monthValue?: string;
  dayValue?: string;

  onYearChange?: (value: string) => void;
  onMonthChange?: (value: string) => void;
  onDayChange?: (value: string) => void;

  yearRange?: number[];
  monthRange?: number[];
  daysRange?: number[];

  disabled?: boolean;
}

const DateSelect = ({
  name,
  register,
  errors,
  defaultDayValue,
  defaultMonthValue,
  defaultYearValue,
  yearValue,
  monthValue,
  dayValue,
  onYearChange,
  onMonthChange,
  onDayChange,
  yearRange,
  monthRange,
  daysRange,
  disabled,
}: IDateSelectProps) => {
  const years = yearRange
    ? yearRange
    : Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
  const months = monthRange ? monthRange : Array.from({ length: 12 }, (_, i) => i + 1);
  const days = daysRange ? daysRange : Array.from({ length: 31 }, (_, i) => i + 1);

  if (register) {
    return (
      <DateSelectContainer>
        <Select
          {...register({ name: `${name}Year` })}
          defaultValue={defaultYearValue}
          disabled={disabled}
        >
          <option value="">년도</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Select
          {...register({ name: `${name}Month` })}
          defaultValue={defaultMonthValue}
          disabled={disabled}
        >
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          {...register({ name: `${name}Day` })}
          defaultValue={defaultDayValue}
          disabled={disabled}
        >
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Select>
        <ErrorMessage>
          {errors[`${name}Year`] || errors[`${name}Month`] || errors[`${name}Day`]
            ? '생년월일을 정확히 입력해주세요.'
            : ''}
        </ErrorMessage>
      </DateSelectContainer>
    );
  } else {
    return (
      <DateSelectContainer>
        <Select
          value={yearValue}
          onChange={(e) => onYearChange?.(e.target.value)}
          disabled={disabled}
        >
          <option value="">년도</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Select
          value={monthValue}
          onChange={(e) => onMonthChange?.(e.target.value)}
          disabled={disabled}
        >
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          value={dayValue}
          onChange={(e) => onDayChange?.(e.target.value)}
          disabled={disabled}
        >
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Select>
        <ErrorMessage>
          {errors.year || errors.month || errors.day ? '선택된 일정이 유효하지 않습니다.' : ''}
        </ErrorMessage>
      </DateSelectContainer>
    );
  }
};

export default DateSelect;
