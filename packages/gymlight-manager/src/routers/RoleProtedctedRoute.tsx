import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { URLS } from '@/constants';
import { UserRoleType } from '@/types';

import { AuthLoading, useMe } from '@/features/auth';

interface RoleProtectedRouteProps {
  allowedRoles: UserRoleType[];
  redirectPath?: string;
  children: ReactNode;
}

export const RoleProtectedRoute = ({
  allowedRoles,
  redirectPath = URLS.CLIENT.DASHBOARD,
  children,
}: RoleProtectedRouteProps) => {
  const { data: currentUser, isFetching } = useMe();

  if (isFetching) {
    return <AuthLoading />;
  }

  if (!currentUser) {
    alert('로그인한 유저만 접근할 수있는 페이지입니다.');
    return <Navigate to={URLS.CLIENT.LOGIN} />;
  }

  if (!(currentUser?.role && allowedRoles.includes(currentUser.role))) {
    alert(`접근 권한이 없습니다. ${URLS.CLIENT.DASHBOARD} 페이지로 이동합니다.`);
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
