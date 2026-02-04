"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridSection = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
exports.GridSection = styled_1.default.div `
  display: grid;
  width: 100%;
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};

  ${({ isHorizontal, columns, gap }) => (0, react_1.css) `
    gap: ${gap || 0}rem;

    ${isHorizontal
    ? (0, react_1.css) `
          grid-template-columns: repeat(${columns}, 1fr);
        `
    : (0, react_1.css) `
          grid-template-rows: repeat(${columns}, 1fr);
          grid-auto-flow: column;
        `}
  `}
`;
