import styled from '@emotion/styled';

import { ScrollableTableCell, styles, SquareButton, DualSideBar } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 3rem;
`;

export const WeeklyCalendarWrapper = styled.div`
  height: 10rem;
`;

export const MonthDateWrapper = styled(ScrollableTableCell)`
  gap: 0.5rem;
`;

interface MonthDateScheduleStyleProps {
  status?: '완료' | '예정';
}

export const MonthDateSchedule = styled.div<MonthDateScheduleStyleProps>`
  display: grid;
  grid-template-columns: 50% 10% 40%;
  font-size: ${styles.fontSize.xsmall}rem;

  align-items: center;
  height: 2.5rem;
  width: 18rem;
  margin-bottom: 0.3rem;

  background-color: ${({ status, theme }) =>
    status
      ? status === '완료'
        ? theme.WorkStatusColor.done
        : theme.WorkStatusColor.soon
      : theme.WorkStatusColor.soon};
`;

export const AddScheduleButton = styled(SquareButton)`
  outline-style: dashed;
  outline-width: 0.1rem;
  width: 14rem;
  height: 6rem;
  & > svg {
    width: 3rem;
  }
  gap: 1rem;
`;

export const MonthSwapButton = styled(SquareButton)`
  width: 5rem;
  height: 4rem;
`;

export const MonthDateCellHeader = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 3.5rem;
`;

export const WeekSelectButton = styled(SquareButton)`
  position: absolute;
  right: 1.5rem;

  width: 3rem;
  height: 3rem;
  & svg: {
    height: 2rem;
  }
`;

export const date = styled.span`
  text-align: center;
`;
export const MonthlyCalendarHeader = styled(DualSideBar)`
  padding: 0rem 2rem;
  .right-section {
    gap: 2rem;
  }
`;

export const ScheduleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
