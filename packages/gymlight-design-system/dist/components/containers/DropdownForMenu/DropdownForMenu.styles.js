"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styles_1 = require("../../../styles");
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div `
  width: 100%;
  text-align: center;
  font-size: ${styles_1.styles.fontSize.small}rem;
  color: ${({ theme }) => theme.font.default};
  padding: ${styles_1.styles.space.level2}rem ${styles_1.styles.space.level2}rem;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.background.default};
    ${styles_1.styles.transition.button};
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: ${styles_1.styles.space.level2}rem;
  }
`;
