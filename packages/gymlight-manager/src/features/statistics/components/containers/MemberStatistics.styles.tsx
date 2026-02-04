import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

import { flexStyle } from '@/styles';

export const Wrapper = styled.div`
  ${flexStyle};
  gap: ${styles.space.level4}rem;
  margin-bottom: ${styles.space.level4}rem;
`;

export const Container = styled.div`
  ${flexStyle};
  justify-content: space-between;

  padding: ${styles.space.level3}rem ${styles.space.level4}rem;
  box-shadow: ${styles.shadow.light};
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => theme.background.light};

  span:last-child {
    margin-left: ${styles.space.level4}rem;
    font-size: ${styles.fontSize.large}rem;
    font-weight: ${styles.fontWeight.bold};
  }
`;
