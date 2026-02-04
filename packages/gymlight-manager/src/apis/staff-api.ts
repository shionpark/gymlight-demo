import { client } from './client';

import { URLS } from '@/constants';
import type {
  IUpdateStaffRequest,
  IFcResponse,
  ILeaderFcResponse,
  ILeaderTrainerResponse,
  IStaffListQuery,
  IStaffListResponse,
  ITrainerResponse,
} from '@/types';

const {
  API: { STAFFS },
} = URLS;

export const fetchStaffs = async (params: IStaffListQuery) =>
  client.get<IStaffListResponse>(STAFFS.RUD, {
    params,
  });

export const updateStaff = async ({ staffId, ...request }: IUpdateStaffRequest) =>
  client.patch(`${STAFFS.RUD}/${staffId}/${STAFFS.PATH_SEGMENT.UPDATE}`, request);

export const fetchLeaderTrainerList = async () =>
  client.get<ILeaderTrainerResponse[]>(STAFFS.LEADER_TRAINER);

export const fetchLeaderFcList = async () => client.get<ILeaderFcResponse[]>(STAFFS.LEADER_FC);

export const fetchTrainerList = async () => client.get<ITrainerResponse[]>(STAFFS.TRAINER);

export const fetchFcList = async () => client.get<IFcResponse[]>(STAFFS.FC);
