import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, theme, Theme } from '@/styles';

export type InputSizeType = 'small' | 'normal';

export interface IInputContainerProps {
  width?: number | undefined;
  readOnly?: boolean;
}

export interface IInputStyleProps {
  error?: boolean;
  readOnly?: boolean;
  inputSize: InputSizeType;
}

const getBorderColor = (theme: Theme, defaultColor: string, error?: boolean) =>
  error ? theme.color.error : defaultColor;

const getInputSize = (size: InputSizeType) => {
  let height = 4;

  if (size === 'small') {
    height = 3.2;
  }

  return css`
    height: ${height}rem;
  `;
};

export const InputContainer = styled.div<IInputContainerProps>`
  ${({ readOnly }) =>
    readOnly &&
    css`
      background: ${theme.button.activeReverse};
    `};

  background: ${({ theme }) => theme.background.light};
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
  border: ${styles.border.level1}rem solid ${theme.border.default};
  border-radius: ${styles.borderRadius.normal}rem;
  padding: 0 1.2rem;

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > * > svg {
    width: 2rem;
    height: 2rem;
    color: ${theme.font.light};
  }

  &:focus {
    outline: ${styles.border.level1}rem solid
      ${({ theme }) => getBorderColor(theme, theme.border.default)};
  }

  position: relative;

  .icon-button {
    position: absolute;
    right: 0;

    & > svg {
      width: 2rem;
    }
  }
`;

export const StyledInput = styled.input<IInputStyleProps>`
  ${({ inputSize }) => getInputSize(inputSize)};

  width: 100%;
  padding: 0.6rem 1.2rem;

  display: block;
  outline: none;
  border: none;
  background: transparent;

  font-size: ${styles.fontSize.small}rem;

  &::placeholder {
    color: ${({ readOnly }) => (readOnly ? theme.font.light : theme.font.default)};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles.fontSize.small}rem;
`;
