import styled from '@emotion/styled';
import { styles } from '@/styles';

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
  height: 6rem;
  padding: 0 2rem;

  background: ${({ theme }) => theme.background.light};
  border-bottom: 1px solid ${({ theme }) => theme.border.dark};
`;

export const LeftSection = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: end;

  gap: 0;
`;

export const RightSection = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: end;

  gap: ${styles.space.level2}rem;
  padding-bottom: ${styles.space.level1}rem;

  & > * {
    width: 100%;
  }
  & > select {
    min-width: 12rem;
  }
`;

export const MainSection = styled.div`
  padding: ${styles.space.level4}rem;
  background-color: ${({ theme }) => theme.background.default};
`;
