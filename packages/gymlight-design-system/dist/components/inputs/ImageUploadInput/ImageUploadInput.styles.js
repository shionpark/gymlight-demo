"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInput = exports.PreviewImage = exports.MockupBox = exports.Wrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div `
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;
exports.MockupBox = styled_1.default.div `
  width: 15rem;
  height: 15rem;
  border-radius: 0.75rem;
  box-shadow:
    0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1),
    0 0.4rem 0.6rem -0.2rem rgba(0, 0, 0, 0.05);
`;
exports.PreviewImage = styled_1.default.img `
  width: 15rem;
  height: 15rem;
  border-radius: 0.75rem;
  box-shadow:
    0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1),
    0 0.4rem 0.6rem -0.2rem rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
exports.ImageInput = styled_1.default.input `
  width: 100%;
  margin: 0rem auto;
`;
