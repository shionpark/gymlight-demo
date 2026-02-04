import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 120rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.light};

  position: relative;
`;

export const Body = styled.div`
  & > div > .left-section {
    width: 80rem;
  }
  & > div > .left-section > button {
    width: 12rem;
  }
`;

export const basicInfo = styled.div``;

export const TabContainer = styled.div`
  width: 100%;
  height: 50rem;
  padding: ${styles.space.level5}rem ${styles.space.level9}rem;
  background: ${({ theme }) => theme.background.default};
`;
