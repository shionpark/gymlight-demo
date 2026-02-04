"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Cell = styled_1.default.div `
  width: 100%;

  min-height: 3.6rem;
  display: flex;

  justify-content: center;
  align-items: center;

  word-wrap: break-word;
  line-height: 1;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
