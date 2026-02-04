import { styles } from 'gymlight-design-system';

import styled from '@emotion/styled';
import { flexCenterStyle } from '@/styles';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div<{ isPositive: boolean }>`
  ${flexCenterStyle};
  gap: 0.2rem;

  font-size: ${styles.fontSize.small}rem;
  font-weight: ${styles.fontWeight.bold};
  color: ${({ isPositive, theme }) =>
    isPositive ? darken(0.34, theme.memberStatus.active) : lighten(0.2, theme.color.error)};

  svg {
    width: 1.8rem;
  }
`;
