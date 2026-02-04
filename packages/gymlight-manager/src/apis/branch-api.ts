import { URLS } from '@/constants';

import { client } from './client';
import type {
  IBranchListQuery,
  IDeleteBranchRequest,
  ICreateBranchRequest,
  IUpdateBranchInfoRequest,
  IUpdateBranchStatusRequest,
  IBranchNameResponse,
  IBranchListResponse,
} from '@/types';

const {
  API: { BRANCHES },
} = URLS;

export const fetchBranches = async (params: IBranchListQuery) =>
  client.get<IBranchListResponse>(BRANCHES.RUD, {
    params,
  });

export const createBranch = async ({ ...request }: ICreateBranchRequest) =>
  client.post<void>(BRANCHES.CREATE, request);

export const updateBranchInfo = async ({ branchId, ...request }: IUpdateBranchInfoRequest) =>
  client.patch<void>(`${BRANCHES.RUD}/${branchId}`, request);

export const updateBranchStatus = async ({ branchId, ...request }: IUpdateBranchStatusRequest) =>
  client.patch<void>(`${BRANCHES.RUD}/${branchId}/status`, request);

export const deleteBranch = async ({ branchId }: IDeleteBranchRequest) =>
  client.patch<void>(`${BRANCHES.RUD}/${branchId}/delete`);

export const fetchBranchNames = async () => client.get<IBranchNameResponse[]>(BRANCHES.NAMES);
