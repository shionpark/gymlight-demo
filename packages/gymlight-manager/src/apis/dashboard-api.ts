import { client } from './client';

import { URLS } from '@/constants';

import type {
  IAttendanceDashboardResponse,
  IBranchDashboardResponse,
  IMemberDashboardResponse,
  IRecentNoticeResponse,
  ISalesDashboardResponse,
  ITrainerPerformanceDashboardResponse,
  IUserSummaryResponse,
} from '@/types';

const {
  API: { DASHBOARD },
} = URLS;

export const fetchBranchDashboard = async () =>
  client.get<IBranchDashboardResponse[]>(DASHBOARD.BRANCH);

export const fetchNoticeDashboard = async () => client.get<IRecentNoticeResponse>(DASHBOARD.NOTICE);

export const fetchMemberDashboard = async () =>
  client.get<IMemberDashboardResponse>(DASHBOARD.MEMBERS);

export const fetchSalesDashboard = async () => client.get<ISalesDashboardResponse>(DASHBOARD.SALES);

export const fetchVisitDashboard = async () =>
  client.get<IAttendanceDashboardResponse>(DASHBOARD.VISIT);

export const fetchUserDashboard = async () => client.get<IUserSummaryResponse>(DASHBOARD.USER);

export const fetchPerformanceDashboard = async () =>
  client.get<ITrainerPerformanceDashboardResponse[]>(DASHBOARD.PERFORMANCE);
