import { css, SerializedStyles } from '@emotion/react';

import { modalSize, type ModalSizeTypes } from '@/components/Modal/Modal.styles';

export const setModalSize = (size: ModalSizeTypes): SerializedStyles => {
  const { width, height } = modalSize[size];

  return css`
    width: ${width}rem;
    max-height: ${height}rem;
  `;
};
