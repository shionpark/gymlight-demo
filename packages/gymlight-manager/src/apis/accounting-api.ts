import { URLS } from '@/constants';

import { client } from './client';

import type {
  IPtIncentiveRateWithMembershipPointResponse,
  IPtIncentiveRateWithoutMembershipPointResponse,
  ISalarySettlementListQuery,
  ISalarySettlementListResponse,
  ISalaryVariablesResponse,
  IUpdatePtIncentiveRateWithMembershipPointRequest,
  IUpdatePtIncentiveRateWithoutMembershipPointRequest,
  IUpdateSalarySettlementRequest,
  IUpdateSalaryVariablesRequest,
} from '@/types';

const {
  API: { ACCOUNTING },
} = URLS;

export const fetchSalaryVariables = async () =>
  client.get<ISalaryVariablesResponse>(ACCOUNTING.SALARY_VARIABLES.R);

export const fetchPtIncentiveRateWithMembershipPoints = async () =>
  client.get<IPtIncentiveRateWithMembershipPointResponse[]>(
    ACCOUNTING.SALARY_VARIABLES.PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINTS,
  );

export const updatePtIncentiveRateWithMembershipPoints = async ({
  ptIncentiveRateWithMembershipPointId,
  ...params
}: IUpdatePtIncentiveRateWithMembershipPointRequest) =>
  client.patch<IPtIncentiveRateWithMembershipPointResponse>(
    `${ACCOUNTING.SALARY_VARIABLES.PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINTS}/${ptIncentiveRateWithMembershipPointId}`,
    { ...params },
  );

export const fetchPtIncentiveRateWithoutMembershipPoints = async () =>
  client.get<IPtIncentiveRateWithoutMembershipPointResponse[]>(
    ACCOUNTING.SALARY_VARIABLES.PT_INCENTIVE_RATE_WITHOUT_MEMBERSHIP_POINTS,
  );

export const updatePtIncentiveRateWithoutMembershipPoints = async ({
  ptIncentiveRateWithoutMembershipPointId,
  ...params
}: IUpdatePtIncentiveRateWithoutMembershipPointRequest) =>
  client.patch<IPtIncentiveRateWithMembershipPointResponse>(
    `${ACCOUNTING.SALARY_VARIABLES.PT_INCENTIVE_RATE_WITHOUT_MEMBERSHIP_POINTS}/${ptIncentiveRateWithoutMembershipPointId}`,
    { ...params },
  );

export const updateSalaryVariables = async ({
  salaryVariablesId,
  ...request
}: IUpdateSalaryVariablesRequest) =>
  client.patch<void>(`${ACCOUNTING.SALARY_VARIABLES.UD}/${salaryVariablesId}`, request);

export const fetchSalarySettlementList = async (params: ISalarySettlementListQuery) =>
  client.get<ISalarySettlementListResponse>(ACCOUNTING.SALARY_SETTLEMENT_LIST, { params });

export const updateSalarySettlement = async ({
  salarySettlementId,
  ...request
}: IUpdateSalarySettlementRequest) =>
  client.patch<void>(`${ACCOUNTING.SALARY_SETTLEMENT_UPDATE}/${salarySettlementId}`, request);
