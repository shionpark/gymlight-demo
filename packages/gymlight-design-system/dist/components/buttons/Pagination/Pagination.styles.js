"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellipsis = exports.PageButton = exports.Wrapper = void 0;
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
exports.Wrapper = styled_1.default.div `
  display: flex;
  padding: 2rem;
`;
exports.PageButton = styled_1.default.button `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  border-radius: 1rem;
  border: none;
  background: transparent;

  ${({ variant }) => {
    const backgroundColor = variant === 'active' ? `${styles_1.theme.color.primary}` : `transparent`;
    const fontColor = variant === 'active' ? `${styles_1.theme.font.reverse}` : `${styles_1.theme.font.default}`;
    const polishedColor = variant === 'active' ? `${styles_1.theme.color.primary}` : `${styles_1.theme.button.hover}`;
    return (0, react_1.css) `
      background-color: ${backgroundColor};
      color: ${fontColor};

      &:not(:disabled):hover {
        background: ${(0, polished_1.darken)(0.08, `${polishedColor}`)};
      }
    `;
}};

  font-weight: ${styles_1.styles.fontWeight.bold};
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: auto;
  }

  ${styles_1.styles.transition.button}
`;
exports.Ellipsis = styled_1.default.div `
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 2rem;
  }
`;
