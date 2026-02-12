import { http, delay } from 'msw';

import { URLS } from '@/constants';
import type { UserRoleType, UserStatusType } from '@/types';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import {
  mockStaffs,
  mockLeaderTrainers,
  mockLeaderFcs,
  mockTrainers,
  mockFcs,
  findStaffById,
} from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const staffHandlers = [
  /**
   * GET /api/staffs - 직원 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.RUD}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    // 필터링 파라미터
    const branchId = url.searchParams.get('branchId');
    const role = url.searchParams.get('role') as UserRoleType | null;
    const status = url.searchParams.get('status') as UserStatusType | null;

    let filteredStaffs = [...mockStaffs];

    if (branchId) {
      filteredStaffs = filteredStaffs.filter((s) => s.branchId === Number(branchId));
    }

    if (role) {
      filteredStaffs = filteredStaffs.filter((s) => s.role === role);
    }

    if (status) {
      filteredStaffs = filteredStaffs.filter((s) => s.status === status);
    }

    const paginatedList = sliceByPagination(filteredStaffs, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, filteredStaffs.length);
  }),

  /**
   * GET /api/staffs/:staffId - 직원 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.RUD}/:staffId`, async ({ params }) => {
    await delay(200);

    const staffId = Number(params.staffId);
    const staff = findStaffById(staffId);

    if (!staff) {
      return notFoundResponse('직원을 찾을 수 없습니다.');
    }

    return wrapResponse(staff);
  }),

  /**
   * GET /api/staffs/leader-trainer - 팀장 트레이너 목록
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.LEADER_TRAINER}`, async () => {
    await delay(200);
    return wrapResponse(mockLeaderTrainers);
  }),

  /**
   * GET /api/staffs/leader-fc - 팀장 FC 목록
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.LEADER_FC}`, async () => {
    await delay(200);
    return wrapResponse(mockLeaderFcs);
  }),

  /**
   * GET /api/staffs/trainers - 트레이너 목록
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.TRAINER}`, async () => {
    await delay(200);
    return wrapResponse(mockTrainers);
  }),

  /**
   * GET /api/staffs/fc - FC 목록
   */
  http.get(`${API_BASE}${URLS.API.STAFFS.FC}`, async () => {
    await delay(200);
    return wrapResponse(mockFcs);
  }),

  /**
   * POST /api/staffs/create - 직원 생성 (가입 승인)
   */
  http.post(`${API_BASE}${URLS.API.STAFFS.CREATE}`, async () => {
    await delay(500);

    return wrapResponse({
      message: '직원 등록이 완료되었습니다.',
    });
  }),

  /**
   * PUT /api/staffs/:staffId/update - 직원 정보 수정
   */
  http.put(
    `${API_BASE}${URLS.API.STAFFS.RUD}/:staffId/${URLS.API.STAFFS.PATH_SEGMENT.UPDATE}`,
    async ({ params, request }) => {
      await delay(400);

      const staffId = Number(params.staffId);
      const staff = findStaffById(staffId);

      if (!staff) {
        return notFoundResponse('직원을 찾을 수 없습니다.');
      }

      const body = (await request.json()) as {
        staffStatus: UserStatusType;
        branchName: string;
        staffRoleName: UserRoleType;
      };

      staff.status = body.staffStatus;
      staff.role = body.staffRoleName;

      return wrapResponse(staff);
    },
  ),
];
