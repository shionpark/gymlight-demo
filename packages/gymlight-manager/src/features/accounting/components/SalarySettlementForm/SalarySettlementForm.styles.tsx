import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & input {
    text-align: right;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem;
  gap: 1rem;

  & button {
    width: 6rem;
  }
`;
