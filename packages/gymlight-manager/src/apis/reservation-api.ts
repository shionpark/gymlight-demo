import { URLS } from '@/constants';
import { QUERIES } from '@/constants';
import { client } from './client';

import type {
  IRegisterReservationRequest,
  IReservationListQuery,
  IReservationListResponse,
  IUpdateReservedMemberRequest,
} from '@/types';

const URL = URLS.API.RESERVATIONS;

export const registerReservation = async (request: IRegisterReservationRequest) =>
  client.post<void>(URL.REGISTER, request);

export const updateReservation = async ({
  reservationId,
  ...request
}: IUpdateReservedMemberRequest) => client.patch(`${URL.UPDATE}/{reservationId}`, request);

export const fetchReservationList = async (params: IReservationListQuery) =>
  client.get<IReservationListResponse>(URL.RUD, { params });
