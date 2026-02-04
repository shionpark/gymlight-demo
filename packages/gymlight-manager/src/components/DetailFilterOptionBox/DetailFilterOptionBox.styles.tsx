import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1.6rem;
  border: ${styles.border.level2}rem solid ${({ theme }) => theme.border.default};
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.span`
  font-size: ${styles.fontSize.h5}rem;
  font-weight: bold;
`;

export const StatusFilterContainer = styled.div`
  display: flex;
  gap: ${styles.space.level2}rem;
  align-items: center;
  & > button {
    width: 7rem;
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.border.dark};
  }
`;

export const DateFilterContainer = styled.div`
  display: flex;
  gap: ${styles.space.level2}rem;
  align-items: center;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
`;
