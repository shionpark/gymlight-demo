import { useQuery } from '@tanstack/react-query';

import type {
  IPhoneSuffixQuery,
  ISearchMemberByPhoneSuffixResponse,
  UseQueryOptionsType,
} from '@/types';

import { searchAttendances } from '@/apis';

import { QUERIES } from '@/constants';

export const useAttendanceSearchList = (
  params: IPhoneSuffixQuery,
  queryOptions?: UseQueryOptionsType<ISearchMemberByPhoneSuffixResponse[]>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ATTENDANCE.SEARCH_LIST, { ...params }],
    queryFn: () => searchAttendances({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
