import type { ReactNode } from 'react';
import * as Styled from './MonthlyCalendar.styles';

interface IMonthlyCalendarProps {
  dayCells: ReactNode[];
}

const MonthlyCalendar = ({ dayCells }: IMonthlyCalendarProps) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const daysPerWeek = dayCells.reduce((acc: ReactNode[][], _, i: number) => {
    if (i % 7 === 0) {
      acc.push(dayCells.slice(i, i + 7));
    }
    return acc;
  }, []);

  return (
    <Styled.CalendarTable>
      <thead>
        <tr>
          {weekDays.map((day, index) => (
            <th key={`th-${index}`}>
              <Styled.CellComponentWrapper>{day}</Styled.CellComponentWrapper>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {daysPerWeek.map((week, weekIndex) => (
          <tr key={`tr-${weekIndex}`}>
            {week.map((dayCell, dayCellIndex) => (
              <td key={`tr-${weekIndex}-${dayCellIndex}`}>
                <Styled.CellComponentWrapper>{dayCell}</Styled.CellComponentWrapper>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Styled.CalendarTable>
  );
};
export default MonthlyCalendar;
