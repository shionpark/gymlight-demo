import styled from '@emotion/styled';
import { darken } from 'polished';

import { flexCenterStyle, flexColumnStyle, flexStyle, styles } from '@/styles';

export const Wrapper = styled.div`
  ${flexColumnStyle};
  gap: ${styles.space.level2}rem;
`;

export const ButtonsWrapper = styled.div`
  ${flexStyle};
  gap: ${styles.space.level1}rem;
`;

export const MoreButton = styled.button`
  ${flexCenterStyle};

  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => theme.background.default};

  &:hover {
    background: ${({ theme }) => darken(0.04, theme.background.default)};
    ${styles.transition.button}
  }

  svg {
    width: 2rem;
  }
`;
