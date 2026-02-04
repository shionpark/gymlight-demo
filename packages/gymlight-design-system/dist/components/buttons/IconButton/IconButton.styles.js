"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconButton = void 0;
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
const setButtonStyle = (theme, variant) => {
    const buttonStyle = {
        normal: {
            normalStyle: (0, react_1.css) `
        background: ${theme.button.default};
        color: ${theme.font.default};
        border-color: ${theme.border.default};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.05, theme.button.default)};
        color: ${theme.font.light};
      `,
            focusStyle: (0, react_1.css) `
        background: ${theme.color.lightGray};
        color: ${theme.font.reverse};
        outline: 1px solid ${(0, polished_1.lighten)(0.08, theme.color.lightGray)};
      `,
        },
        primary: {
            normalStyle: (0, react_1.css) `
        background: ${theme.color.primary};
        color: ${theme.font.reverse};
        border-color: ${theme.border.default};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.05, theme.color.primary)};
      `,
            focusStyle: (0, react_1.css) `
        background: ${(0, polished_1.darken)(0.08, theme.color.primary)};
        color: ${theme.font.reverse};
        outline: 1px solid ${(0, polished_1.darken)(0.08, theme.color.primary)};
      `,
        },
        ['icon-only']: {
            normalStyle: (0, react_1.css) `
        background: transparent;
        color: ${theme.font.default};
        border-color: transparent;
      `,
            hoverStyle: (0, react_1.css) `
        background: ${(0, polished_1.lighten)(0.02, theme.background.default)};
      `,
            focusStyle: (0, react_1.css) `
        background: ${theme.background.default};
        outline: 1px solid ${(0, polished_1.darken)(0.08, theme.background.default)};
      `,
        },
        active: {
            normalStyle: (0, react_1.css) `
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${(0, polished_1.lighten)(0.08, theme.color.lightGray)};
        border-color: ${theme.border.default};
      `,
            hoverStyle: (0, react_1.css) `
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${(0, polished_1.lighten)(0.08, theme.color.lightGray)};
      `,
            focusStyle: (0, react_1.css) `
        background: ${theme.button.active};
        color: ${theme.font.reverse};
        outline: 1px solid ${(0, polished_1.lighten)(0.08, theme.color.lightGray)};
      `,
        },
    };
    const currentStyle = buttonStyle[variant];
    if (!currentStyle) {
        throw new Error(`'${variant}' 변수의 버튼 스타일이 정의되지 않았습니다.`);
    }
    const activeStyle = (0, react_1.css) `
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:focus {
      ${currentStyle.focusStyle}
    }
  `;
    return (0, react_1.css) `
    border-style: solid;
    border-color: transparent;

    ${currentStyle.normalStyle}

    ${activeStyle}
  `;
};
const setButtonSize = (size) => {
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
    return (0, react_1.css) `
    height: ${currentSize.circleSize}rem;
    width: ${currentSize.circleSize}rem;
    & > svg {
      stroke-width: ${currentSize.iconSize}rem;
    }
  `;
};
exports.StyledIconButton = styled_1.default.button `
  ${({ theme, variant = 'normal' }) => setButtonStyle(theme, variant)}
  ${({ size = 'normal' }) => setButtonSize(size)}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  outline: 0 solid ${styles_1.theme.color.white};

  flex-shrink: 0;

  ${styles_1.styles.transition.button}
`;
