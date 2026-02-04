import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchCouponList } from '@/apis';

import type { ICouponListQuery, ICouponResponse, UseListQueryOptionsType } from '@/types';

export const useCouponList = (
  params: ICouponListQuery,
  queryOptions?: UseListQueryOptionsType<ICouponResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.COUPON.LIST, { ...params }],
    queryFn: () => fetchCouponList({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
