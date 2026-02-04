import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 3rem;

  & > .labeled-container {
    gap: 2rem;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  .labeled-container {
    margin-bottom: 2rem;
  }
  .label {
    margin-left: 1rem;
  }
`;
