import { URLS } from '@/constants';
import { client } from './client';

import type {
  IActiveMemberResponse,
  IAssignTrainerToMemberRequest,
  ICreateMemberResponse,
  IHoldingRequest,
  IMemberIdParams,
  IMemberListQuery,
  IMemberListResponse,
  IMemberSearchListQuery,
  IPurchaseAdditionalOptionRequest,
  IRefundableProductResponse,
  IRefundRequest,
  IRegisterNewMemberRequest,
  IReRegisterMemberRequest,
  ISaveContractRequest,
  IRegisterMemberTransferRequest,
  IUpdateMemberInfoRequest,
  IMemberCategoryResponse,
  IMemberInfoResponse,
  IActiveMemberRequest,
  IMemberDetailsResponse,
} from '@/types';

const URL = URLS.API.MEMBERS;

export const fetchMemberList = async (params: IMemberListQuery) =>
  client.get<IMemberListResponse>(URL.RUD, { params });

export const fetchActiveMembers = async (params: IActiveMemberRequest) =>
  client.get<IActiveMemberResponse[]>(URL.READ_ACTIVE, { params });

export const searchMembers = async (params: IMemberSearchListQuery) =>
  client.get<IMemberListResponse>(URL.SEARCH, { params });

export const fetchMemberInfo = async ({ memberId }: IMemberIdParams) =>
  client.get<IMemberInfoResponse>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.INFO}`);

export const fetchMemberDetails = async ({ memberId }: IMemberIdParams) =>
  client.get<IMemberDetailsResponse>(`${URL.RUD}/${memberId}`);

export const fetchMemberCategories = async () =>
  client.get<IMemberCategoryResponse[]>(URL.CATEGORIES);

export const registerMember = async ({ ...request }: IRegisterNewMemberRequest) =>
  client.post<ICreateMemberResponse>(URL.REGISTER_NEW, request);

export const reRegisterMember = async ({ memberId, ...request }: IReRegisterMemberRequest) =>
  client.post<ICreateMemberResponse>(
    `${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.RE_REGISTER}`,
    request,
  );
export const holdMember = async ({ memberId, ...request }: IHoldingRequest) =>
  client.post<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.HOLDING}`, request);

export const registerMemberAdditionalOptionPurchase = async ({
  memberId,
  ...request
}: IPurchaseAdditionalOptionRequest) =>
  client.post<void>(
    `${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.PURCHASE_ADDITIONAL_OPTION}`,
    request,
  );

export const updateMemberInfo = async ({ memberId, ...request }: IUpdateMemberInfoRequest) =>
  client.patch<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.UPDATE}`, request);

export const fetchMemberRefundablePayments = async ({ memberId }: IMemberIdParams) =>
  client.get<IRefundableProductResponse[]>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.REFUNDABLE}`);

export const refundMemberPayment = async ({ memberId, ...request }: IRefundRequest) =>
  client.post<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.REQUEST_REFUND}`, request);

export const registerMemberTransfer = async ({
  memberId,
  ...request
}: IRegisterMemberTransferRequest) =>
  client.post<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.REGISTER_TRANSFER}`, request);

export const assignTrainerToMember = async ({
  memberId,
  ...request
}: IAssignTrainerToMemberRequest) =>
  client.patch<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.ASSIGN_TRAINER}`, request);

export const saveMemberContract = async ({
  memberId,
  contractImageUrl,
  contractType,
}: ISaveContractRequest) => {
  const formData = new FormData();

  formData.append('contractType', contractType);
  formData.append('contractImageUrl', contractImageUrl, 'contract.pdf');

  return client.post<void>(`${URL.RUD}/${memberId}/${URL.PATH_SEGMENT.CONTRACT}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
