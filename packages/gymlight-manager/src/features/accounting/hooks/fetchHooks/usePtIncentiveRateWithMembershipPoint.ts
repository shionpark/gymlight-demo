import { useQuery } from '@tanstack/react-query';

import type { IPtIncentiveRateWithMembershipPointResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

import { fetchPtIncentiveRateWithMembershipPoints } from '@/apis';

export const usePtIncentiveRateWithMembershipPoint = (
  queryOptions?: UseQueryOptionsType<IPtIncentiveRateWithMembershipPointResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ACCOUNTING.PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINT],
    queryFn: fetchPtIncentiveRateWithMembershipPoints,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
