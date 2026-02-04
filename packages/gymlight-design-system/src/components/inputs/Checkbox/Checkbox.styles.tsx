import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme as Theme, styles } from '@/styles';

export interface ICheckboxStylesProp {
  isRequired?: boolean;
  disabled?: boolean;
}

const getCheckboxColors = ({
  theme,
  isRequired,
  disabled,
}: {
  theme: typeof Theme;
  isRequired?: boolean;
  disabled?: boolean;
}) => {
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

  return css`
    & + label {
      border: ${selectedStyle.borderColor} solid 0.15rem;
      border-radius: ${styles.borderRadius.small}rem;
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

export const StyledLabel = styled.label`
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

export const StyledCheckbox = styled.input<ICheckboxStylesProp>`
  display: none;

  ${({ theme, isRequired, disabled }) => getCheckboxColors({ theme, isRequired, disabled })}
`;
