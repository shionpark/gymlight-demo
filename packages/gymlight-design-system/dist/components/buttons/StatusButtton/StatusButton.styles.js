"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styles_1 = require("../../../styles");
const styled_1 = __importDefault(require("@emotion/styled"));
const setStatusBackground = (status, colors) => {
    const backgroundColor = colors[status];
    return backgroundColor || 'transparent';
};
exports.StyledButton = styled_1.default.div `
  display: inline-block;
  font-size: ${styles_1.styles.fontSize.xsmall}rem;
  font-weight: 600;
  padding: ${styles_1.styles.space.level1}rem ${styles_1.styles.space.level2}rem;
  background: ${({ status, colors }) => setStatusBackground(status, colors)};
  border-radius: ${styles_1.styles.borderRadius.normal}rem;
`;
