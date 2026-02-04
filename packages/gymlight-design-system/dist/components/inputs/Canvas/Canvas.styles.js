"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCanvas = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.StyledCanvas = styled_1.default.canvas `
  background-color: rgba(0, 0, 0, 0.05);
  border: 0.1rem solid ${({ theme }) => theme.border.default};

  transition: 0.5s all ease-in-out;

  opacity: 0.8;
  &:hover {
    background-color: ${({ theme }) => theme.background.light};
  }

  cursor: crosshair;

  &:active {
    cursor: grabbing;
  }

  width: 100%;
  height: 100%;
`;
