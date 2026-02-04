"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fallback = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Fallback = styled_1.default.div `
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.background.default};
  border-radius: 0.8rem;
`;
