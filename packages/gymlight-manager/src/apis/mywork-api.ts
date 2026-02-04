import { URLS } from '@/constants';
import { client } from './client';

import {
  IScheduleResponse,
  IScheduleDetailsResponse,
  IScheduleIdParam,
  IScheduleListQuery,
  IRegisterScheduleRequest,
  IUpdateScheduleRequest,
  IPaginationQuery,
  IMyMemberListResponse,
  ICheckClassCompleteRequest,
  IMyExpectedSalaryResponse,
  IMySalarySettlementRequest,
} from '@/types';

const { SCHEDULE, USERS, CLASSES } = URLS.API;

export const registerSchedule = async ({ ...request }: IRegisterScheduleRequest) =>
  client.post(SCHEDULE.CREATE, request);

export const updateSchedule = async ({ scheduleId, ...request }: IUpdateScheduleRequest) =>
  client.patch(`${SCHEDULE.RUD}/${scheduleId}`, request);

export const fetchSchedules = async (params: IScheduleListQuery) =>
  client.get<IScheduleResponse[]>(SCHEDULE.RUD, { params });

export const fetchScheduleDetails = async ({ scheduleId }: IScheduleIdParam) =>
  client.get<IScheduleDetailsResponse>(`${SCHEDULE.RUD}/${scheduleId}`);

export const fetchMyMembers = async (params: IPaginationQuery) =>
  client.get<IMyMemberListResponse>(USERS.MY_MEMBER, { params });

export const checkClassComplete = async ({ scheduleId, signature }: ICheckClassCompleteRequest) => {
  const formData = new FormData();
  formData.append('signature', signature, 'signature.pdf');

  return client.post(`${CLASSES.CHECK}/${scheduleId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchMyExpectedSalary = async () =>
  client.get<IMyExpectedSalaryResponse>(USERS.MY_EXPECTED_SALARY);

export const requestSalarySettlement = async (params: IMySalarySettlementRequest) =>
  client.post<void>(USERS.SALARY_SETTLEMENT, params);
