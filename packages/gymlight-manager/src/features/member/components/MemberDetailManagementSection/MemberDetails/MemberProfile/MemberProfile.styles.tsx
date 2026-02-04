import styled from '@emotion/styled';
import { styles, Theme } from 'gymlight-design-system';

export const Wrapper = styled.div`
  height: 25rem;
  width: 100%;
  background: ${({ theme }) => theme.background.light};
`;
export const ProfileWrapper = styled.div`
  height: 22rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1.5rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const MemberName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  font-size: ${styles.fontSize.normal}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const ImageContainer = styled.div`
  width: 15rem;
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  & > img {
    width: 9rem;
    height: 9rem;
  }
`;

export const InfoContainer = styled.div`
  width: 40rem;
  height: 22rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .label {
    width: 3rem;
  }

  .content {
    width: 35rem;
    height: 3rem;

    text-align: center;

    border-bottom: solid 0.1rem black;
    font-size: ${styles.fontSize.xsmall}rem;
  }
`;

export const SignificantContainer = styled.div`
  width: 48rem;
  height: 100%;
  .label {
    padding-left: 0.5rem;
  }
`;

export const Significant = styled.pre`
  width: 40rem;
  height: 11rem;
  border: 0.1rem solid black;
  padding: 0.5rem;
  text-align: left;
`;
