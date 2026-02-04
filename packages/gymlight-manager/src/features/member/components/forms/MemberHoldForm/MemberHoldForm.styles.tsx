import styled from '@emotion/styled';

export const MemberHoldFormWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  > div {
    flex: 1 1 20rem;
    min-width: 20rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
