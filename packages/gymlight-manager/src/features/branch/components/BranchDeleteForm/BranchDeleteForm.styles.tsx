import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputWithButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 4fr 1fr;
`;

export const TimerBox = styled.div`
  background-color: ${({ theme }) => theme.background.default};
  display: flex;
  align-items: center;
  text-align: vertical;
  padding: 0rem 1rem;
`;

export const Time = styled.div`
  font-weight: bold;
`;
