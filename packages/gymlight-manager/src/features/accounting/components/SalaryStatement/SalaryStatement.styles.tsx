import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  gap: 0.5rem;
  background-color: white;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 0.5rem;
`;

export const DetailValueTableHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const DetailValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
`;

export const FlexColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ManagerCommentWrapper = styled.div`
  height: inherit;

  .labeled-container {
    width: 100%;
  }

  .label {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .content {
    background-color: ${({ theme }) => theme.background.light};
    color: ${({ theme }) => theme.background.dark};
    height: 26rem;
    width: 100%;
    padding: 0.3rem;
  }
`;

export const SectionTitle = styled.div`
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.background.dark};
  border: solid black 0.025rem;
  text-align: center;
  font-size: ${styles.fontSize.large}rem;
  padding: 0.05rem;
  font-weight: bold;
`;

export const commentPre = styled.pre`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const MainTitle = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.background.dark};
  border: solid black 0.1rem;

  font-size: ${styles.fontSize.h4}rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`;
