import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchMemberList } from '@/apis';

import type { IMemberListQuery, IMemberResponse, UseListQueryOptionsType } from '@/types';

export const useMemberList = (
  params: IMemberListQuery,
  queryOptions?: UseListQueryOptionsType<IMemberResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.LIST, { ...params }],
    queryFn: () => fetchMemberList({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
