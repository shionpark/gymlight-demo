import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchTrainerList } from '@/apis';

import type { ITrainerResponse, UseQueryOptionsType } from '@/types';

export const useTrainerList = (queryOptions?: UseQueryOptionsType<ITrainerResponse[]>) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.STAFF.TRAINER],
    queryFn: () => fetchTrainerList(),
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
