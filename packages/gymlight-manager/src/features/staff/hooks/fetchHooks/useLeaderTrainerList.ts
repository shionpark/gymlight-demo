import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchLeaderTrainerList } from '@/apis';

import type { ILeaderTrainerResponse, UseQueryOptionsType } from '@/types';

export const useLeaderTrainerList = (
  queryOptions?: UseQueryOptionsType<ILeaderTrainerResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.STAFF.TRAINER],
    queryFn: () => fetchLeaderTrainerList(),
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
