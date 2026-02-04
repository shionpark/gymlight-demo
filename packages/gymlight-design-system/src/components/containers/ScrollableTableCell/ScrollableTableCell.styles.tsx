import styled from '@emotion/styled';

export const Cell = styled.div`
  width: 100%;

  min-height: 3.6rem;
  display: flex;

  justify-content: center;
  align-items: center;

  word-wrap: break-word;
  line-height: 1;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
