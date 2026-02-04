"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSection = exports.RightSection = exports.LeftSection = exports.TopWrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
exports.TopWrapper = styled_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
  height: 6rem;
  padding: 0 2rem;

  background: ${({ theme }) => theme.background.light};
  border-bottom: 1px solid ${({ theme }) => theme.border.dark};
`;
exports.LeftSection = styled_1.default.div `
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: end;

  gap: 0;
`;
exports.RightSection = styled_1.default.div `
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: end;

  gap: ${styles_1.styles.space.level2}rem;
  padding-bottom: ${styles_1.styles.space.level1}rem;

  & > * {
    width: 100%;
  }
  & > select {
    min-width: 12rem;
  }
`;
exports.MainSection = styled_1.default.div `
  padding: ${styles_1.styles.space.level4}rem;
  background-color: ${({ theme }) => theme.background.default};
`;
