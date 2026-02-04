import type { ReactNode } from 'react';
interface IWeeklyCalendarProps {
    dateCells: ReactNode[];
    dayCells: ReactNode[][];
}
declare const WeeklyCalendar: ({ dateCells, dayCells }: IWeeklyCalendarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default WeeklyCalendar;
