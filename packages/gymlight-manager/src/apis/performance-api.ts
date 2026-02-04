import { client } from './client';
import { URLS } from '@/constants';

import type { IPerformanceListQuery, IPerformanceListResponse } from '@/types';

const {
  API: { PERFORMANCES },
} = URLS;

export const fetchPerformances = async (params: IPerformanceListQuery) =>
  client.get<IPerformanceListResponse>(PERFORMANCES.RUD, {
    params,
  });
