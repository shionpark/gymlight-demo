import styled from '@emotion/styled';
import { flexColumnStyle, styles } from '@/styles';

export const Wrapper = styled.div`
  padding: ${styles.space.level3}rem;
`;

export const Section = styled.div`
  ${flexColumnStyle};
  gap: ${styles.space.level3}rem;
`;
