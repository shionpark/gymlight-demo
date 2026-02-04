import { memo } from 'react';

import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useCurrentPage } from '@/hooks';
import { sidebarIsFoldState, currentUserState } from '@/states';

import { useLogout } from '@/features/auth';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import { Main, StyledContainer } from './Layout.styles';

const Layout = () => {
  useCurrentPage();
  const currentUser = useRecoilValue(currentUserState);
  const sidebarIsFold = useRecoilValue(sidebarIsFoldState);

  const { handleClickLogout } = useLogout();

  return (
    <StyledContainer>
      <Sidebar currentUser={currentUser} sidebarIsFold={sidebarIsFold} />
      <Header
        currentUser={currentUser}
        onClickLogout={handleClickLogout}
        sidebarIsFold={sidebarIsFold}
      />
      <Main sidebarIsFold={sidebarIsFold}>
        <Outlet />
      </Main>
    </StyledContainer>
  );
};

export default memo(Layout);
