import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const DefaultButton = styled.button`
  border: none;
  background: none;
  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &: hover svg {
    color: ${({ theme }) => theme.button.hover};
    stroke: ${({ theme }) => theme.button.active};
    stroke-width: 0.1rem;
  }
`;

export interface IMenuWrapperProps {
  align?: 'left' | 'right';
  distance?: number;
  width?: number;
}

export const MenuWrapper = styled.div<IMenuWrapperProps>`
  z-index: 15;
  position: absolute;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.background.light};
  box-shadow: 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.3);

  min-width: 8rem;
  width: ${({ width }) => (width ? `${width}rem` : 'auto')};
  top: ${({ distance }) => (distance ? `${distance} rem` : '3rem')};

  ${({ align }) =>
    align === 'right'
      ? `
        left:0;
        transform-origin: top right;
      `
      : `
        left: auto;
        right: 0;
        transform-origin: top left;
      `};
`;
