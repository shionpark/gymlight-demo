import { fetchMemberDetails } from '@/apis';
import { useQuery } from '@tanstack/react-query';

import type { IMemberDetailsResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

export const useMemberDetails = (
  memberId: number,
  queryOptions?: UseQueryOptionsType<IMemberDetailsResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.DETAILS, memberId],
    queryFn: () => fetchMemberDetails({ memberId }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
