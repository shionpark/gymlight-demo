import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchMyMembers } from '@/apis';

import type { IPaginationQuery, UseListQueryOptionsType, IMyMemberResponse } from '@/types';

export const useMyMemberList = (
  params: IPaginationQuery,
  queryOptions?: UseListQueryOptionsType<IMyMemberResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MY_WORK.MEMBERS.LIST, { ...params }],
    queryFn: () => fetchMyMembers({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
