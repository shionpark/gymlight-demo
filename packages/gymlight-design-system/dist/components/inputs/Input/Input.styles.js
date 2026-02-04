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
/** Input의 border 스타일을 적용하는 함수 */
const getBorderStyle = (borderStyle, theme, error, readOnly) => {
    const normalStyleMap = {
        solid: (0, react_1.css) `
      border: ${styles_1.styles.border.level1}rem solid ${getBorderColor(theme, theme.border.default, error)};
    `,
        bottom: (0, react_1.css) `
      border: none;
      border-bottom: ${styles_1.styles.border.level1}rem solid
        ${getBorderColor(theme, theme.border.default, error)};
    `,
        none: (0, react_1.css) `
      border: none;
    `,
    };
    const activeStyleMap = {
        solid: (0, react_1.css) `
      outline: ${styles_1.styles.border.level1}rem solid ${getBorderColor(theme, theme.border.dark, error)};
    `,
        bottom: (0, react_1.css) `
      border-bottom: ${styles_1.styles.border.level1}rem solid
        ${getBorderColor(theme, theme.border.dark, error)};
    `,
        none: (0, react_1.css) `
      border: none;
    `,
    };
    const currentStyle = normalStyleMap[borderStyle];
    const activeStyle = activeStyleMap[borderStyle];
    if (!currentStyle || !activeStyle) {
        throw new Error(`'${borderStyle}' 변수의 버튼 스타일이 정의되지 않았습니다.`);
    }
    return (0, react_1.css) `
    outline: none;
    ${currentStyle};

    ${!readOnly &&
        (0, react_1.css) `
      &:focus {
        ${activeStyle};
      }
    `}
  `;
};
exports.InputContainer = styled_1.default.div `
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
`;
exports.StyledInput = styled_1.default.input `
  width: 100%;
  padding: 0.6rem 1.2rem;
  display: block;
  font-size: ${styles_1.styles.fontSize.small}rem;

  ${({ readOnly, theme }) => readOnly
    ? `
      cursor: not-allowed;
    background: ${theme.button.activeReverse}; 
    color: ${theme.font.dark};
    
    &::placeholder {
      color: ${theme.color.lightGray};
    }`
    : `
      &::placeholder {
      color: ${theme.font.light};
    }`};

  ${({ inputSize }) => getInputSize(inputSize || 'normal')};
  ${({ borderStyle, theme, error, readOnly }) => getBorderStyle(borderStyle || 'solid', theme, error, readOnly)}
`;
exports.ErrorMessage = styled_1.default.div `
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles_1.styles.fontSize.small}rem;
`;
