"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileImage = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.ProfileImage = styled_1.default.div `
  height: 4rem;
  width: 4rem;
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
