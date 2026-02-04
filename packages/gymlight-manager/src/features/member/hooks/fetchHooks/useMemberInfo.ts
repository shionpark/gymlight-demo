import { fetchMemberInfo } from '@/apis';
import { useQuery } from '@tanstack/react-query';

import type { IMemberInfoResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

export const useMemberInfo = (
  memberId: number,
  queryOptions?: UseQueryOptionsType<IMemberInfoResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.INFO, memberId],
    queryFn: () => fetchMemberInfo({ memberId }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
