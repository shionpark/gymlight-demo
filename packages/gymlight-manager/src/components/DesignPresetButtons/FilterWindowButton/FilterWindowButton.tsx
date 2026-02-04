import { memo, type ButtonHTMLAttributes } from 'react';

import { SquareButton } from 'gymlight-design-system';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

interface IFilterWindowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const FilterWindowButton = (props: IFilterWindowButtonProps) => (
  <SquareButton size="small" variant="normal" {...props}>
    <span>
      <AdjustmentsHorizontalIcon />
    </span>
    필터
  </SquareButton>
);

export default memo(FilterWindowButton);
