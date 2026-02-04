import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 6rem;
  background: ${({ theme }) => theme.background.light};
  border-bottom: 1px solid ${({ theme }) => theme.border.dark};

  padding: 0 2rem;
`;

export const MainSection = styled.div`
  padding: ${styles.space.level4}rem;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  flex-shrink: 0;
  padding-bottom: ${styles.space.level1}rem;

  & > select {
    min-width: 12rem;
  }
`;
