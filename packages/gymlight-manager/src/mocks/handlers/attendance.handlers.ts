import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import { mockTodayAttendances, searchMembersForAttendance, createAttendance } from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const attendanceHandlers = [
  /**
   * GET /api/attendances - 출석 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.ATTENDANCES.RUD}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    const paginatedList = sliceByPagination(mockTodayAttendances, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, mockTodayAttendances.length);
  }),

  /**
   * GET /api/attendances/search - 출석용 회원 검색 (전화번호 뒷자리)
   */
  http.get(`${API_BASE}${URLS.API.ATTENDANCES.SEARCH}`, async ({ request }) => {
    await delay(200);

    const url = new URL(request.url);
    const phoneSuffix = url.searchParams.get('phoneSuffix') || '';

    if (phoneSuffix.length < 4) {
      return wrapResponse([]);
    }

    const results = searchMembersForAttendance(phoneSuffix);

    return wrapResponse(results);
  }),

  /**
   * POST /api/attendances/check-in - 출석 체크
   */
  http.post(`${API_BASE}${URLS.API.ATTENDANCES.CREATE}`, async ({ request }) => {
    await delay(300);

    const body = (await request.json()) as { memberId: number };
    const attendance = createAttendance(body.memberId);

    if (!attendance) {
      return notFoundResponse('회원을 찾을 수 없습니다.');
    }

    return wrapResponse(attendance);
  }),
];
