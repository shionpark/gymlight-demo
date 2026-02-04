"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = exports.setButtonActiveStyle = void 0;
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
const styles_1 = require("../../../styles");
const setButtonStyle = (theme, variant, disabled = false) => {
    const buttonStyle = {
        normal: {
            normalStyle: (0, react_1.css) `
        background: ${theme.font.default};
        color: ${theme.font.reverse};
        border-color: ${theme.font.default};
      `,
            activeStyle: (0, react_1.css) `
        background: ${theme.font.default};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.button.active};
        border-color: ${theme.button.active};
      `,
        },
        reverse: {
            normalStyle: (0, react_1.css) `
        background: ${theme.font.reverse};
        color: ${theme.font.default};
        border-color: ${theme.font.reverse};
      `,
            activeStyle: (0, react_1.css) `
        background: ${theme.font.reverse};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.button.activeReverse};
        border-color: ${theme.button.activeReverse};
      `,
        },
        outline: {
            normalStyle: (0, react_1.css) `
        background: ${theme.font.reverse};
        color: ${theme.font.default};
        border-color: ${theme.border.default};
      `,
            activeStyle: (0, react_1.css) `
        background: ${theme.font.reverse};
        border-color: ${theme.border.default};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.button.activeReverse};
      `,
        },
        ['primary']: {
            normalStyle: (0, react_1.css) `
        background: ${theme.color.primary};
        color: ${theme.font.reverse};
        border-color: ${theme.color.primary};
      `,
            activeStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.08, theme.color.primary)};
        color: ${theme.color.white};
        border-color: ${(0, polished_1.darken)(0.08, theme.color.primary)};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.color.primary};
        color: ${theme.color.white};
      `,
        },
        ['primary-outline']: {
            normalStyle: (0, react_1.css) `
        background: ${theme.color.white};
        color: ${theme.color.primary};
        border-color: ${theme.color.primary};
      `,
            activeStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.08, theme.color.primary)};
        color: ${theme.color.white};
        border-color: ${(0, polished_1.darken)(0.08, theme.color.primary)};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.color.primary};
        color: ${theme.color.white};
      `,
        },
        ['error-outline']: {
            normalStyle: (0, react_1.css) `
        background: ${theme.color.white};
        color: ${theme.color.error};
        border-color: ${theme.color.error};

        outline: ${theme.color.error};
      `,
            activeStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.05, theme.color.error)};
        color: ${theme.color.white};
        border-color: ${(0, polished_1.darken)(0.05, theme.color.error)};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.color.error};
        color: ${theme.color.white};
        border-color: ${theme.color.error};
      `,
        },
        disabled: {
            normalStyle: (0, react_1.css) `
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
    const activeStyle = (0, react_1.css) `
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:active {
      ${currentStyle.activeStyle}
    }
  `;
    return (0, react_1.css) `
    border-style: solid;
    ${currentStyle.normalStyle}

    ${!disabled && activeStyle}
  `;
};
const setButtonSize = (size) => {
    const buttonSize = {
        normal: {
            height: 4.8,
            fontSize: styles_1.styles.fontSize.normal,
            borderWidth: styles_1.styles.border.level2,
        },
        small: {
            height: 4,
            fontSize: styles_1.styles.fontSize.small,
            borderWidth: styles_1.styles.border.level2,
        },
        xsmall: {
            height: 2.8,
            fontSize: styles_1.styles.fontSize.xsmall,
            borderWidth: styles_1.styles.border.level1,
        },
    };
    const currentSize = buttonSize[size];
    return (0, react_1.css) `
    height: ${currentSize.height}rem;
    font-size: ${currentSize.fontSize}rem;
    border-width: ${currentSize.borderWidth}rem;
  `;
};
const setButtonActiveStyle = (theme, variant) => {
    if (variant === 'normal') {
        return setButtonStyle(theme, 'outline');
    }
    return setButtonStyle(theme, 'normal');
};
exports.setButtonActiveStyle = setButtonActiveStyle;
exports.StyledButton = styled_1.default.button `
  ${({ theme, variant, disabled, active }) => active
    ? (0, exports.setButtonActiveStyle)(theme, variant || 'normal')
    : setButtonStyle(theme, variant || 'normal', disabled)}

  ${({ size }) => setButtonSize(size || 'normal')}
  ${({ wide }) => wide && 'width: 100%'};

  & > span {
    display: flex;
    align-items: center;

    & > svg {
      width: 2rem;
      height: 2rem;
      margin-right: ${styles_1.styles.space.level1}rem;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${styles_1.styles.borderRadius.normal}rem;

  text-align: center;

  ${styles_1.styles.transition.button}
`;
