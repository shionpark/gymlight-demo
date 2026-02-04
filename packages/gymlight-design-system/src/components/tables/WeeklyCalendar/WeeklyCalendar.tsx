import type { ReactNode } from 'react';

import * as Styled from './WeeklyCalendar.styles';

interface IWeeklyCalendarProps {
  dateCells: ReactNode[];
  dayCells: ReactNode[][];
}

const WeeklyCalendar = ({ dateCells, dayCells }: IWeeklyCalendarProps) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Styled.CalendarTable>
      <thead>
        <tr>
          {dateCells.map((date, index) => (
            <th key={`th-${index}`}>
              <Styled.CellComponentWrapper>
                <div>
                  {weekDays[index]} / {date}{' '}
                </div>
              </Styled.CellComponentWrapper>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {dayCells.map((schedules, index) => (
            <td>
              <Styled.DayCellWrapper key={index}>
                {schedules.map((schedule) => (
                  <>{schedule}</>
                ))}
              </Styled.DayCellWrapper>
            </td>
          ))}
        </tr>
      </tbody>
    </Styled.CalendarTable>
  );
};
export default WeeklyCalendar;
