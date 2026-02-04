import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchActiveMembers } from '@/apis';

import type { IActiveMemberRequest, IActiveMemberResponse, UseQueryOptionsType } from '@/types';

export const useActiveMembers = (
  params?: IActiveMemberRequest,
  queryOptions?: UseQueryOptionsType<IActiveMemberResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.ACTIVE],
    queryFn: () => fetchActiveMembers({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
