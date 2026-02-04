import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';

export type InputSizeType = 'small' | 'normal';
export type InputBorderType = 'solid' | 'bottom' | 'none';

export interface IInputContainerProps {
  width?: number | undefined;
}

export interface IInputStyleProps {
  error?: boolean;
  readOnly?: boolean;
  inputSize?: InputSizeType;
  borderStyle?: InputBorderType;
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

/** Input의 border 스타일을 적용하는 함수 */
const getBorderStyle = (
  borderStyle: InputBorderType,
  theme: Theme,
  error?: boolean,
  readOnly?: boolean,
) => {
  const normalStyleMap: Record<InputBorderType, SerializedStyles> = {
    solid: css`
      border: ${styles.border.level1}rem solid ${getBorderColor(theme, theme.border.default, error)};
    `,
    bottom: css`
      border: none;
      border-bottom: ${styles.border.level1}rem solid
        ${getBorderColor(theme, theme.border.default, error)};
    `,
    none: css`
      border: none;
    `,
  };

  const activeStyleMap: Record<InputBorderType, SerializedStyles> = {
    solid: css`
      outline: ${styles.border.level1}rem solid ${getBorderColor(theme, theme.border.dark, error)};
    `,
    bottom: css`
      border-bottom: ${styles.border.level1}rem solid
        ${getBorderColor(theme, theme.border.dark, error)};
    `,
    none: css`
      border: none;
    `,
  };

  const currentStyle = normalStyleMap[borderStyle];
  const activeStyle = activeStyleMap[borderStyle];

  if (!currentStyle || !activeStyle) {
    throw new Error(`'${borderStyle}' 변수의 버튼 스타일이 정의되지 않았습니다.`);
  }

  return css`
    outline: none;
    ${currentStyle};

    ${!readOnly &&
    css`
      &:focus {
        ${activeStyle};
      }
    `}
  `;
};

export const InputContainer = styled.div<IInputContainerProps>`
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
`;

export const StyledInput = styled.input<IInputStyleProps>`
  width: 100%;
  padding: 0.6rem 1.2rem;
  display: block;
  font-size: ${styles.fontSize.small}rem;

  ${({ readOnly, theme }) =>
    readOnly
      ? `
      cursor: not-allowed;
    background: ${theme.button.activeReverse}; 
    color: ${theme.font.dark};
    
    &::placeholder {
      color: ${theme.color.lightGray};
    }`
      : `
      &::placeholder {
      color: ${theme.font.light};
    }`};

  ${({ inputSize }) => getInputSize(inputSize || 'normal')};
  ${({ borderStyle, theme, error, readOnly }) =>
    getBorderStyle(borderStyle || 'solid', theme, error, readOnly)}
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles.fontSize.small}rem;
`;
