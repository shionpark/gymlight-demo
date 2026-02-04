import { flexStyle, styles } from '@/styles';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  ${flexStyle};
  width: 40rem;
  gap: ${styles.space.level6}rem;

  select {
    width: 10rem;
    border-radius: ${styles.borderRadius.normal}rem;
  }
`;

export const ScrollWrapper = styled.div`
  height: 23rem;
  width: 90rem;

  overflow-x: scroll;
  overflow-y: hidden;
`;
