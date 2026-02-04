import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchMemberCategories } from '@/apis';

import type { IMemberCategoryResponse, UseQueryOptionsType } from '@/types';

export const useMemberCategories = (
  queryOptions?: UseQueryOptionsType<IMemberCategoryResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.CATEGORY],
    queryFn: fetchMemberCategories,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
