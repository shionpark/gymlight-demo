import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import {
  mockLockerGroups,
  findLockerGroupById,
  findLockerById,
  getLockerGroupsByBranch,
} from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const lockerHandlers = [
  /**
   * GET /api/locker-groups - 락커 그룹 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.LOCKERS.GROUPS}`, async ({ request }) => {
    console.log('[MSW] GET /api/locker-groups - 락커 그룹 목록 조회 호출됨');
    await delay(300);

    const url = new URL(request.url);
    const branchName = url.searchParams.get('branchName') || '';

    const groups = branchName ? getLockerGroupsByBranch(branchName) : mockLockerGroups;

    return wrapResponse(groups);
  }),

  /**
   * GET /api/locker-groups/:lockerGroupId - 락커 그룹 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.LOCKERS.GROUPS}/:lockerGroupId`, async ({ params }) => {
    console.log('[MSW] GET /api/locker-groups/:lockerGroupId - 락커 그룹 상세 조회 호출됨');
    await delay(200);

    const lockerGroupId = Number(params.lockerGroupId);
    const groupDetail = findLockerGroupById(lockerGroupId);

    if (!groupDetail) {
      return notFoundResponse('락커 그룹을 찾을 수 없습니다.');
    }

    return wrapResponse(groupDetail);
  }),

  /**
   * GET /api/lockers - 락커 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.LOCKERS.RUD}`, async () => {
    console.log('[MSW] GET /api/lockers - 락커 목록 조회 호출됨');
    await delay(200);

    // 모든 그룹의 락커를 합쳐서 반환
    const allLockers = mockLockerGroups.flatMap((group) => {
      const detail = findLockerGroupById(group.lockerGroupId);
      return detail?.lockers || [];
    });

    return wrapResponse(allLockers);
  }),

  /**
   * GET /api/lockers/:lockerId - 락커 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.LOCKERS.RUD}/:lockerId`, async ({ params }) => {
    await delay(200);

    const lockerId = Number(params.lockerId);

    // lockerId가 0이면 빈 응답 (초기 상태)
    if (lockerId === 0) {
      return wrapResponse(null);
    }

    const locker = findLockerById(lockerId);

    if (!locker) {
      return notFoundResponse('락커를 찾을 수 없습니다.');
    }

    return wrapResponse(locker);
  }),

  /**
   * POST /api/locker-groups/create - 락커 그룹 생성
   */
  http.post(`${API_BASE}${URLS.API.LOCKERS.CREATE_GROUP}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as {
      name: string;
      quantity: number;
      rows: number;
      columns: number;
      startNumber: number;
      direction: '가로' | '세로';
      branchId: number;
    };

    const newGroup = {
      lockerGroupId: mockLockerGroups.length + 1,
      name: body.name,
      quantity: body.quantity,
      startNumber: body.startNumber,
      availableCount: body.quantity,
      inUseCount: 0,
      reservedCount: 0,
      damagedCount: 0,
      branchId: body.branchId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockLockerGroups.push(newGroup);

    return wrapResponse(newGroup);
  }),

  /**
   * PATCH /api/locker-groups/:lockerGroupId - 락커 그룹 수정
   */
  http.patch(
    `${API_BASE}${URLS.API.LOCKERS.GROUPS}/:lockerGroupId`,
    async ({ params, request }) => {
      await delay(400);

      const lockerGroupId = Number(params.lockerGroupId);
      const group = mockLockerGroups.find((g) => g.lockerGroupId === lockerGroupId);

      if (!group) {
        return notFoundResponse('락커 그룹을 찾을 수 없습니다.');
      }

      const body = (await request.json()) as { name: string };
      group.name = body.name;
      group.updatedAt = new Date().toISOString();

      return wrapResponse(group);
    },
  ),

  /**
   * PATCH /api/lockers/:lockerId - 락커 수정
   */
  http.patch(`${API_BASE}${URLS.API.LOCKERS.RUD}/:lockerId`, async ({ params, request }) => {
    await delay(400);

    const lockerId = Number(params.lockerId);
    const locker = findLockerById(lockerId);

    if (!locker) {
      return notFoundResponse('락커를 찾을 수 없습니다.');
    }

    const body = (await request.json()) as {
      status?: string;
      password?: string;
      memo?: string;
    };

    return wrapResponse({
      ...locker,
      ...body,
    });
  }),

  /**
   * PATCH /api/lockers/:lockerId/assign-member - 락커 회원 배정
   */
  http.patch(
    `${API_BASE}${URLS.API.LOCKERS.RUD}/:lockerId/${URLS.API.LOCKERS.ASSIGN}`,
    async ({ params, request }) => {
      await delay(400);

      const lockerId = Number(params.lockerId);
      const locker = findLockerById(lockerId);

      if (!locker) {
        return notFoundResponse('락커를 찾을 수 없습니다.');
      }

      const body = (await request.json()) as {
        memberId: number;
        password: string;
        memo: string;
      };

      return wrapResponse({
        ...locker,
        status: '사용 중',
        memberId: body.memberId,
        memberName: `회원${body.memberId}`,
        password: body.password,
        memo: body.memo,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      });
    },
  ),

  /**
   * PATCH /api/lockers/:lockerId/unassign-member - 락커 회원 해제
   */
  http.patch(
    `${API_BASE}${URLS.API.LOCKERS.RUD}/:lockerId/${URLS.API.LOCKERS.UNASSIGN}`,
    async ({ params }) => {
      await delay(400);

      const lockerId = Number(params.lockerId);
      const locker = findLockerById(lockerId);

      if (!locker) {
        return notFoundResponse('락커를 찾을 수 없습니다.');
      }

      return wrapResponse({
        ...locker,
        status: '사용 가능',
        memberId: 0,
        memberName: '',
        password: '',
        memo: '',
        startDate: '',
        endDate: '',
      });
    },
  ),
];
