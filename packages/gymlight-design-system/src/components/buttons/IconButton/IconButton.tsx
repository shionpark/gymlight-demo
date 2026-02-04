import { ButtonHTMLAttributes, forwardRef, memo } from 'react';
import { IStyledIconButtonProps, StyledIconButton } from './IconButton.styles';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IStyledIconButtonProps {
  icon: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ icon, variant = 'normal', size = 'normal', ...rest }, ref) => {
    return (
      <StyledIconButton className="iconButton" variant={variant} size={size} ref={ref} {...rest}>
        {icon}
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';

export default memo(IconButton);
