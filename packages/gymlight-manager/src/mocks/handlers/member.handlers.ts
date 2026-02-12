import { http, delay } from 'msw';

import { URLS } from '@/constants';
import type { MemberStatusType } from '@/types';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import {
  mockMembers,
  mockMemberCategories,
  mockActiveMembers,
  findMemberById,
  searchMembersByName,
  generateMemberDetails,
} from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const memberHandlers = [
  /**
   * GET /api/members - 회원 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.MEMBERS.RUD}`, async ({ request }) => {
    console.log('[MSW] GET /api/members - 회원 목록 조회 호출됨');
    await delay(300);

    const url = new URL(request.url);
    console.log('[MSW] Request URL:', url.toString());
    const { pageNum, pageSize } = parsePaginationParams(url);

    // 필터링 파라미터
    const branchId = url.searchParams.get('branchId');
    const status = url.searchParams.get('status') as MemberStatusType | null;
    const keyword = url.searchParams.get('keyword');

    let filteredMembers = [...mockMembers];

    if (branchId) {
      filteredMembers = filteredMembers.filter((m) => m.branchId === Number(branchId));
    }

    if (status) {
      filteredMembers = filteredMembers.filter((m) => m.status === status);
    }

    if (keyword) {
      filteredMembers = filteredMembers.filter(
        (m) => m.name.includes(keyword) || m.phone.includes(keyword),
      );
    }

    const paginatedList = sliceByPagination(filteredMembers, pageNum, pageSize);

    console.log('[MSW] 회원 목록 응답:', {
      totalElements: filteredMembers.length,
      pageNum,
      pageSize,
      listLength: paginatedList.length
    });

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, filteredMembers.length);
  }),

  /**
   * GET /api/members/active - 활성화된 회원 목록
   */
  http.get(`${API_BASE}${URLS.API.MEMBERS.READ_ACTIVE}`, async ({ request }) => {
    await delay(200);

    const url = new URL(request.url);
    const branchId = url.searchParams.get('branchId');

    let activeMembers = mockActiveMembers;

    if (branchId) {
      const branchIdNum = Number(branchId);
      activeMembers = mockMembers
        .filter((m) => m.status === '활성화' && m.branchId === branchIdNum)
        .map((m) => ({ memberId: m.memberId, name: m.name, phone: m.phone }));
    }

    return wrapResponse(activeMembers);
  }),

  /**
   * GET /api/members/search - 회원 검색 (페이지네이션 응답)
   */
  http.get(`${API_BASE}${URLS.API.MEMBERS.SEARCH}`, async ({ request }) => {
    await delay(200);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);
    const keyword = url.searchParams.get('name') || url.searchParams.get('keyword') || '';

    const results = keyword ? searchMembersByName(keyword) : [];
    const paginatedList = sliceByPagination(results, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, results.length);
  }),

  /**
   * GET /api/members/categories - 회원 카테고리 목록
   */
  http.get(`${API_BASE}${URLS.API.MEMBERS.CATEGORIES}`, async () => {
    await delay(200);
    return wrapResponse(mockMemberCategories);
  }),

  /**
   * GET /api/members/:memberId - 회원 상세 조회 (IMemberDetailsResponse)
   */
  http.get(`${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId`, async ({ params }) => {
    await delay(300);

    const memberId = Number(params.memberId);
    const memberDetails = generateMemberDetails(memberId);

    if (!memberDetails) {
      return notFoundResponse('회원을 찾을 수 없습니다.');
    }

    return wrapResponse(memberDetails);
  }),

  /**
   * GET /api/members/:memberId/info - 회원 상세 정보 조회
   */
  http.get(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.INFO}`,
    async ({ params }) => {
      await delay(300);

      const memberId = Number(params.memberId);
      const memberDetails = generateMemberDetails(memberId);

      if (!memberDetails) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      return wrapResponse(memberDetails);
    },
  ),

  /**
   * POST /api/members/register - 신규 회원 등록
   */
  http.post(`${API_BASE}${URLS.API.MEMBERS.REGISTER_NEW}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as any;
    const { memberInfo } = body;

    const newMemberId = mockMembers.length + 1;
    const today = new Date().toISOString().split('T')[0];

    return wrapResponse({
      memberId: newMemberId,
      memberNo: `${today.replace(/-/g, '')}SG${String(newMemberId).padStart(4, '0')}`,
      name: memberInfo.name,
      status: '활성화' as MemberStatusType,
      startDate: memberInfo.startDate,
      endDate: memberInfo.startDate, // 실제로는 상품에 따라 계산
      registeredAt: today,
      registeredBy: '관리자',
    });
  }),

  /**
   * POST /api/members/:memberId/re-register - 재등록
   */
  http.post(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.RE_REGISTER}`,
    async ({ params }) => {
      await delay(500);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      return wrapResponse({
        message: '재등록이 완료되었습니다.',
        memberId,
      });
    },
  ),

  /**
   * POST /api/members/:memberId/holding - 홀딩 신청
   */
  http.post(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.HOLDING}`,
    async ({ params, request }) => {
      await delay(400);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      const body = (await request.json()) as { days: number; reason: string; startDate: string };

      member.status = '홀딩';

      return wrapResponse({
        holdingId: Date.now(),
        days: body.days,
        reason: body.reason,
        startDate: body.startDate,
        endDate: new Date(
          new Date(body.startDate).getTime() + body.days * 24 * 60 * 60 * 1000,
        ).toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    },
  ),

  /**
   * PUT /api/members/:memberId/update - 회원 정보 수정
   */
  http.put(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.UPDATE}`,
    async ({ params, request }) => {
      await delay(400);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      const body = (await request.json()) as Partial<typeof member>;
      Object.assign(member, body);

      return wrapResponse(member);
    },
  ),

  /**
   * POST /api/members/:memberId/assign-trainer - 트레이너 배정
   */
  http.post(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.ASSIGN_TRAINER}`,
    async ({ params, request }) => {
      await delay(300);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      const body = (await request.json()) as { trainerId: number };
      member.trainerId = body.trainerId;

      return wrapResponse({
        message: '트레이너가 배정되었습니다.',
        trainerId: body.trainerId,
      });
    },
  ),

  /**
   * GET /api/members/:memberId/refundable - 환불 가능 상품 조회
   */
  http.get(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.REFUNDABLE}`,
    async ({ params }) => {
      await delay(200);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      return wrapResponse([
        {
          purchasedProductId: memberId * 10 + 1,
          isRefundable: true,
          isTransferable: true,
          productName: '3개월 회원권',
          productId: 2,
        },
      ]);
    },
  ),

  /**
   * POST /api/members/:memberId/request-refund - 환불 요청
   */
  http.post(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.REQUEST_REFUND}`,
    async ({ params }) => {
      await delay(500);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      return wrapResponse({
        message: '환불 요청이 완료되었습니다.',
      });
    },
  ),

  /**
   * POST /api/members/:memberId/register-transfer - 양도 등록
   */
  http.post(
    `${API_BASE}${URLS.API.MEMBERS.RUD}/:memberId/${URLS.API.MEMBERS.PATH_SEGMENT.REGISTER_TRANSFER}`,
    async ({ params }) => {
      await delay(500);

      const memberId = Number(params.memberId);
      const member = findMemberById(memberId);

      if (!member) {
        return notFoundResponse('회원을 찾을 수 없습니다.');
      }

      return wrapResponse({
        message: '양도가 완료되었습니다.',
        newMemberId: mockMembers.length + 1,
      });
    },
  ),
];
