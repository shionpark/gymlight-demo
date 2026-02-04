import { styles } from 'gymlight-design-system';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ width?: number }>`
  padding: ${styles.space.level3}rem;
  box-shadow: ${styles.shadow.light};

  width: ${({ width }) => width || 46}rem;
  background: ${({ theme }) => theme.background.light};
`;
