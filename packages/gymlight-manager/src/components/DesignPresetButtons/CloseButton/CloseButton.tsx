import { memo, type ButtonHTMLAttributes } from 'react';

import { IconButton } from 'gymlight-design-system';

import { XMarkIcon } from '@heroicons/react/24/outline';

interface ICloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton = (props: ICloseButtonProps) => {
  return <IconButton size="small" variant="icon-only" icon={<XMarkIcon />} {...props} />;
};

export default memo(CloseButton);
