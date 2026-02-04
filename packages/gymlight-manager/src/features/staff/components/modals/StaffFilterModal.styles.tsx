import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level3}rem;
  padding: ${styles.space.level5}rem;
  width: 60rem;

  .title {
    font-size: ${styles.fontSize.large}rem;
    font-weight: ${styles.fontWeight.bold};
    margin-bottom: ${styles.space.level2}rem;
  }
`;

export const ResultCount = styled.span`
  font-size: ${styles.fontSize.small}rem;
`;
