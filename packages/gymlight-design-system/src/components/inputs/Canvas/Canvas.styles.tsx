import styled from '@emotion/styled';

export const StyledCanvas = styled.canvas`
  background-color: rgba(0, 0, 0, 0.05);
  border: 0.1rem solid ${({ theme }) => theme.border.default};

  transition: 0.5s all ease-in-out;

  opacity: 0.8;
  &:hover {
    background-color: ${({ theme }) => theme.background.light};
  }

  cursor: crosshair;

  &:active {
    cursor: grabbing;
  }

  width: 100%;
  height: 100%;
`;
