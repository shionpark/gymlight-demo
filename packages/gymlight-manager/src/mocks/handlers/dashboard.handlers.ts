import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse } from '../utils/response.utils';
import {
  mockBranchDashboard,
  mockRecentNotices,
  mockMemberDashboard,
  mockSalesDashboard,
  mockAttendanceDashboard,
  mockUserSummary,
  mockTrainerPerformances,
} from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const dashboardHandlers = [
  /**
   * GET /api/dashboard/branches - 지점 대시보드 정보
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.BRANCH}`, async () => {
    await delay(200);
    return wrapResponse(mockBranchDashboard);
  }),

  /**
   * GET /api/dashboard/notice - 최근 공지사항
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.NOTICE}`, async () => {
    await delay(200);
    return wrapResponse(mockRecentNotices);
  }),

  /**
   * GET /api/dashboard/members - 회원 통계
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.MEMBERS}`, async () => {
    await delay(200);
    return wrapResponse(mockMemberDashboard);
  }),

  /**
   * GET /api/dashboard/sales - 매출 통계
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.SALES}`, async () => {
    await delay(200);
    return wrapResponse(mockSalesDashboard);
  }),

  /**
   * GET /api/dashboard/visits - 출석 통계
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.VISIT}`, async () => {
    await delay(200);
    return wrapResponse(mockAttendanceDashboard);
  }),

  /**
   * GET /api/dashboard/user - 사용자 요약
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.USER}`, async () => {
    await delay(200);
    return wrapResponse(mockUserSummary);
  }),

  /**
   * GET /api/dashboard/performances - 트레이너 실적
   */
  http.get(`${API_BASE}${URLS.API.DASHBOARD.PERFORMANCE}`, async () => {
    await delay(300);
    return wrapResponse(mockTrainerPerformances);
  }),
];
