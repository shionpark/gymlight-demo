"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightSection = exports.LeftSection = exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div `
  width: 100%;
  height: ${({ height }) => `${height}` || '4.2'}rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
exports.LeftSection = styled_1.default.div `
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 0;
`;
exports.RightSection = styled_1.default.div `
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 0;
`;
