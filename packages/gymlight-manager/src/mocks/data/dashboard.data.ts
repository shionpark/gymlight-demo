import type {
  IBranchDashboardResponse,
  IRecentNoticeResponse,
  IMemberDashboardResponse,
  ISalesDashboardResponse,
  IAttendanceDashboardResponse,
  IUserSummaryResponse,
  ITrainerPerformanceDashboardResponse,
  IMemberStatisticResponse,
  ISalesStatisticResponse,
  UserRoleType,
  ProductCategoryType,
} from '@/types';

import { mockBranches } from './branches.data';
import { mockCurrentUser } from './users.data';

/**
 * 대시보드 - 지점 정보 (배열로 반환)
 */
export const mockBranchDashboard: IBranchDashboardResponse[] = mockBranches.map((branch) => ({
  branchId: branch.branchId,
  name: branch.name,
  number: branch.number,
  status: branch.status,
  createdAt: branch.createdAt,
  updatedAt: branch.updatedAt,
}));

/**
 * 대시보드 - 최근 공지사항
 */
export const mockRecentNotices: IRecentNoticeResponse[] = [
  { noticeId: 1, title: '[공지] 2월 운영시간 안내' },
  { noticeId: 2, title: '[이벤트] 신규 회원 등록 이벤트' },
  { noticeId: 3, title: '[공지] 시설 점검 안내' },
];

/**
 * 대시보드 - 회원 통계
 */
export const mockMemberDashboard: IMemberDashboardResponse = {
  activeMembersCount: 156,
  newMembersTodayCount: 3,
  expiringMembersThisMonthCount: 12,
  lastUpdated: new Date().toISOString(),
};

/**
 * 대시보드 - 매출 통계
 */
export const mockSalesDashboard: ISalesDashboardResponse = {
  totalPaymentAmountThisMonth: 45680000,
  lastUpdated: new Date().toISOString(),
};

/**
 * 대시보드 - 출석 통계
 */
export const mockAttendanceDashboard: IAttendanceDashboardResponse = {
  attendedMembersTodayCount: 47,
  lastUpdated: new Date().toISOString(),
};

/**
 * 대시보드 - 현재 사용자 요약
 */
export const mockUserSummary: IUserSummaryResponse = {
  userId: mockCurrentUser.userId,
  name: mockCurrentUser.name,
  phone: mockCurrentUser.phone,
  birthDate: mockCurrentUser.birthDate,
  age: mockCurrentUser.age,
  role: mockCurrentUser.role as UserRoleType,
  branchId: mockCurrentUser.branchId,
  branchName: mockBranches[0].name,
};

/**
 * 대시보드 - 트레이너 실적
 */
export const mockTrainerPerformances: ITrainerPerformanceDashboardResponse[] = [
  {
    trainerId: 3,
    trainerName: '박팀장',
    role: '팀장 트레이너' as UserRoleType,
    branchId: 1,
    branchName: '서강대점',
    ptRevenue: 12500000,
    lastUpdated: new Date().toISOString(),
  },
  {
    trainerId: 4,
    trainerName: '이트레이너',
    role: '트레이너' as UserRoleType,
    branchId: 1,
    branchName: '서강대점',
    ptRevenue: 8700000,
    lastUpdated: new Date().toISOString(),
  },
  {
    trainerId: 5,
    trainerName: '최트레이너',
    role: '트레이너' as UserRoleType,
    branchId: 2,
    branchName: '명지대점',
    ptRevenue: 9200000,
    lastUpdated: new Date().toISOString(),
  },
];

/**
 * 회원 가입 유형별 통계
 */
export const mockMemberStatistics: IMemberStatisticResponse[] = [
  { joinType: '기존 신규', totalRegister: 45 },
  { joinType: '소개', totalRegister: 32 },
  { joinType: '워크인', totalRegister: 28 },
  { joinType: '이전 만료', totalRegister: 15 },
  { joinType: '당월 만료', totalRegister: 8 },
  { joinType: '사전 재등록', totalRegister: 12 },
];

/**
 * 상품 유형별 매출 통계
 */
export const mockSalesStatistics: ISalesStatisticResponse[] = [
  { productType: '회원권' as ProductCategoryType, totalRevenue: 25800000 },
  { productType: 'PT' as ProductCategoryType, totalRevenue: 15400000 },
  { productType: '패키지' as ProductCategoryType, totalRevenue: 8500000 },
  { productType: '운동복' as ProductCategoryType, totalRevenue: 1200000 },
  { productType: '락커' as ProductCategoryType, totalRevenue: 780000 },
];
