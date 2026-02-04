import { styles, theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
`;

interface IPaginationProps {
  currentPage?: number;
  totalPages?: number;
  variant?: 'normal' | 'active';
}

export const PageButton = styled.button<IPaginationProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  border-radius: 1rem;
  border: none;
  background: transparent;

  ${({ variant }) => {
    const backgroundColor = variant === 'active' ? `${theme.color.primary}` : `transparent`;
    const fontColor = variant === 'active' ? `${theme.font.reverse}` : `${theme.font.default}`;
    const polishedColor = variant === 'active' ? `${theme.color.primary}` : `${theme.button.hover}`;
    return css`
      background-color: ${backgroundColor};
      color: ${fontColor};

      &:not(:disabled):hover {
        background: ${darken(0.08, `${polishedColor}`)};
      }
    `;
  }};

  font-weight: ${styles.fontWeight.bold};
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: auto;
  }

  ${styles.transition.button}
`;

export const Ellipsis = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 2rem;
  }
`;
