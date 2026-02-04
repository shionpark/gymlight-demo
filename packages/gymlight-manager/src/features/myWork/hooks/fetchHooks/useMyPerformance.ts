import { fetchMyPerformance } from '@/apis';
import { useQuery } from '@tanstack/react-query';

import type { IMyPerformanceResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

export const useMyPerformance = (queryOptions?: UseQueryOptionsType<IMyPerformanceResponse>) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MY_WORK.PERFORMANCE],
    queryFn: fetchMyPerformance,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
