import { URLS } from '@/constants';
import { client } from './client';

import type { ICouponListQuery, ICouponListResponse, IRegisterCouponRequest } from '@/types';

const URL = URLS.API.COUPONS;

export const registerCoupon = async (request: IRegisterCouponRequest) =>
  client.post<void>(URL.REGISTER, request);

export const fetchCouponList = async (params: ICouponListQuery) =>
  client.get<ICouponListResponse>(URL.RUD, { params });
