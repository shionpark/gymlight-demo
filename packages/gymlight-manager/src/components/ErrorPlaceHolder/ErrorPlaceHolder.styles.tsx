import styled from '@emotion/styled';

export const Wrapper = styled.div<{ vertical?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
