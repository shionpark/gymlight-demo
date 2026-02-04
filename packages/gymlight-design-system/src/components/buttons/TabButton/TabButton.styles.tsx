import { styles, theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTabButton = styled.button<{ active: boolean }>`
  font-size: ${styles.fontSize.normal}rem;
  font-weight: ${styles.fontWeight.bold};
  padding: ${styles.space.level4}rem ${styles.space.level7}rem;
  cursor: pointer;
  background-color: transparent;

  ${({ active, theme }) => {
    const fontColor = active ? `${theme.color.primary}` : `${theme.font.light}`;
    const hoverColor = active ? `${theme.color.primary}` : `${theme.font.dark}`;
    const borderBottom = active
      ? `${styles.border.level2}rem solid ${theme.color.primary}`
      : `${styles.border.level2}rem solid ${theme.background.light}`;
    return css`
      color: ${fontColor};
      border: none;
      border-bottom: ${borderBottom};
      &:hover {
        color: ${hoverColor};
        ${styles.transition.button};
      }
    `;
  }}
`;
