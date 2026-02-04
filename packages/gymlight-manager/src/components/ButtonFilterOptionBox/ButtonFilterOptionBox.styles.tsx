import styled from '@emotion/styled';
import { styles } from '@/styles';

export const StatusFilterContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;

  & > button {
    max-width: 7rem;
  }
`;
