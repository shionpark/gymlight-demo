import { usePagination } from '@/hooks';

import { useMe } from '@/features/auth';
import { useStaffSort } from '@/features/staff/hooks';
import { useTeamStaffList } from '@/features/team/hooks';

export const useMyTeamMemberTrainerTable = () => {
  const { currentPageNumber, handlePageNumberChange, handlePageSizeChange, pageSize } =
    usePagination();

  const { data: userData } = useMe();

  const role = userData?.role;
  const teamId = Number(userData?.teamId);

  const { sortParam, nameCellProps, birthDateCellProps, ageCellProps, joinDateCellProps } =
    useStaffSort();

  const { data: teamMemberTrainersData } = useTeamStaffList(
    {
      pageNum: currentPageNumber,
      pageSize: pageSize,
      teamId: teamId,
      sort: sortParam,
    },
    { enabled: role === '팀장 트레이너' && typeof teamId === 'number' && !isNaN(teamId) },
  );

  return {
    pageSize,
    handlePageSizeChange,

    currentPageNumber,
    handlePageNumberChange,

    teamMemberTrainersData,

    headerCellProps: { nameCellProps, birthDateCellProps, ageCellProps, joinDateCellProps },
  };
};
