import styled from '@emotion/styled';
import { styles } from '@/styles';

export const DateFilterContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
`;
