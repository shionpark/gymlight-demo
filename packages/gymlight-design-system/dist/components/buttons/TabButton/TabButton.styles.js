"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTabButton = void 0;
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
exports.StyledTabButton = styled_1.default.button `
  font-size: ${styles_1.styles.fontSize.normal}rem;
  font-weight: ${styles_1.styles.fontWeight.bold};
  padding: ${styles_1.styles.space.level4}rem ${styles_1.styles.space.level7}rem;
  cursor: pointer;
  background-color: transparent;

  ${({ active, theme }) => {
    const fontColor = active ? `${theme.color.primary}` : `${theme.font.light}`;
    const hoverColor = active ? `${theme.color.primary}` : `${theme.font.dark}`;
    const borderBottom = active
        ? `${styles_1.styles.border.level2}rem solid ${theme.color.primary}`
        : `${styles_1.styles.border.level2}rem solid ${theme.background.light}`;
    return (0, react_1.css) `
      color: ${fontColor};
      border: none;
      border-bottom: ${borderBottom};
      &:hover {
        color: ${hoverColor};
        ${styles_1.styles.transition.button};
      }
    `;
}}
`;
