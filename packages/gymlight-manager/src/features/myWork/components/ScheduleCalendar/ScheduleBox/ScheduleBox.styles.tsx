import { styles } from '@/styles';
import { ScheduleType } from '@/types';
import styled from '@emotion/styled';

export const Wrapper = styled.button<{ scheduleType: ScheduleType }>`
  background-color: ${({ theme, scheduleType }) => theme.tableCells[scheduleType]};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  border: solid white 0.2rem;
  border-radius: 0.6rem;
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

export const FlagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem;
  gap: 0.15rem;
`;

export const Title = styled.div`
  width: 100%;
  height: 4rem;
  font-size: ${styles.fontSize.normal}rem;
  overflow: hidden;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: ${styles.fontSize.normal}rem;
`;
