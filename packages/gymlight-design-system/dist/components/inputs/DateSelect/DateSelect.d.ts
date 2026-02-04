import type { FieldErrorsType, FieldRegisterType } from '../../../libs';
interface IDateSelectProps {
    name: string;
    register?: FieldRegisterType;
    errors: FieldErrorsType;
    defaultYearValue?: string;
    defaultMonthValue?: string;
    defaultDayValue?: string;
    yearValue?: string;
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
declare const DateSelect: ({ name, register, errors, defaultDayValue, defaultMonthValue, defaultYearValue, yearValue, monthValue, dayValue, onYearChange, onMonthChange, onDayChange, yearRange, monthRange, daysRange, disabled, }: IDateSelectProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DateSelect;
