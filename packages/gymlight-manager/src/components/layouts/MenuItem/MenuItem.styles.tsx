import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { styles, theme } from 'gymlight-design-system';

import { lighten } from 'polished';
import { css } from '@emotion/react';

export const MenuItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
  width: 100%;

  &:hover {
    background: ${lighten(0.04, theme.background.dark)};
    color: ${lighten(0.2, theme.font.light)};
    cursor: pointer;
  }

  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

export const MenuItemLink = styled(NavLink)<{ sidebarIsFold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: inherit;
  width: inherit;
  ${({ sidebarIsFold }) =>
    !sidebarIsFold &&
    css`
      justify-content: left;
      padding-left: ${styles.space.level6}rem;
      & > svg {
        margin-right: ${styles.space.level4}rem;
      }
    `}

  text-decoration: none;
  color: inherit;

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  & > span {
    margin-left: ${styles.space.level4}rem;
  }

  &.active {
    background: ${lighten(0.08, theme.background.dark)};
    color: ${({ theme }) => theme.font.reverse};
  }
`;
