import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchTeamStaffs } from '@/apis';

import type { ITeamStaffListQuery, ITeamStaffResponse, UseListQueryOptionsType } from '@/types';

export const useTeamStaffList = (
  params: ITeamStaffListQuery,
  queryOptions?: UseListQueryOptionsType<ITeamStaffResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.TEAM.STAFF, { ...params }],
    queryFn: () => fetchTeamStaffs({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
