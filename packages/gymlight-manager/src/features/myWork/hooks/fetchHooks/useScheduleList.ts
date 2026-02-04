import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchSchedules } from '@/apis';

import type { IScheduleListQuery, IScheduleResponse, UseQueryOptionsType } from '@/types';

export const useScheduleList = (
  params: IScheduleListQuery,
  queryOptions?: UseQueryOptionsType<IScheduleResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MY_WORK.SCHEDULE.LIST, { ...params }],
    queryFn: () => fetchSchedules({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
