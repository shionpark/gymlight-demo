import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import * as Styled from './DropdownForMenu.styles';

interface IDropdownForMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropdownForMenu = forwardRef<HTMLDivElement, IDropdownForMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <Styled.Wrapper ref={ref} {...props}>
        {children}
      </Styled.Wrapper>
    );
  },
);

DropdownForMenu.displayName = 'DropdownForMenu';

export default DropdownForMenu;
