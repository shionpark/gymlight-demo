import { styles } from '@/styles';
import styled from '@emotion/styled';

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    width: 8rem;
  }

  & > div {
    display: flex;
    algin-items: center;
    gap: ${styles.space.level1}rem;
  }
`;
