import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchLeaderFcList } from '@/apis';

import type { ILeaderFcResponse, UseQueryOptionsType } from '@/types';

export const useLeaderFcList = (queryOptions?: UseQueryOptionsType<ILeaderFcResponse[]>) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.STAFF.TRAINER],
    queryFn: () => fetchLeaderFcList(),
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
