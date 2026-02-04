import { URLS } from '@/constants';
import type { IMyPerformanceResponse, IPerformanceResponse, IUserResponse } from '@/types';

import { client } from './client';

const { ME, MY_PERFORMANCE } = URLS.API.USERS;

export const fetchMe = async () => client.get<IUserResponse>(ME);

export const fetchMyPerformance = async () => client.get<IMyPerformanceResponse>(MY_PERFORMANCE);
