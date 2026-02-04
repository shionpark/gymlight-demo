import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.button.disabled};
  height: 68rem;

  & > div {
    height: inherit;
    overflow: auto;
    padding: 1rem;
  }
`;
