import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { URLS } from '@/constants';
import {
  AccountingPage,
  AttendancePage,
  BranchPage,
  DashboardPage,
  StaffPage,
  JoinPage,
  LockerPage,
  LoginPage,
  MemberPage,
  MyPage,
  MyWorkPage,
  NotFoundPage,
  NoticePage,
  ProductPage,
  StatisticsPage,
  TeamPage,
  NoticeDetailPage,
  CheckInPage,
} from '@/pages';

import App from '../App';

import { RoleProtectedRoute } from './RoleProtedctedRoute';
import { PAGE_ACCESS_ROLES } from '@/constants/authroles';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: URLS.CLIENT.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        // 대시보드
        {
          path: URLS.CLIENT.DASHBOARD,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <DashboardPage />
            </RoleProtectedRoute>
          ),
        },

        // 인증/인가
        {
          path: URLS.CLIENT.JOIN,
          element: <JoinPage />,
        },
        {
          path: URLS.CLIENT.LOGIN,
          element: <LoginPage />,
        },

        // 마이 페이지
        {
          path: URLS.CLIENT.MY_PAGE,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <MyPage />
            </RoleProtectedRoute>
          ),
        },

        // 공통 페이지
        {
          path: URLS.CLIENT.NOTICE,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <NoticePage />
            </RoleProtectedRoute>
          ),
          children: [
            {
              path: URLS.CLIENT.NOTICE_ID,
              element: <NoticeDetailPage />,
            },
          ],
        },
        {
          path: URLS.CLIENT.MEMBER,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <MemberPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.PRODUCT,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <ProductPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.LOCKER,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <LockerPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.ATTENDANCE,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ALL_STAFF_ROLES}>
              <AttendancePage />
            </RoleProtectedRoute>
          ),
        },

        // 관리자 페이지
        {
          path: URLS.CLIENT.STAFF,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.STAFF}>
              <StaffPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.STATISTICS,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.STATICS}>
              <StatisticsPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.ACCOUNTING,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.ACCOUNTING}>
              <AccountingPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.BRANCH,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.BRANCH}>
              <BranchPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: URLS.CLIENT.TEAM,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.TEAM}>
              <TeamPage />
            </RoleProtectedRoute>
          ),
        },

        // 사용자 페이지 - 트레이너
        {
          path: URLS.CLIENT.MY_WORK,
          element: (
            <RoleProtectedRoute allowedRoles={PAGE_ACCESS_ROLES.MY_WORK}>
              <MyWorkPage />
            </RoleProtectedRoute>
          ),
        },
      ],
    },
    {
      path: URLS.CLIENT.CHECK_IN,
      element: <CheckInPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
