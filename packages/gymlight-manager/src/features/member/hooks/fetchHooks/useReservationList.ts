import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchReservationList } from '@/apis';

import type { IReservationListQuery, IReservationResponse, UseListQueryOptionsType } from '@/types';

export const useReservationList = (
  params: IReservationListQuery,
  queryOptions?: UseListQueryOptionsType<IReservationResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.RESERVATION.LIST, { ...params }],
    queryFn: () => fetchReservationList({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
