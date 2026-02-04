import styled from '@emotion/styled';

export interface IWrapperStyleProps {
  height?: number;
}

export const Wrapper = styled.div<IWrapperStyleProps>`
  width: 100%;
  height: ${({ height }) => `${height}` || '4.2'}rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 0;
`;

export const RightSection = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 0;
`;
