import { styles, theme, Theme } from '@/styles';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { darken, lighten } from 'polished';

type ButtonVariantsType = 'normal' | 'primary' | 'icon-only' | 'active';

export type ButtonSizeType = 'xsmall' | 'small' | 'normal' | 'large';

export interface IStyledIconButtonProps {
  variant?: ButtonVariantsType;
  size?: ButtonSizeType;
}

interface IButtonStyle {
  [x: string]: {
    normalStyle: SerializedStyles;
    activeStyle?: SerializedStyles;
    hoverStyle?: SerializedStyles;
    focusStyle?: SerializedStyles;
  };
}

const setButtonStyle = (theme: Theme, variant: ButtonVariantsType) => {
  const buttonStyle: IButtonStyle = {
    normal: {
      normalStyle: css`
        background: ${theme.button.default};
        color: ${theme.font.default};
        border-color: ${theme.border.default};
      `,
      hoverStyle: css`
        background: ${darken(0.05, theme.button.default)};
        color: ${theme.font.light};
      `,
      focusStyle: css`
        background: ${theme.color.lightGray};
        color: ${theme.font.reverse};
        outline: 1px solid ${lighten(0.08, theme.color.lightGray)};
      `,
    },
    primary: {
      normalStyle: css`
        background: ${theme.color.primary};
        color: ${theme.font.reverse};
        border-color: ${theme.border.default};
      `,
      hoverStyle: css`
        background: ${darken(0.05, theme.color.primary)};
      `,
      focusStyle: css`
        background: ${darken(0.08, theme.color.primary)};
        color: ${theme.font.reverse};
        outline: 1px solid ${darken(0.08, theme.color.primary)};
      `,
    },
    ['icon-only']: {
      normalStyle: css`
        background: transparent;
        color: ${theme.font.default};
        border-color: transparent;
      `,
      hoverStyle: css`
        background: ${lighten(0.02, theme.background.default)};
      `,
      focusStyle: css`
        background: ${theme.background.default};
        outline: 1px solid ${darken(0.08, theme.background.default)};
      `,
    },
    active: {
      normalStyle: css`
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${lighten(0.08, theme.color.lightGray)};
        border-color: ${theme.border.default};
      `,
      hoverStyle: css`
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${lighten(0.08, theme.color.lightGray)};
      `,
      focusStyle: css`
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${lighten(0.08, theme.color.lightGray)};
      `,
    },
  };

  const currentStyle = buttonStyle[variant];

  if (!currentStyle) {
    throw new Error(`'${variant}' 변수의 버튼 스타일이 정의되지 않았습니다.`);
  }

  const activeStyle = css`
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:focus {
      ${currentStyle.focusStyle}
    }
  `;

  return css`
    border-style: solid;
    border-color: transparent;

    ${currentStyle.normalStyle}

    ${activeStyle}
  `;
};

const setButtonSize = (size: ButtonSizeType) => {
  const buttonSize = {
    large: {
      circleSize: 4.8,
      iconSize: 0.12,
    },
    normal: {
      circleSize: 4,
      iconSize: 0.1,
    },
    small: {
      circleSize: 3.2,
      iconSize: 0.1,
    },
    xsmall: {
      circleSize: 2.4,
      iconSize: 0.1,
    },
  };

  const currentSize = buttonSize[size];

  return css`
    height: ${currentSize.circleSize}rem;
    width: ${currentSize.circleSize}rem;
    & > svg {
      stroke-width: ${currentSize.iconSize}rem;
    }
  `;
};

export const StyledIconButton = styled.button<IStyledIconButtonProps>`
  ${({ theme, variant = 'normal' }) => setButtonStyle(theme, variant)}
  ${({ size = 'normal' }) => setButtonSize(size)}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  outline: 0 solid ${theme.color.white};

  flex-shrink: 0;

  ${styles.transition.button}
`;
