import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 120rem;
  height: 80rem;
`;

export const TabSelectWrapper = styled.div`
  width: 20rem;

  font-size: ${styles.fontSize.h4}rem;
  z-index: 3000;
  position: relative;
  left: 100rem;
  top: 0;
`;

export const ManageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div {
    width: 100%;
    align-self: center;
  }
`;
