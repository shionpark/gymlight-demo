import type { ChangeEventHandler, MouseEventHandler } from 'react';

import { SquareButton } from 'gymlight-design-system';

import {
  Container,
  DateFilterContainer,
  DateRangeContainer,
  StatusFilterContainer,
  Title,
} from './DetailFilterOptionBox.styles';

interface IDetailFilterOptionBoxProps {
  statusName: string;
  statusFilterOptions: string[];
  dateFilterOptions: string[];
  activeStatusFilterOptions: string[];
  getDateStateChangeHandler: (
    dateStateName: any,
    boundary: 'from' | 'to',
  ) => ChangeEventHandler<HTMLInputElement>;
  getStatusStateToggleHandler: (statusStateName: any) => MouseEventHandler<HTMLButtonElement>;
  dateFilterStates: Record<string, { from: string; to: string }>;
}

const DetailFilterOptionBox: React.FC<IDetailFilterOptionBoxProps> = ({
  statusName,
  statusFilterOptions,
  dateFilterOptions,
  activeStatusFilterOptions,
  dateFilterStates,
  getDateStateChangeHandler,
  getStatusStateToggleHandler,
}) => {
  return (
    <Container>
      <Title>세부 필터링</Title>

      <StatusFilterContainer>
        <span>{statusName}</span>
        {statusFilterOptions.map((status) => (
          <SquareButton
            size="xsmall"
            variant="reverse"
            key={status}
            active={activeStatusFilterOptions.includes(status)}
            onClick={getStatusStateToggleHandler(status)}
          >
            {status}
          </SquareButton>
        ))}
      </StatusFilterContainer>

      {dateFilterOptions.map((dateFilter) => (
        <DateFilterContainer key={dateFilter}>
          <span>{dateFilter}</span>
          <DateRangeContainer>
            <input
              type="date"
              value={dateFilterStates[dateFilter].from || ''}
              onChange={getDateStateChangeHandler(dateFilter, 'from')}
            />
            <span>~</span>
            <input
              type="date"
              value={dateFilterStates[dateFilter]?.to || ''}
              onChange={getDateStateChangeHandler(dateFilter, 'to')}
            />
          </DateRangeContainer>
        </DateFilterContainer>
      ))}
    </Container>
  );
};

export default DetailFilterOptionBox;
