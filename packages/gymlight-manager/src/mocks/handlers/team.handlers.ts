import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import { mockTeams, findTeamById, generateTeamStaffs } from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const teamHandlers = [
  /**
   * GET /api/teams - 팀 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.TEAMS.RUD}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    // 필터링 파라미터
    const branchId = url.searchParams.get('branchId');

    let filteredTeams = [...mockTeams];

    if (branchId) {
      filteredTeams = filteredTeams.filter((t) => t.branchId === Number(branchId));
    }

    const paginatedList = sliceByPagination(filteredTeams, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, filteredTeams.length);
  }),

  /**
   * GET /api/teams/:teamId - 팀 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.TEAMS.RUD}/:teamId`, async ({ params }) => {
    await delay(200);

    const teamId = Number(params.teamId);
    const team = findTeamById(teamId);

    if (!team) {
      return notFoundResponse('팀을 찾을 수 없습니다.');
    }

    return wrapResponse(team);
  }),

  /**
   * GET /api/teams/:teamId/members - 팀 멤버 목록 조회
   */
  http.get(
    `${API_BASE}${URLS.API.TEAMS.RUD}/:teamId/${URLS.API.TEAMS.PATH_SEGMENT.MEMBERS}`,
    async ({ request, params }) => {
      await delay(300);

      const teamId = Number(params.teamId);
      const team = findTeamById(teamId);

      if (!team) {
        return notFoundResponse('팀을 찾을 수 없습니다.');
      }

      const url = new URL(request.url);
      const { pageNum, pageSize } = parsePaginationParams(url);

      const teamStaffs = generateTeamStaffs(teamId);
      const paginatedList = sliceByPagination(teamStaffs, pageNum, pageSize);

      return wrapPaginationResponse(paginatedList, pageNum, pageSize, teamStaffs.length);
    },
  ),

  /**
   * POST /api/teams/create - 팀 생성
   */
  http.post(`${API_BASE}${URLS.API.TEAMS.CREATE}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as {
      name: string;
      department: '트레이너' | 'FC';
      teamLeaderId: number;
      teamMemberIds: number[];
      branchId: number;
    };

    const newTeam = {
      teamId: mockTeams.length + 1,
      name: body.name,
      department: body.department,
      branchId: body.branchId,
      teamLeaderId: body.teamLeaderId,
      teamLeaderName: '팀장',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockTeams.push(newTeam);

    return wrapResponse(newTeam);
  }),

  /**
   * PUT /api/teams/:teamId - 팀 수정
   */
  http.put(`${API_BASE}${URLS.API.TEAMS.RUD}/:teamId`, async ({ params, request }) => {
    await delay(400);

    const teamId = Number(params.teamId);
    const team = findTeamById(teamId);

    if (!team) {
      return notFoundResponse('팀을 찾을 수 없습니다.');
    }

    const body = (await request.json()) as {
      name: string;
      teamMemberIds: number[];
    };

    team.name = body.name;
    team.updatedAt = new Date().toISOString();

    return wrapResponse(team);
  }),

  /**
   * DELETE /api/teams/:teamId - 팀 삭제
   */
  http.delete(`${API_BASE}${URLS.API.TEAMS.RUD}/:teamId`, async ({ params }) => {
    await delay(400);

    const teamId = Number(params.teamId);
    const teamIndex = mockTeams.findIndex((t) => t.teamId === teamId);

    if (teamIndex === -1) {
      return notFoundResponse('팀을 찾을 수 없습니다.');
    }

    mockTeams.splice(teamIndex, 1);

    return wrapResponse({ message: '팀이 삭제되었습니다.' });
  }),
];
