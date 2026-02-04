import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, theme } from 'gymlight-design-system';

import { Link } from 'react-router-dom';

export const StyledContainer = styled.aside<{ sidebarIsFold: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.background.dark};
  color: ${theme.font.light};

  ${({ sidebarIsFold }) => {
    const sidebarWidth = sidebarIsFold
      ? `${styles.component.sidebar.isFold}rem`
      : `${styles.component.sidebar.width}rem`;
    return css`
      width: ${sidebarWidth};
      ${styles.transition.sidebar};
    `;
  }}

  ${({ sidebarIsFold }) =>
    sidebarIsFold &&
    css`
      span {
        display: none;
      }
    `}

  position: fixed;
  left: 0;
  top: 0;

  & > div:not(:first-child) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export const getLogoItemStyle = () => {
  return css({
    width: '10rem',
    height: '10rem',

    position: 'relative',

    cursor: 'pointer',
  });
};

export const LogoImage = styled.img<{ sidebarIsFold: boolean }>`
  height: auto;
  width: ${({ sidebarIsFold }) =>
    sidebarIsFold ? styles.component.sidebar.isFold : styles.component.sidebar.width}rem;
`;

export const CommonMenuContainer = styled.div`
  ul {
    padding: 0;
    list-style: none;
  }
`;

export const UserMenuContainer = styled.div`
  ul {
    padding: 0;
    list-style: none;
  }
`;

export const AuthErrorMessage = styled.div<{ sidebarIsFold: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ sidebarIsFold }) => (sidebarIsFold ? 0.8 : 4)}rem;
  text-align: center;

  & > span {
    color: ${theme.font.reverse};
  }

  & > * > button {
    margin-top: ${styles.space.level2}rem;
  }

  & > button > a {
    color: inherit;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
