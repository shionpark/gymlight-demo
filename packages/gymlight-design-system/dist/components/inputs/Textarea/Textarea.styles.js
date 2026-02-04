"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCounter = exports.ErrorMessage = exports.InfoContainer = exports.StyledTextarea = exports.TextareaContainer = void 0;
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
const polished_1 = require("polished");
exports.TextareaContainer = styled_1.default.div `
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
`;
const getTextareaSize = (size) => {
    let height;
    if (typeof size === 'number') {
        height = size;
    }
    else if (size === 'small') {
        height = 6;
    }
    else {
        height = 15;
    }
    return (0, react_1.css) `
    height: ${height}rem;
  `;
};
exports.StyledTextarea = styled_1.default.textarea `
  font-size: ${styles_1.styles.fontSize.small}rem;
  border: 1px solid ${({ theme }) => theme.border.default};
  outline-color: ${({ theme }) => (0, polished_1.darken)(0.08, theme.border.default)};
  padding: ${styles_1.styles.space.level4}rem;

  ${({ size }) => getTextareaSize(size)}

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.button.activeReverse};
    color: ${({ theme }) => theme.font.dark};

    &::placeholder {
      color: ${({ theme }) => theme.color.lightGray};
    }
  }
`;
exports.InfoContainer = styled_1.default.div `
  display: flex;
  justify-content: space-between;
`;
exports.ErrorMessage = styled_1.default.div `
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles_1.styles.fontSize.small}rem;
`;
exports.TextCounter = styled_1.default.div `
  text-align: right;
  font-size: ${styles_1.styles.fontSize.xsmall};
  color: ${({ theme }) => theme.font.light};
`;
