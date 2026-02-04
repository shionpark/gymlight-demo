"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconWrapper = exports.SmallText = exports.ContentWrapper = exports.StyledButton = void 0;
const styles_1 = require("../../../styles");
const styled_1 = __importDefault(require("@emotion/styled"));
exports.StyledButton = styled_1.default.button `
  width: 100%;
  height: 100%;
  display: block;

  border: none;
  background: inherit;
  cursor: pointer;

  font-weight: ${styles_1.styles.fontWeight.bold};
  font-size: ${styles_1.styles.fontSize.normal}rem;

  &:hover {
    background-color: ${({ theme }) => theme.background.light};
    box-shadow: inset 0 0 0 0.1rem ${({ theme }) => theme.border.dark};
  }
`;
exports.ContentWrapper = styled_1.default.div `
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;
exports.SmallText = styled_1.default.span `
  font-size: ${styles_1.styles.fontSize.xsmall}rem;
`;
exports.IconWrapper = styled_1.default.div `
  display: flex;
  align-items: center;
  & > svg {
    margin-left: ${styles_1.styles.space.level1};
    width: 2rem;
    height: 2rem;
  }
`;
