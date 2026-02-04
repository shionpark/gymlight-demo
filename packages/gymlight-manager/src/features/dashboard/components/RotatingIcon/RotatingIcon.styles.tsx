import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled(ArrowPathIcon)<{ isFetching: boolean }>`
  width: 2rem;

  ${({ isFetching }) =>
    isFetching &&
    css`
      animation: ${spinAnimation} 3s linear infinite;
      transform-origin: center;
    `}
`;
