"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pin = exports.PinsContainer = exports.GraphContainer = exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
exports.Wrapper = styled_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
`;
exports.GraphContainer = styled_1.default.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
exports.PinsContainer = styled_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;
exports.Pin = styled_1.default.div `
  position: absolute;
  left: ${(props) => props.leftPosition}%;
  bottom: 100%;
  width: 20rem;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  gap: 0rem;
  align-items: center;

  pointer-events: auto;

  .pin-label {
    margin: 0rem;
    padding: 0rem;
    font-size: ${styles_1.styles.fontSize.small}rem;
    color: ${(props) => props.cellcolor || 'black'};
  }

  svg {
    width: 1.5em;
  }
`;
