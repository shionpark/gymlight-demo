import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Form = styled.form`
  & > button {
    margin-top: ${styles.space.level2}rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
`;
