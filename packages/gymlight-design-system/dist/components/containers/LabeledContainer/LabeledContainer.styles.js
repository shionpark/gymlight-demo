"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = exports.Label = exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const styles_1 = require("../../../styles");
const getLabeledContainerSize = (size) => {
    const labelFieldSizeStyles = {
        small: {
            height: 3.2,
            fontSize: styles_1.styles.fontSize.small,
        },
        normal: {
            height: 3.6,
            fontSize: styles_1.styles.fontSize.normal,
        },
        large: {
            height: 4.0,
            fontSize: styles_1.styles.fontSize.normal,
        },
    };
    const { height, fontSize } = labelFieldSizeStyles[size || 'normal'];
    return (0, react_1.css) `
    font-size: ${fontSize}rem;

    .label {
      min-height: ${height}rem;
      line-height: ${height}rem;
    }

    .content {
      line-height: ${height}rem;
    }
  `;
};
const getVerticalStyles = (vertical, labelAlign) => vertical
    ? (0, react_1.css) `
        flex-direction: column;
      `
    : (0, react_1.css) `
        .label {
          align-items: ${labelAlign};
        }
      `;
exports.Wrapper = styled_1.default.div `
  display: flex;
  ${({ size }) => getLabeledContainerSize(size)}
  ${({ vertical, labelAlign }) => getVerticalStyles(vertical, labelAlign)}
  width:${({ width }) => (width ? `${width}rem` : 'auto')};

  .label {
    flex: ${({ labelRatio }) => labelRatio || '1'};
    white-space: nowrap;
    display: flex;
    flex-shrink: 0;

    ${({ bold }) => bold && `font-weight: ${styles_1.styles.fontWeight.bold};`}
  }

  .content {
    flex: ${({ contentRatio }) => contentRatio || '1'};
    ${({ contentAlign }) => contentAlign && `display: flex; align-items:${contentAlign};`}
  }
`;
exports.Label = styled_1.default.label ``;
exports.content = styled_1.default.div ``;
