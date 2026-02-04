import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { darken } from 'polished';

import { styles, Theme } from '@/styles';

// 버튼 스타일링 Types
export type ButtonVariantsType =
  | 'normal'
  | 'reverse'
  | 'outline'
  | 'primary'
  | 'primary-outline'
  | 'error-outline';

export type ButtonSizeType = 'xsmall' | 'small' | 'normal';

export interface ISquareStyledButtonProps {
  wide?: boolean;
  variant?: ButtonVariantsType;
  disabled?: boolean | undefined;
  active?: boolean | undefined;
  size?: ButtonSizeType;
}

interface IButtonStyle {
  [x: string]: {
    normalStyle: SerializedStyles;
    activeStyle?: SerializedStyles;
    hoverStyle?: SerializedStyles;
  };
}

const setButtonStyle = (theme: Theme, variant: ButtonVariantsType, disabled = false) => {
  const buttonStyle: IButtonStyle = {
    normal: {
      normalStyle: css`
        background: ${theme.font.default};
        color: ${theme.font.reverse};
        border-color: ${theme.font.default};
      `,
      activeStyle: css`
        background: ${theme.font.default};
      `,
      hoverStyle: css`
        background: ${theme.button.active};
        border-color: ${theme.button.active};
      `,
    },
    reverse: {
      normalStyle: css`
        background: ${theme.font.reverse};
        color: ${theme.font.default};
        border-color: ${theme.font.reverse};
      `,
      activeStyle: css`
        background: ${theme.font.reverse};
      `,
      hoverStyle: css`
        background: ${theme.button.activeReverse};
        border-color: ${theme.button.activeReverse};
      `,
    },
    outline: {
      normalStyle: css`
        background: ${theme.font.reverse};
        color: ${theme.font.default};
        border-color: ${theme.border.default};
      `,
      activeStyle: css`
        background: ${theme.font.reverse};
        border-color: ${theme.border.default};
      `,
      hoverStyle: css`
        background: ${theme.button.activeReverse};
      `,
    },
    ['primary']: {
      normalStyle: css`
        background: ${theme.color.primary};
        color: ${theme.font.reverse};
        border-color: ${theme.color.primary};
      `,
      activeStyle: css`
        background: ${darken(0.08, theme.color.primary)};
        color: ${theme.color.white};
        border-color: ${darken(0.08, theme.color.primary)};
      `,
      hoverStyle: css`
        background: ${theme.color.primary};
        color: ${theme.color.white};
      `,
    },
    ['primary-outline']: {
      normalStyle: css`
        background: ${theme.color.white};
        color: ${theme.color.primary};
        border-color: ${theme.color.primary};
      `,
      activeStyle: css`
        background: ${darken(0.08, theme.color.primary)};
        color: ${theme.color.white};
        border-color: ${darken(0.08, theme.color.primary)};
      `,
      hoverStyle: css`
        background: ${theme.color.primary};
        color: ${theme.color.white};
      `,
    },
    ['error-outline']: {
      normalStyle: css`
        background: ${theme.color.white};
        color: ${theme.color.error};
        border-color: ${theme.color.error};

        outline: ${theme.color.error};
      `,
      activeStyle: css`
        background: ${darken(0.05, theme.color.error)};
        color: ${theme.color.white};
        border-color: ${darken(0.05, theme.color.error)};
      `,
      hoverStyle: css`
        background: ${theme.color.error};
        color: ${theme.color.white};
        border-color: ${theme.color.error};
      `,
    },
    disabled: {
      normalStyle: css`
        background: ${theme.button.disabled};
        color: ${theme.color.white};
        border-color: ${theme.button.disabled};
      `,
    },
  };

  const currentStyle = disabled ? buttonStyle['disabled'] : buttonStyle[variant];

  if (!currentStyle) {
    throw new Error(`'${variant}' 변수의 버튼 스타일이 정의되지 않았습니다.`);
  }

  const activeStyle = css`
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:active {
      ${currentStyle.activeStyle}
    }
  `;

  return css`
    border-style: solid;
    ${currentStyle.normalStyle}

    ${!disabled && activeStyle}
  `;
};

const setButtonSize = (size: ButtonSizeType) => {
  const buttonSize = {
    normal: {
      height: 4.8,
      fontSize: styles.fontSize.normal,
      borderWidth: styles.border.level2,
    },
    small: {
      height: 4,
      fontSize: styles.fontSize.small,
      borderWidth: styles.border.level2,
    },
    xsmall: {
      height: 2.8,
      fontSize: styles.fontSize.xsmall,
      borderWidth: styles.border.level1,
    },
  };

  const currentSize = buttonSize[size];

  return css`
    height: ${currentSize.height}rem;
    font-size: ${currentSize.fontSize}rem;
    border-width: ${currentSize.borderWidth}rem;
  `;
};

export const setButtonActiveStyle = (theme: Theme, variant: ButtonVariantsType) => {
  if (variant === 'normal') {
    return setButtonStyle(theme, 'outline');
  }
  return setButtonStyle(theme, 'normal');
};

export const StyledButton = styled.button<ISquareStyledButtonProps>`
  ${({ theme, variant, disabled, active }) =>
    active
      ? setButtonActiveStyle(theme, variant || 'normal')
      : setButtonStyle(theme, variant || 'normal', disabled)}

  ${({ size }) => setButtonSize(size || 'normal')}
  ${({ wide }) => wide && 'width: 100%'};

  & > span {
    display: flex;
    align-items: center;

    & > svg {
      width: 2rem;
      height: 2rem;
      margin-right: ${styles.space.level1}rem;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${styles.borderRadius.normal}rem;

  text-align: center;

  ${styles.transition.button}
`;
