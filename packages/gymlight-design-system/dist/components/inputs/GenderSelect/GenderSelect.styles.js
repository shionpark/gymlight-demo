"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSelect = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
exports.StyledSelect = styled_1.default.select `
  -webkit-appearance: none;
  appearance: none;

  background: url(/images/selector.png) no-repeat ${({ theme }) => theme.color.white};
  background-size: 8rem 4rem;
  background-position: right 0.3rem center;

  width: 100%;
  height: 4rem;

  padding: 0.6rem 1.2rem;

  outline: none;

  font-size: ${styles_1.styles.fontSize.small}rem;

  border: ${styles_1.styles.border.level1}rem solid ${({ theme }) => theme.border.default};

  &::placeholder {
    color: ${({ theme }) => theme.font.light};
  }

  &:focus {
    outline: ${styles_1.styles.border.level1}rem solid ${({ theme }) => theme.border.dark};
  }
`;
