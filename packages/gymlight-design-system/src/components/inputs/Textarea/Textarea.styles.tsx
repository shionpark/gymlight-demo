import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles } from '@/styles';
import { darken } from 'polished';

export interface ITextareaContainerProps {
  width?: number;
}

export const TextareaContainer = styled.div<ITextareaContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
`;

export type TextareaSizeType = number | 'small' | 'normal';

export interface ITextareaStylesProps {
  size: TextareaSizeType;
}

const getTextareaSize = (size: TextareaSizeType) => {
  let height: number;
  if (typeof size === 'number') {
    height = size;
  } else if (size === 'small') {
    height = 6;
  } else {
    height = 15;
  }
  return css`
    height: ${height}rem;
  `;
};

export const StyledTextarea = styled.textarea<ITextareaStylesProps>`
  font-size: ${styles.fontSize.small}rem;
  border: 1px solid ${({ theme }) => theme.border.default};
  outline-color: ${({ theme }) => darken(0.08, theme.border.default)};
  padding: ${styles.space.level4}rem;

  ${({ size }) => getTextareaSize(size)}

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.button.activeReverse};
    color: ${({ theme }) => theme.font.dark};

    &::placeholder {
      color: ${({ theme }) => theme.color.lightGray};
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles.fontSize.small}rem;
`;

export const TextCounter = styled.div`
  text-align: right;
  font-size: ${styles.fontSize.xsmall};
  color: ${({ theme }) => theme.font.light};
`;
