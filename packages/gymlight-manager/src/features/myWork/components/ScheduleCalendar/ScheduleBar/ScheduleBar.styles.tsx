import { ScheduleType } from '@/types';
import styled from '@emotion/styled';
import { StatusButton, styles } from 'gymlight-design-system';

export const Wrapper = styled.button<{ scheduleType: ScheduleType }>`
  background-color: ${({ theme, scheduleType }) => theme.tableCells[scheduleType]};
  height: 3.6rem;
  width: 96%;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  cursor: pointer;
  transition:
    background-color 0.1s ease-in-out,
    border 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    border: outset 0.2rem;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

export const TimeContainer = styled.p`
  display: flex;

  justify-content: flex-start;
  gap: 0.6rem;
  font-size: ${styles.fontSize.small}rem;
  white-space: nowrap;
`;

export const StatusFlag = styled(StatusButton)``;
