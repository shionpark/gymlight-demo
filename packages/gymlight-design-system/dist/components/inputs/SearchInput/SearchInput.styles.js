"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.StyledInput = exports.InputContainer = void 0;
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
const getBorderColor = (theme, defaultColor, error) => error ? theme.color.error : defaultColor;
const getInputSize = (size) => {
    let height = 4;
    if (size === 'small') {
        height = 3.2;
    }
    return (0, react_1.css) `
    height: ${height}rem;
  `;
};
exports.InputContainer = styled_1.default.div `
  ${({ readOnly }) => readOnly &&
    (0, react_1.css) `
      background: ${styles_1.theme.button.activeReverse};
    `};

  background: ${({ theme }) => theme.background.light};
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
  border: ${styles_1.styles.border.level1}rem solid ${styles_1.theme.border.default};
  border-radius: ${styles_1.styles.borderRadius.normal}rem;
  padding: 0 1.2rem;

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > * > svg {
    width: 2rem;
    height: 2rem;
    color: ${styles_1.theme.font.light};
  }

  &:focus {
    outline: ${styles_1.styles.border.level1}rem solid
      ${({ theme }) => getBorderColor(theme, theme.border.default)};
  }

  position: relative;

  .icon-button {
    position: absolute;
    right: 0;

    & > svg {
      width: 2rem;
    }
  }
`;
exports.StyledInput = styled_1.default.input `
  ${({ inputSize }) => getInputSize(inputSize)};

  width: 100%;
  padding: 0.6rem 1.2rem;

  display: block;
  outline: none;
  border: none;
  background: transparent;

  font-size: ${styles_1.styles.fontSize.small}rem;

  &::placeholder {
    color: ${({ readOnly }) => (readOnly ? styles_1.theme.font.light : styles_1.theme.font.default)};
  }
`;
exports.ErrorMessage = styled_1.default.div `
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles_1.styles.fontSize.small}rem;
`;
