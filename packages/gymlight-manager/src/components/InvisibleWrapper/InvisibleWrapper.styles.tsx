import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isVisible?: boolean }>`
  width: inherit;
  ${({ isVisible }) =>
    isVisible
      ? ``
      : `position: absolute;
  top: -1000rem;
  z-index: -500;
    `}
`;
