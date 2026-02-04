import { flexStyle, styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${flexStyle};

  font-size: ${styles.fontSize.xsmall}rem;
  font-weight: ${styles.fontWeight.regular};
  color: ${({ theme }) => theme.font.light};
`;
