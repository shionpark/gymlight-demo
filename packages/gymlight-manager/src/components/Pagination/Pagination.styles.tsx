import { styles } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;

  & > span {
    user-select: none;
    font-size: ${styles.fontSize.small}rem;
    color: ${({ theme }) => theme.font.default};
  }
`;

export const ArrowWrapper = styled.button<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) => (disabled ? theme.color.lightGray : theme.font.default)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: ${styles.space.level1}rem;

  background: transparent;

  & > svg {
    width: 2rem;
  }

  ${({ disabled, theme }) => {
    const fontColor = disabled ? `${theme.button.disabled}` : `${theme.font.default}`;
    // const polishedColor = disabled ? `${theme.color.primary}` : `${theme.font.default}`;
    return css`
      color: ${fontColor};

      &:not(:disabled):hover {
        color: ${darken(0.2, `${theme.font.dark}`)};
      }
    `;
  }};
`;
