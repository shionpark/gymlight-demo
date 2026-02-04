import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

import { Dropdown, DropdownForMenu, IconButton, ProfileInfo } from 'gymlight-design-system';

import { useToggleDropdownMenu } from '@/hooks';
import type { IUserResponse } from '@/types';
import { URLS } from '@/constants';

import {
  BellIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

import * as Styled from './UserMenu.styles';

interface IUserMenuProps {
  currentUser: IUserResponse;
  onClickLogout: () => void;
}

const UserMenu = ({ currentUser, onClickLogout }: IUserMenuProps) => {
  const numberOfUserMenu = 2;
  const { checkDropdownMenuOpen, toggleDropdownMenu, setDropdownMenuRef } =
    useToggleDropdownMenu(numberOfUserMenu);

  const activeBranch = useRecoilValue(activeBranchState);

  return (
    <>
      <Dropdown
        ref={setDropdownMenuRef(0)}
        button={
          <Styled.IconButtonWrapper onClick={() => toggleDropdownMenu(0)}>
            <IconButton icon={<BellIcon />} variant="icon-only" />
          </Styled.IconButtonWrapper>
        }
        distance={14}
        isDropdownMenuOpened={checkDropdownMenuOpen(0)}
      >
        <DropdownForMenu>알림1</DropdownForMenu>
        <DropdownForMenu>알림2</DropdownForMenu>
      </Dropdown>
      <Dropdown
        ref={setDropdownMenuRef(1)}
        button={
          <ProfileInfo
            name={currentUser.name}
            role={currentUser.role}
            branch={activeBranch?.name}
            onClick={() => toggleDropdownMenu(1)}
          />
        }
        distance={14}
        isDropdownMenuOpened={checkDropdownMenuOpen(1)}
      >
        <DropdownForMenu>
          <Link to={URLS.CLIENT.MY_PAGE}>
            <Styled.Menu>
              <UserCircleIcon />
              마이페이지
            </Styled.Menu>
          </Link>
        </DropdownForMenu>
        <DropdownForMenu onClick={onClickLogout}>
          <Styled.Menu>
            <ArrowRightStartOnRectangleIcon />
            로그아웃
          </Styled.Menu>
        </DropdownForMenu>
      </Dropdown>
    </>
  );
};

export default memo(UserMenu);
