"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayCellWrapper = exports.CellComponentWrapper = exports.CalendarTable = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
exports.CalendarTable = styled_1.default.table `
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-spacing: 0;
  overflow: hidden;

  thead {
    position: sticky;
    top: -0.3rem;
    background: ${({ theme }) => theme.background.default};
    border: ${styles_1.styles.border.level1}rem solid ${({ theme }) => theme.border.default};

    z-index: 10;

    tr {
      height: 4rem;
      background: white;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};

      th {
        height: inherit;

        &:first-child {
          background: ${({ theme }) => theme.tableCells.holiday};
        }

        display: table-cell;
        vertical-align: middle;
        text-align: center;

        svg {
          width: 2rem;

          &:hover {
            cursor: pointer;
          }
        }
        &:first-child {
          border-top-left-radius: 0.8rem;
        }

        &:last-child {
          border-top-right-radius: 0.8rem;
        }
      }
    }
  }

  tbody {
    background: ${({ theme }) => theme.background.light};

    tr {
      height: 30rem;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};
      td {
        height: inherit;
        width: inherit;
        border-left: ${styles_1.styles.border.level1}rem solid ${({ theme }) => theme.border.default};
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        border-right: ${styles_1.styles.border.level1}rem solid ${({ theme }) => theme.border.default};
      }
    }
  }

  max-height: 70rem;
  overflow-y: auto;
  word-break: break-all;
`;
exports.CellComponentWrapper = styled_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
exports.DayCellWrapper = styled_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
`;
