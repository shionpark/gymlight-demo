import { forwardRef, memo } from 'react';
import type { InputHTMLAttributes } from 'react';

import { CheckIcon } from '@heroicons/react/20/solid';

import { StyledCheckbox, StyledLabel } from './Checkbox.styles';
import type { ICheckboxStylesProp } from './Checkbox.styles';

export interface ICheckboxProps extends ICheckboxStylesProp, InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ id, checked, disabled = false, isRequired = false, ...rest }, ref) => {
    return (
      <div>
        <StyledCheckbox
          id={id}
          type="checkbox"
          disabled={disabled}
          isRequired={isRequired}
          ref={ref}
          checked={checked}
          {...rest}
        />
        <StyledLabel htmlFor={id}>
          <CheckIcon />
        </StyledLabel>
      </div>
    );
  },
);

export default memo(Checkbox);
