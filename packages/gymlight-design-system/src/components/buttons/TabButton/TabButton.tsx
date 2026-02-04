import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { StyledTabButton } from './TabButton.styles';

interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  children: ReactNode;
}

const TabButton = ({ active, children, ...rest }: ITabButtonProps) => {
  return (
    <StyledTabButton active={active} {...rest}>
      {children}
    </StyledTabButton>
  );
};

TabButton.displayName = 'TabButton';

export default memo(TabButton);
