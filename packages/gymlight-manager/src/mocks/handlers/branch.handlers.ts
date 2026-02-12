import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import { mockBranches, mockBranchNames, findBranchById } from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const branchHandlers = [
  /**
   * GET /api/branches - 지점 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.BRANCHES.RUD}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    const paginatedList = sliceByPagination(mockBranches, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, mockBranches.length);
  }),

  /**
   * GET /api/branches/names - 지점 이름 목록 조회
   */
  http.get(`${API_BASE}/${URLS.API.BRANCHES.NAMES}`, async () => {
    await delay(200);
    return wrapResponse(mockBranchNames);
  }),

  /**
   * GET /api/branches/:branchId - 지점 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.BRANCHES.RUD}/:branchId`, async ({ params }) => {
    await delay(200);

    const branchId = Number(params.branchId);
    const branch = findBranchById(branchId);

    if (!branch) {
      return notFoundResponse('지점을 찾을 수 없습니다.');
    }

    return wrapResponse(branch);
  }),

  /**
   * POST /api/branches/create - 지점 생성
   */
  http.post(`${API_BASE}${URLS.API.BRANCHES.CREATE}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as {
      name: string;
      code: string;
      address: string;
      tel: string;
      openDate: string;
    };

    const newBranch = {
      branchId: mockBranches.length + 1,
      number: mockBranches.length + 1,
      name: body.name,
      code: body.code,
      address: body.address,
      tel: body.tel,
      openDate: body.openDate,
      status: '영업중' as const,
      staffCount: 0,
      memberCount: 0,
      managerId: 1,
      managerName: '관리자',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockBranches.push(newBranch);

    return wrapResponse(newBranch);
  }),

  /**
   * PUT /api/branches/:branchId - 지점 정보 수정
   */
  http.put(`${API_BASE}${URLS.API.BRANCHES.RUD}/:branchId`, async ({ params, request }) => {
    await delay(400);

    const branchId = Number(params.branchId);
    const branch = findBranchById(branchId);

    if (!branch) {
      return notFoundResponse('지점을 찾을 수 없습니다.');
    }

    const body = (await request.json()) as Partial<typeof branch>;

    // 지점 정보 업데이트 (실제로는 데이터 변경)
    Object.assign(branch, body, { updatedAt: new Date().toISOString() });

    return wrapResponse(branch);
  }),

  /**
   * PATCH /api/branches/:branchId - 지점 상태 수정
   */
  http.patch(`${API_BASE}${URLS.API.BRANCHES.RUD}/:branchId`, async ({ params, request }) => {
    await delay(300);

    const branchId = Number(params.branchId);
    const branch = findBranchById(branchId);

    if (!branch) {
      return notFoundResponse('지점을 찾을 수 없습니다.');
    }

    const body = (await request.json()) as { status: typeof branch.status };

    branch.status = body.status;
    branch.updatedAt = new Date().toISOString();

    return wrapResponse(branch);
  }),

  /**
   * DELETE /api/branches/:branchId - 지점 삭제
   */
  http.delete(`${API_BASE}${URLS.API.BRANCHES.RUD}/:branchId`, async ({ params }) => {
    await delay(400);

    const branchId = Number(params.branchId);
    const branchIndex = mockBranches.findIndex((b) => b.branchId === branchId);

    if (branchIndex === -1) {
      return notFoundResponse('지점을 찾을 수 없습니다.');
    }

    mockBranches.splice(branchIndex, 1);

    return wrapResponse({ message: '지점이 삭제되었습니다.' });
  }),
];
