import { fetchScheduleDetails } from '@/apis';
import { useQuery } from '@tanstack/react-query';

import type { IScheduleDetailsResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

export const useScheduleDetails = (
  scheduleId: number,
  queryOptions?: UseQueryOptionsType<IScheduleDetailsResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MY_WORK.SCHEDULE.DETAILS, scheduleId],
    queryFn: () => fetchScheduleDetails({ scheduleId }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
