import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level3}rem;
  padding: ${styles.space.level5}rem;
  width: 40rem;
`;

export const Title = styled.div`
  font-size: ${styles.fontSize.large}rem;
  font-weight: ${styles.fontWeight.bold};
  margin-bottom: ${styles.space.level2}rem;
`;

export const GirdWrapper = styled.div`
  width: inherit;
  height: 72rem;
  overflow: scroll;
  margin-top: ${styles.space.level3}rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  margin-bottom: ${styles.space.level1}rem;
`;
