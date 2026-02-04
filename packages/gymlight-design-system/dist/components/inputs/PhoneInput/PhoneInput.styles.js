"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.PhoneInputContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
exports.PhoneInputContainer = styled_1.default.div `
  width: ${({ wide }) => (wide ? '100%' : '28rem')};
  display: flex;
  gap: ${styles_1.styles.space.level3}rem;
`;
exports.ErrorMessage = styled_1.default.div `
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles_1.styles.fontSize.small}rem;
`;
