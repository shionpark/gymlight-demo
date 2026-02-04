import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { ISquareStyledButtonProps, StyledButton } from './SquareButton.styles';

interface ISquareButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ISquareStyledButtonProps {
  children: ReactNode;
}

const SquareButton = ({
  variant = 'normal',
  disabled,
  active,
  size = 'normal',
  children,
  ...rest
}: ISquareButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} disabled={disabled} active={active} {...rest}>
      {children}
    </StyledButton>
  );
};

export default memo(SquareButton);
