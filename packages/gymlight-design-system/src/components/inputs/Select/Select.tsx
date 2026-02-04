import { forwardRef, type HTMLAttributes } from 'react';

import { StyledSelect } from './Select.styles';

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  wide?: boolean;

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ name, defaultValue, value, children, wide = true, ...rest }, ref) => {
    return (
      <StyledSelect
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        name={name}
        wide={wide}
        {...rest}
      >
        {children}
      </StyledSelect>
    );
  },
);

Select.displayName = 'Select';

export default Select;
