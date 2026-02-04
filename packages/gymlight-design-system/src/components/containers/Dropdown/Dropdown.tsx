import { forwardRef, memo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { IMenuWrapperProps } from './Dropdown.styles';
import { MenuWrapper, DefaultButton, Wrapper } from './Dropdown.styles';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

interface IDropDownToggleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IMenuWrapperProps {
  button?: ReactNode;
  children: ReactNode;
  isDropdownMenuOpened: boolean;
  distance?: number;
  width?: number;
}

const Dropdown = forwardRef<HTMLDivElement, IDropDownToggleButtonProps>(
  ({ isDropdownMenuOpened, button, children, align = 'right', distance, width, ...rest }, ref) => {
    return (
      <Wrapper>
        {button ? (
          button
        ) : (
          <DefaultButton {...rest}>
            <EllipsisHorizontalIcon />
          </DefaultButton>
        )}
        {isDropdownMenuOpened && (
          <MenuWrapper align={align} distance={distance} ref={ref} width={width}>
            {children}
          </MenuWrapper>
        )}
      </Wrapper>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default memo(Dropdown);
