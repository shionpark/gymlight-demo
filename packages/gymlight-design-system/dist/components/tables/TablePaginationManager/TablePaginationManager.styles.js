"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div `
  width: 100%;

  .right-section > div {
    width: 32rem;
    margin-right: 2rem;
  }
`;
