import styled from '@emotion/styled';

export const TableSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div:first-child {
    width: 84.2%;
  }
  & > div:last-child {
    width: 15%;
    min-width: 20rem;
  }
`;
