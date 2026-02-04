import loadable from '@loadable/component';

// 메인 페이지
export const DashboardPage = loadable(() => import('./DashboardPage'));
export const NotFoundPage = loadable(() => import('./NotFoundPage'));

// 인증/인가 페이지
export const LoginPage = loadable(() => import('./LoginPage'));
export const JoinPage = loadable(() => import('./JoinPage'));

// 마이 페이지
export const MyPage = loadable(() => import('./MyPage'));

// 공통 페이지
export const NoticePage = loadable(() => import('./NoticePage'));
export const NoticeDetailPage = loadable(() => import('./NoticeDetailPage'));
export const MemberPage = loadable(() => import('./MemberPage'));
export const ProductPage = loadable(() => import('./ProductPage'));
export const LockerPage = loadable(() => import('./LockerPage'));
export const AttendancePage = loadable(() => import('./AttendancePage'));
export const CheckInPage = loadable(() => import('./CheckInPage'));

// 관리자 페이지
export const StaffPage = loadable(() => import('./StaffPage'));
export const StatisticsPage = loadable(() => import('./StatisticsPage'));
export const AccountingPage = loadable(() => import('./AccountingPage'));
export const BranchPage = loadable(() => import('./BranchPage'));
export const TeamPage = loadable(() => import('./TeamPage'));

// 사용자 페이지 - 트레이너
export const MyWorkPage = loadable(() => import('./MyWorkPage'));
