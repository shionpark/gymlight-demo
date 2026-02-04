"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCheckbox = exports.StyledLabel = void 0;
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styles_1 = require("../../../styles");
const getCheckboxColors = ({ theme, isRequired, disabled, }) => {
    const colors = {
        required: {
            borderColor: theme.border.default,
            unCheckedBackground: theme.color.white,
            checkedBackground: theme.button.active,
            checkMarkColor: theme.font.reverse,
            shadowColor: theme.color.error,
        },
        optional: {
            borderColor: theme.border.default,
            unCheckedBackground: theme.color.white,
            checkedBackground: theme.button.active,
            checkMarkColor: theme.font.reverse,
            shadowColor: theme.color.white,
        },
        disabled: {
            borderColor: theme.button.disabled,
            unCheckedBackground: theme.button.disabled,
            checkedBackground: theme.button.disabled,
            checkMarkColor: theme.button.disabled,
            shadowColor: theme.color.white,
        },
    };
    const selectedStyle = disabled ? colors.disabled : isRequired ? colors.required : colors.optional;
    return (0, react_1.css) `
    & + label {
      border: ${selectedStyle.borderColor} solid 0.15rem;
      border-radius: ${styles_1.styles.borderRadius.small}rem;
      background-color: ${selectedStyle.unCheckedBackground};
      box-shadow: 0 0 0.1rem ${selectedStyle.shadowColor};

      stroke: ${selectedStyle.borderColor};
      stroke-width: 0.1; 
    }

    &:checked + label {
      background-color: ${selectedStyle.checkedBackground};
      svg {
        display: block;
        fill: ${selectedStyle.checkMarkColor}};
        stroke: ${selectedStyle.checkMarkColor};
      }
    }
  `;
};
exports.StyledLabel = styled_1.default.label `
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    border: 0.1rem ${({ theme }) => theme.border.light};
    color: ${({ theme }) => theme.font.default};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2px ${({ theme }) => theme.button.default};
  }
`;
exports.StyledCheckbox = styled_1.default.input `
  display: none;

  ${({ theme, isRequired, disabled }) => getCheckboxColors({ theme, isRequired, disabled })}
`;
