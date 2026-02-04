"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const getContinuousBarRatioCss = ({ numeratorNumber, denominatorNumber, numeratorColor, denominatorColor, barThikness, wide, }) => {
    const numeratorPercentage = (numeratorNumber / denominatorNumber) * 100;
    const denominatorPercentage = ((denominatorNumber - numeratorNumber) / denominatorNumber) * 100;
    return (0, react_1.css) `
    width: ${wide ? ' 100%' : 'inherit'};

    & > .numerator {
      background-color: ${numeratorColor};
      height: ${barThikness}rem;
      width: ${numeratorPercentage}%;
    }
    & > .denominator {
      background-color: ${denominatorColor};
      height: ${barThikness}rem;
      width: ${denominatorPercentage}%;
    }
  `;
};
const generateColorCellStyles = (colorCells) => {
    return (0, react_1.css) `
    ${colorCells
        .filter(({ cellColor }) => cellColor)
        .map(({ cellIndex, cellColor }) => `#bar-cell-${cellIndex} {
      background-color: ${cellColor};
      }`)
        .join(' ')}
  `;
};
const getDiscreteBarRatioCss = ({ denominatorNumber, numeratorColor, denominatorColor, barThikness, wide, }) => {
    const totalGapPercentage = 18;
    const unitGap = totalGapPercentage / (denominatorNumber - 1);
    const unitWidth = `calc(${(82 / denominatorNumber).toFixed(8)}% - ${unitGap / denominatorNumber}%)`;
    return (0, react_1.css) `
    width: ${wide ? ' 100%' : 'inherit'};
    gap: ${unitGap}%;

    & > .numerator,
    & > .denominator {
      margin: 0;
      padding: 0;
      flex-basis: ${unitWidth};
      background-color: ${numeratorColor};
      height: ${barThikness}rem;
    }

    & > .numerator {
      background-color: ${numeratorColor};
    }
    & > .denominator {
      background-color: ${denominatorColor};
    }
  `;
};
exports.Wrapper = styled_1.default.div `
  border: groove ${({ theme }) => theme.border.light} ${styles_1.styles.border.level1}rem;
  display: flex;
  border-radius: 0.2rem;

  ${({ colorCells }) => (colorCells ? generateColorCellStyles(colorCells) : '')}

  ${({ numeratorNumber, denominatorNumber, numeratorColor, denominatorColor, barThikness, wide, shape, }) => shape === 'continuous'
    ? getContinuousBarRatioCss({
        numeratorNumber,
        denominatorNumber,
        numeratorColor,
        denominatorColor,
        barThikness,
        wide,
    })
    : getDiscreteBarRatioCss({
        denominatorColor,
        denominatorNumber,
        numeratorColor,
        wide,
        barThikness,
    })}
`;
