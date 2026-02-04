import { URLS } from '@/constants';

import { client } from './client';

import type {
  ITeamListQuery,
  IUpdateTeamRequest,
  ITeamStaffListQuery,
  ITeamListResponse,
  ITeamStaffListResponse,
  ICreateTeamRequest,
} from '@/types';

const {
  API: { TEAMS },
} = URLS;

export const fetchTeams = async (params: ITeamListQuery) =>
  client.get<ITeamListResponse>(TEAMS.RUD, {
    params,
  });

export const fetchTeamStaffs = async ({ teamId, sort, pageNum, pageSize }: ITeamStaffListQuery) =>
  client.get<ITeamStaffListResponse>(`${TEAMS.RUD}/${teamId}/${TEAMS.PATH_SEGMENT.MEMBERS}`, {
    params: { sort, pageNum, pageSize },
  });

export const createTeam = async ({ ...request }: ICreateTeamRequest) =>
  client.post<void>(TEAMS.CREATE, request);

export const updateTeam = async ({ teamId, ...request }: IUpdateTeamRequest) =>
  client.patch(`${TEAMS.RUD}/${teamId}`, request);
