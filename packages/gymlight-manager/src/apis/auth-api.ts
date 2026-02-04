import type { AxiosResponse } from 'axios';

import { URLS } from '@/constants';
import type { IJoinFormRequest, ILoginFormRequest, ILoginResponse } from '@/types';

import { client } from './client';

export const join = async (joinFormRequest: IJoinFormRequest): Promise<AxiosResponse> =>
  client.post(URLS.API.AUTH.JOIN, joinFormRequest);

export const login = async (
  loginFormRequest: ILoginFormRequest,
): Promise<AxiosResponse<ILoginResponse>> =>
  client.post<ILoginResponse>(URLS.API.AUTH.LOGIN, loginFormRequest);

export const logout = async (): Promise<AxiosResponse> => client.post(URLS.API.AUTH.LOGOUT);
