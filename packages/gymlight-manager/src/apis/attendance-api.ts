import { URLS } from '@/constants';

import { client } from './client';

import type {
  IAttendanceListQuery,
  ICheckedMemberListResponse,
  IPhoneSuffixQuery,
  ISearchMemberByPhoneSuffixResponse,
  IMemberIdParams,
} from '@/types';

const {
  API: { ATTENDANCES },
} = URLS;

export const fetchAttendances = async (params: IAttendanceListQuery) =>
  client.get<ICheckedMemberListResponse>(ATTENDANCES.RUD, { params });

export const checkInAttendance = async ({ ...request }: IMemberIdParams) => {
  client.post<void>(ATTENDANCES.CREATE, request);
};

export const searchAttendances = async (params: IPhoneSuffixQuery) =>
  client.get<ISearchMemberByPhoneSuffixResponse[]>(ATTENDANCES.SEARCH, { params });
