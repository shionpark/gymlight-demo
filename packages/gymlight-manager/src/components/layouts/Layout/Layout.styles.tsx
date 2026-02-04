import styled from '@emotion/styled';
import { theme, styles } from 'gymlight-design-system';

export const StyledContainer = styled.div`
  display: flex;

  height: 100vh;

  overflow: hidden;
  background-color: ${theme.background.default};
`;

export const Main = styled.main<{ sidebarIsFold: boolean }>`
  height: calc(100vh - 5.6rem);
  margin-top: ${styles.component.header.height}rem;
  width: ${({ sidebarIsFold }) =>
    sidebarIsFold
      ? `calc(100% - ${styles.component.sidebar.isFold}rem)`
      : `calc(100% - ${styles.component.sidebar.width}rem)`};
  margin-left: ${({ sidebarIsFold }) =>
    sidebarIsFold
      ? `${styles.component.sidebar.isFold}rem`
      : `${styles.component.sidebar.width}rem`};

  overflow-y: auto;

  body::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
