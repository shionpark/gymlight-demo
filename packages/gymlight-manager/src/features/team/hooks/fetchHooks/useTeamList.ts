import { useQuery } from '@tanstack/react-query';

import { fetchTeams } from '@/apis';

import { QUERIES } from '@/constants';

import type { ITeamListQuery, ITeamResponse, UseListQueryOptionsType } from '@/types';

export const useTeamList = (
  params: ITeamListQuery,
  queryOptions?: UseListQueryOptionsType<ITeamResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.TEAM.LIST, { ...params }],
    queryFn: () => fetchTeams({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
