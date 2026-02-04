import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const SectionTitle = styled.div`
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.background.dark};
  border: solid black 0.025rem;
  text-align: center;
  font-size: ${styles.fontSize.h5}rem;
  padding: 0.1rem;
  font-weight: bold;
`;

export const FlexColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
