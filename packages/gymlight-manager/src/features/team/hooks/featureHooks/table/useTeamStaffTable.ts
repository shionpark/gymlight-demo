import { usePagination } from '@/hooks';
import type { ITeamResponse } from '@/types';

import { useTeamStaffSort, useTeamStaffList } from '@/features/team/hooks';

export const useTeamStaffTable = (activeTeamData?: ITeamResponse) => {
  const sortProps = useTeamStaffSort();
  const paginationProps = usePagination();

  const { data: teamStaffData } = useTeamStaffList({
    teamId: activeTeamData?.teamId || 0,
    sort: sortProps.sortParam,
    pageNum: paginationProps.currentPageNumber,
    pageSize: paginationProps.pageSize,
  });

  return {
    sortProps,
    paginationProps,
    teamStaffData,
    activeTeamData,
  };
};

export interface ITeamStaffTableProps extends ReturnType<typeof useTeamStaffTable> {}
