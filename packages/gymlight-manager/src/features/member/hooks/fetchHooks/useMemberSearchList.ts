import { useQuery } from '@tanstack/react-query';

import type { IMemberResponse, IMemberSearchListQuery, UseListQueryOptionsType } from '@/types';

import { searchMembers } from '@/apis';

import { QUERIES } from '@/constants';

export const useMemberSearchList = (
  params: IMemberSearchListQuery,
  queryOptions?: UseListQueryOptionsType<IMemberResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.SEARCH_LIST, { ...params }],
    queryFn: () => searchMembers({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
