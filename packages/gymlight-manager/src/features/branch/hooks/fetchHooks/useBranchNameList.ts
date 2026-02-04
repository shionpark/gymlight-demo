import { useQuery } from '@tanstack/react-query';
import type { IBranchNameResponse, UseQueryOptionsType } from '@/types';

import { fetchBranchNames } from '@/apis';

import { QUERIES } from '@/constants';

export const useBranchNameList = (queryOptions?: UseQueryOptionsType<IBranchNameResponse[]>) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.BRANCH.NAMES],
    queryFn: fetchBranchNames,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
