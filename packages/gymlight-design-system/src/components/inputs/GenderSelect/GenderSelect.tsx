import { forwardRef, type HTMLAttributes } from 'react';

import { StyledSelect } from './GenderSelect.styles';

interface IGenderSelectProps extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  values: string[];
  defaultValue?: string | undefined;
  value?: string;
  disabled?: boolean;

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

const GenderSelect = forwardRef<HTMLSelectElement, IGenderSelectProps>(
  ({ name, values, defaultValue, value, disabled, ...rest }, ref) => {
    return (
      <StyledSelect
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        {...rest}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </StyledSelect>
    );
  },
);

GenderSelect.displayName = 'GenderSelect';

export default GenderSelect;
