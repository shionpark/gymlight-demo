import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchPerformances } from '@/apis';

import type { IPerformanceListQuery, IPerformanceResponse, UseListQueryOptionsType } from '@/types';

export const usePerformanceList = (
  params: IPerformanceListQuery,
  queryOptions?: UseListQueryOptionsType<IPerformanceResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ACCOUNTING.PERFORMANCES, { ...params }],
    queryFn: () => fetchPerformances({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
