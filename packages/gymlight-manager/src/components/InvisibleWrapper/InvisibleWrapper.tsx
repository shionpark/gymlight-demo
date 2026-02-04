import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Wrapper } from './InvisibleWrapper.styles';

interface IInvisibleWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isVisible?: boolean;
}

const InvisibleWrapper = forwardRef<HTMLDivElement, IInvisibleWrapperProps>(
  ({ children, isVisible = false, ...props }, ref) => {
    return (
      <Wrapper isVisible={isVisible} {...props} ref={ref}>
        {children}
      </Wrapper>
    );
  },
);

export default InvisibleWrapper;
