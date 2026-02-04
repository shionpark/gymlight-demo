import styled from '@emotion/styled';

import { styles, theme } from 'gymlight-design-system';

export const Wrapper = styled.header<{ sidebarIsFold: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.background.light};

  padding: 0 ${styles.space.level5}rem;

  height: ${styles.component.header.height}rem;
  width: ${({ sidebarIsFold }) =>
    sidebarIsFold
      ? `calc(100% - ${styles.component.sidebar.isFold}rem)`
      : `calc(100% - ${styles.component.sidebar.width}rem)`};

  position: fixed;
  top: 0;
  left: ${({ sidebarIsFold }) =>
    sidebarIsFold
      ? `${styles.component.sidebar.isFold}rem`
      : `${styles.component.sidebar.width}rem`};

  border-bottom: 1px solid ${({ theme }) => theme.border.default};

  ${styles.transition.sidebar}
`;

export const CommonMenus = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level4}rem;

  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${theme.font.default};
    padding: ${styles.space.level1}rem;

    ${styles.transition.button};

    &:hover {
      cursor: pointer;
    }
  }

  select {
    width: 12rem;
  }
`;

export const CustomMenus = styled.ul`
  list-style: none;

  grid-column: -3 / span 3;
  gap: 2rem;

  display: flex;
  align-items: center;
  position: relative;

  font-size: ${styles.fontSize.xsmall}rem;
`;
