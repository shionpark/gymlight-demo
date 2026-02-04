import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;
  justify-content: flex-start;

  .label {
    font-size: ${styles.fontSize.large}rem;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;

  & > div {
    width: 100%;
    background: white;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;

    & .label:first-child {
      font-size: ${styles.fontSize.large}rem;
      font-weight: bold;
    }
  }

  .content {
    margin-top: 1rem;
  }
`;

export const WeeklyPtGoalProgressContainer = styled.div`
  .content {
    margin-top: 1.5rem;
  }
`;

export const CurrentWeekProgressContainer = styled.div`
  .content {
    padding: 0rem 5%;
    font-weight: normal;
  }
`;
