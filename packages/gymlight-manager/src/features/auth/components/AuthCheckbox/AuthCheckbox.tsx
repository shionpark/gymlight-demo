import { forwardRef } from 'react';

import { AuthCheckboxContainer, StyledCheckbox, StyledLabel } from './AuthCheckbox.styles';

interface IAuthCheckboxProps {
  label: string;
  name?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  style?: React.CSSProperties;
}

const AuthCheckbox = forwardRef<HTMLInputElement, IAuthCheckboxProps>(({ label, ...rest }, ref) => {
  return (
    <AuthCheckboxContainer>
      <StyledCheckbox type="checkbox" ref={ref} {...rest} />
      <StyledLabel>{label}</StyledLabel>
    </AuthCheckboxContainer>
  );
});

AuthCheckbox.displayName = 'AuthCheckbox';

export default AuthCheckbox;
