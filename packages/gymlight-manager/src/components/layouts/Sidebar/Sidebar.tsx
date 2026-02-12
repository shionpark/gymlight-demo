import { memo } from 'react';

import { SquareButton } from 'gymlight-design-system';

import {
  ADMIN_MENU,
  COMMON_MENU,
  LEADER_TRAINER_MENU,
  MANAGER_MENU,
  TRAINER_MENU,
  URLS,
} from '@/constants';
import type { IUserResponse } from '@/types';

import { MenuItem } from '../MenuItem';

import {
  AuthErrorMessage,
  CommonMenuContainer,
  LogoImage,
  StyledContainer,
  StyledLink,
  UserMenuContainer,
} from './Sidebar.styles';

interface ISidebarProps {
  currentUser: IUserResponse | null;
  sidebarIsFold: boolean;
}

const Sidebar = ({ currentUser, sidebarIsFold }: ISidebarProps) => {
  const renderUserMenu = () => {
    if (!currentUser || !currentUser.role) return null;

    const menu =
      currentUser.role === '관리자'
        ? ADMIN_MENU
        : currentUser.role === '매니저'
          ? MANAGER_MENU
          : currentUser.role === '팀장 트레이너'
            ? LEADER_TRAINER_MENU
            : currentUser.role === '트레이너'
              ? TRAINER_MENU
              : null;

    if (!menu) return null;

    return Object.keys(menu).map((key) => {
      const { icon: Icon, label } = menu[key];
      const to = URLS.CLIENT[key.toUpperCase() as keyof typeof URLS.CLIENT];

      return (
        <MenuItem key={key} icon={<Icon />} label={label} to={to} sidebarIsFold={sidebarIsFold} />
      );
    });
  };

  return (
    <StyledContainer sidebarIsFold={sidebarIsFold}>
      <StyledLink to={currentUser ? URLS.CLIENT.ROOT : URLS.CLIENT.LOGIN}>
        <LogoImage src="/images/logo.png" alt="logo" sidebarIsFold={sidebarIsFold} />
      </StyledLink>
      {currentUser ? (
        <>
          <CommonMenuContainer>
            {Object.keys(COMMON_MENU).map((key) => {
              const { icon: Icon, label } = COMMON_MENU[key];
              const to = URLS.CLIENT[key.toUpperCase() as keyof typeof URLS.CLIENT];

              return (
                <MenuItem
                  key={key}
                  icon={<Icon />}
                  label={label}
                  to={to}
                  sidebarIsFold={sidebarIsFold}
                />
              );
            })}
          </CommonMenuContainer>
          <UserMenuContainer>{renderUserMenu()}</UserMenuContainer>
        </>
      ) : (
        <AuthErrorMessage sidebarIsFold={sidebarIsFold}>
          {!sidebarIsFold && <span>로그인이 필요한 서비스입니다.</span>}
          <StyledLink to={URLS.CLIENT.LOGIN}>
            <SquareButton variant="primary" size="small" wide>
              <span>로그인</span>
            </SquareButton>
          </StyledLink>
        </AuthErrorMessage>
      )}
    </StyledContainer>
  );
};

export default memo(Sidebar);
