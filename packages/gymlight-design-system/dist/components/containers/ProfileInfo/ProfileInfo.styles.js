"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInfoContent = exports.ProfileInfoContainer = void 0;
const styles_1 = require("../../../styles");
const styled_1 = __importDefault(require("@emotion/styled"));
exports.ProfileInfoContainer = styled_1.default.div `
  display: flex;
  align-items: center;
  padding: ${styles_1.styles.space.level1}rem;

  height: ${styles_1.styles.component.header.height}rem;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    ${styles_1.styles.transition.button};
  }

  & > svg {
    width: ${styles_1.styles.fontSize.h3}rem;
    height: ${styles_1.styles.fontSize.h3}rem;

    color: ${({ theme }) => theme.font.default};
    margin-left: ${styles_1.styles.space.level3}rem;
  }
`;
exports.ProfileInfoContent = styled_1.default.div `
  display: flex;
  flex-direction: column;
  margin-left: ${styles_1.styles.space.level3}rem;
  font-size: ${styles_1.styles.fontSize.small}rem;

  .profile-name {
    font-weight: ${styles_1.styles.fontWeight.bold}rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: ${styles_1.styles.space.level1}rem;
    font-size: ${styles_1.styles.fontSize.xsmall}rem;
  }
`;
