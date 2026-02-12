import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import { getCurrentUser, mockMembers } from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const userHandlers = [
  /**
   * GET /api/users/me - 현재 사용자 정보 조회
   */
  http.get(`${API_BASE}${URLS.API.USERS.ME}`, async () => {
    await delay(200);
    return wrapResponse(getCurrentUser());
  }),

  /**
   * GET /api/users/me/members - 내 담당 회원 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.USERS.MY_MEMBER}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    // 현재 사용자가 담당하는 회원 필터링 (트레이너인 경우)
    const currentUser = getCurrentUser();
    const myMembers = mockMembers.filter((m) => m.trainerId === currentUser.userId);
    const paginatedList = sliceByPagination(myMembers, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, myMembers.length);
  }),

  /**
   * GET /api/users/me/performance - 내 실적 조회
   */
  http.get(`${API_BASE}${URLS.API.USERS.MY_PERFORMANCE}`, async () => {
    await delay(300);

    return wrapResponse({
      performanceId: 1,
      otCount: 15,
      ptCount: 45,
      ptRevenue: 8500000,
      membershipPoints: 320,
      isWalkinBenefit: false,
      isNew: false,
    });
  }),

  /**
   * GET /api/users/me/expected-salary - 예상 급여 조회
   */
  http.get(`${API_BASE}${URLS.API.USERS.MY_EXPECTED_SALARY}`, async () => {
    await delay(300);

    return wrapResponse({
      totalSalary: 4500000,
      baseSalary: 3000000,
      otIncentive: 450000,
      ptIncentive: 850000,
      generalIncentive: 200000,
      isWalkinBenefit: false,
    });
  }),

  /**
   * POST /api/users/me/salary - 급여 정산 요청
   */
  http.post(`${API_BASE}${URLS.API.USERS.SALARY_SETTLEMENT}`, async () => {
    await delay(500);

    return wrapResponse({
      message: '급여 정산 요청이 완료되었습니다.',
    });
  }),
];
