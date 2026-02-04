import { queryOptions, useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchAttendances } from '@/apis';

import type {
  IAttendanceListQuery,
  ICheckedMemberResponse,
  UseListQueryOptionsType,
} from '@/types';

export const useAttendanceList = (
  params: IAttendanceListQuery,
  queryOptions?: UseListQueryOptionsType<ICheckedMemberResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ATTENDANCE.LIST, { ...params }],
    queryFn: () => fetchAttendances({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
