import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';
import { css } from '@emotion/react';

export const NumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${styles.space.level2}rem;
  width: 100%;
  height: 40rem;
`;

export const NumBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.h2}rem;
  color: ${({ theme }) => theme.font.reverse};
  background: transparent;
  border-radius: 2rem;
  user-select: none;

  &:active {
    cursor: pointer;

    ${({ theme }) => {
      return css`
        color: ${theme.font.dark};
        background: ${theme.background.light};
      `;
    }};
  }

  & > svg {
    width: ${styles.fontSize.h2}rem;
    height: auto;
  }

  ${styles.transition.button};
`;
