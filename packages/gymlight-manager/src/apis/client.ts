import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { URLS } from '@/constants';
import type { ILoginResponse } from '@/types';
import { setIsLoggedIn, getIsLoggedIn } from '@/utils';

const defaultAxiosConfig = {
  baseURL: `${process.env.REACT_APP_API_BASE_URL}${URLS.API.PREFIX}`,
  withCredentials: true,
};

const setBearerPrefix = (accessToken: string): string => {
  return `Bearer ${accessToken}`;
};

export const setBearerToken = (accessToken: string): void => {
  client.defaults.headers.common.Authorization = setBearerPrefix(accessToken);
};

export const client: AxiosInstance = axios.create(defaultAxiosConfig);

interface IAxiosRetryConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

client.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data?.data) {
      response.data = response.data.data;
    }
    return response;
  },
  async (error: AxiosError) => {
    const { response } = error;
    const config: IAxiosRetryConfig = error.config as IAxiosRetryConfig;

    if (response?.status === 401) {
      if (!config._retry) {
        const isLoggedIn = getIsLoggedIn();
        if (!isLoggedIn) {
          return Promise.reject(error);
        }
        config._retry = true;
        try {
          const { data: refreshData } = await axios.get<ILoginResponse>(
            URLS.API.AUTH.REFRESH,
            defaultAxiosConfig,
          );
          const refreshToken = ((refreshData as any)?.data as unknown as ILoginResponse)
            .accessToken;
          setBearerToken(refreshToken);
          if (refreshToken) {
            setIsLoggedIn();
          }

          return client(config);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  },
);
