import { memo } from 'react';

import type { IMenuItem } from '@/types';

import { MenuItemContainer, MenuItemLink } from './MenuItem.styles';

interface IMenuItemProps extends IMenuItem {
  sidebarIsFold?: boolean;
}

const MenuItem = ({ icon, label, to, sidebarIsFold }: IMenuItemProps) => {
  return (
    <MenuItemContainer>
      <MenuItemLink
        to={to}
        sidebarIsFold={sidebarIsFold!}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        {sidebarIsFold ? (
          <>{icon}</>
        ) : (
          <>
            {icon}
            <span>{label}</span>
          </>
        )}
      </MenuItemLink>
    </MenuItemContainer>
  );
};

export default memo(MenuItem);
