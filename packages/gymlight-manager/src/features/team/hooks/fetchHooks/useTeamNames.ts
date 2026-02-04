import { useQuery } from '@tanstack/react-query';

import { fetchTeams } from '@/apis';
import { QUERIES } from '@/constants';
import type { ITeamResponse, TeamSortType, UseListQueryOptionsType } from '@/types';

export const useTeamNames = (
  { branchName, sortParam }: { branchName?: string; sortParam?: TeamSortType },
  queryOptions?: UseListQueryOptionsType<ITeamResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.TEAM.NAME, { branchName, sortParam }],
    queryFn: () =>
      fetchTeams({
        branchName,
        sort: sortParam || '팀 이름(가나다순)',
        pageNum: 1,
        pageSize: 9999,
      }),
    select: ({ data }) => ({
      data: data.list.map(({ name }) => name),
    }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    teamNames: data?.data ?? [''],
    ...rest,
  };
};
