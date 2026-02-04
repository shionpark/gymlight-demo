import { useQuery } from '@tanstack/react-query';
import type { IBranchResponse, UseListQueryOptionsType } from '@/types';

import { fetchBranches } from '@/apis';

import { QUERIES } from '@/constants';

import type { IBranchListQuery } from '@/types';

export const useBranchList = (
  params: IBranchListQuery,
  queryOptions?: UseListQueryOptionsType<IBranchResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.BRANCH.LIST, { ...params }],
    queryFn: () => fetchBranches({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
