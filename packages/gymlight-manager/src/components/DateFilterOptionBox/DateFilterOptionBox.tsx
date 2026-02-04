import type { ChangeEventHandler } from 'react';

import { Input } from 'gymlight-design-system';

import { DateFilterContainer, DateRangeContainer } from './DateFilterOptionBox.styles';

export interface IDateFilterOptionBoxProps {
  dateFilterOptions: readonly string[];
  dateFilterStates: Record<string, { from: string; to: string }>;
  getDateStateChangeHandler: (
    dateStateName: any,
    boundary: 'from' | 'to',
  ) => ChangeEventHandler<HTMLInputElement>;
}

const DateFilterOptionBox: React.FC<IDateFilterOptionBoxProps> = ({
  dateFilterOptions,
  dateFilterStates,
  getDateStateChangeHandler,
}) => {
  return (
    <>
      {dateFilterOptions
        ? dateFilterOptions.map((dateFilter) => (
            <DateFilterContainer key={dateFilter}>
              <span>{dateFilter}</span>
              <DateRangeContainer>
                <Input
                  type="date"
                  value={dateFilterStates[dateFilter].from || ''}
                  onChange={getDateStateChangeHandler(dateFilter, 'from')}
                />
                <span>~</span>
                <Input
                  type="date"
                  value={dateFilterStates[dateFilter]?.to || ''}
                  onChange={getDateStateChangeHandler(dateFilter, 'to')}
                />
              </DateRangeContainer>
            </DateFilterContainer>
          ))
        : []}
    </>
  );
};

export default DateFilterOptionBox;
