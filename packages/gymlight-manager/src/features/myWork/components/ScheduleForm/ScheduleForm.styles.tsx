import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
width:100%:
height:100%;
display:grid;
grid-template-columns: 1fr 1fr;
gap: 0rem 2rem;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  gap: 0.5rem;
`;

export const DateTimeWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const SignatureWrapper = styled.div`
  width: 91rem;

  border: solid 0.1rem ${({ theme }) => theme.button.disabled};

  .right-section button {
    font-size: ${styles.fontSize.xsmall}rem;
    svg {
      height: 2em;
    }
  }
`;

export const SignatureImageForRequest = styled.img`
  width: 100%;
  height: 100%;
  cursor: not-allowed;
`;

export const RequestWrapper = styled.div`
  width: 90rem;
  height: 13rem;
`;
