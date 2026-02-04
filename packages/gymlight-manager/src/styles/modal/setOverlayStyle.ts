import { css } from '@emotion/react';

export const setOverlayStyle = (isOpen: boolean) => {
  if (isOpen) {
    return css`
      visibility: none;
      opacity: 1;

      & > * {
        transform: translate(0, 0);
      }
    `;
  }

  return css`
    visibility: hidden;
    opacity: 0;

    & > * {
      transform: translate(0, -5%);
    }
  `;
};
