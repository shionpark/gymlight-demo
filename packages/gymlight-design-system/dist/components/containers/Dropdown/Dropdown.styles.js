"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuWrapper = exports.DefaultButton = exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div `
  position: relative;
`;
exports.DefaultButton = styled_1.default.button `
  border: none;
  background: none;
  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &: hover svg {
    color: ${({ theme }) => theme.button.hover};
    stroke: ${({ theme }) => theme.button.active};
    stroke-width: 0.1rem;
  }
`;
exports.MenuWrapper = styled_1.default.div `
  z-index: 15;
  position: absolute;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.background.light};
  box-shadow: 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.3);

  min-width: 8rem;
  width: ${({ width }) => (width ? `${width}rem` : 'auto')};
  top: ${({ distance }) => (distance ? `${distance} rem` : '3rem')};

  ${({ align }) => align === 'right'
    ? `
        left:0;
        transform-origin: top right;
      `
    : `
        left: auto;
        right: 0;
        transform-origin: top left;
      `};
`;
