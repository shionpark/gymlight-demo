import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { styles } from 'gymlight-design-system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Spinner = styled.div`
  border: 1rem solid rgba(0, 0, 0, 0.1);
  border-top: 1rem solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 0.4s linear infinite;
`;

export const LoadingText = styled.p`
  margin-top: 0.625rem;
  font-size: ${styles.fontSize.h1};
`;
