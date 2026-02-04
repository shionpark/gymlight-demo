import { URLS } from '@/constants';
import { client } from './client';
import type {
  IAssignMemberToLockerRequest,
  ICreateLockerGroupRequest,
  ILockerListQuery,
  ILockerGroupResponse,
  ILockerResponse,
  IUpdateLockerGroupRequest,
  IUpdateLockerRequest,
  ILockerGroupDetailListQuery,
  ILockerDetailListQuery,
  ILockerGroupDetailResponse,
  ILockerDetailResponse,
  IUnassignMemberFromLockerRequest,
} from '@/types';

const {
  API: { LOCKERS },
} = URLS;

export const fetchLockerGroups = async ({ branchName }: ILockerListQuery) =>
  client.get<ILockerGroupResponse[]>(LOCKERS.GROUPS, {
    params: { branchName },
  });

export const fetchLockerGroupDetail = async ({
  lockerGroupId,
  branchName,
}: ILockerGroupDetailListQuery) =>
  client.get<ILockerGroupDetailResponse>(`${LOCKERS.GROUPS}/${lockerGroupId}`, {
    params: { branchName },
  });

export const fetchLockers = async ({ branchName }: ILockerListQuery) =>
  client.get<ILockerResponse>(LOCKERS.RUD, {
    params: { branchName },
  });

export const fetchLockerDetail = async ({ lockerId, branchName }: ILockerDetailListQuery) =>
  client.get<ILockerDetailResponse>(`${LOCKERS.RUD}/${lockerId}`, {
    params: { branchName },
  });

export const createLockerGroup = ({ ...request }: ICreateLockerGroupRequest) =>
  client.post(LOCKERS.CREATE_GROUP, request);

export const updateLockerGroup = async ({ lockerGroupId, ...request }: IUpdateLockerGroupRequest) =>
  client.patch(`${LOCKERS.GROUPS}/${lockerGroupId}`, request);

export const updateLocker = async ({ lockerId, ...request }: IUpdateLockerRequest) =>
  client.patch(`${LOCKERS.RUD}/${lockerId}`, request);

export const assignMemberToLocker = async ({
  lockerId,
  ...request
}: IAssignMemberToLockerRequest) =>
  client.patch(`${LOCKERS.RUD}/${lockerId}/${LOCKERS.ASSIGN}`, request);

export const unassignMemberFromLocker = async ({
  lockerId,
  ...request
}: IUnassignMemberFromLockerRequest) =>
  client.patch(`${LOCKERS.RUD}/${lockerId}/${LOCKERS.UNASSIGN}`, request);
