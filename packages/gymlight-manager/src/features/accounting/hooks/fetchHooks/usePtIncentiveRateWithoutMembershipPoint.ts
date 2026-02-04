import { useQuery } from '@tanstack/react-query';

import type { IPtIncentiveRateWithoutMembershipPointResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

import { fetchPtIncentiveRateWithoutMembershipPoints } from '@/apis';

export const usePtIncentiveRateWithoutMembershipPoint = (
  queryOptions?: UseQueryOptionsType<IPtIncentiveRateWithoutMembershipPointResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ACCOUNTING.PT_INCENTIVE_RATE_WITHOUT_MEMBERSHIP_POINT],
    queryFn: fetchPtIncentiveRateWithoutMembershipPoints,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
