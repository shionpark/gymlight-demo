import styled from '@emotion/styled';

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 5.6rem;
  flex-shrink: 0;

  cursor: pointer;

  text-transform: uppercase;

  margin-right: 0.8rem;

  &:hover {
    button {
      text-decoration: underline;
    }
  }

  a,
  button {
    height: 100%;
    padding: 0 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    text-align: center;
  }
`;
