import { fetchMemberRefundablePayments } from '@/apis';
import { useQuery } from '@tanstack/react-query';

import type { IRefundableProductResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

export const useMemberRefundablePayments = (
  memberId: number,
  queryOptions?: UseQueryOptionsType<IRefundableProductResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MEMBER.REFUNDABLE_PAYMENTS, memberId],
    queryFn: () => fetchMemberRefundablePayments({ memberId }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
