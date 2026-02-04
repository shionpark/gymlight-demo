import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchFcList } from '@/apis';

import type { IFcResponse, UseQueryOptionsType } from '@/types';

export const useFcList = (queryOptions?: UseQueryOptionsType<IFcResponse[]>) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.STAFF.TRAINER],
    queryFn: () => fetchFcList(),
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
