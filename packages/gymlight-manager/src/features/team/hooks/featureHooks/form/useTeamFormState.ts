import { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';
import { StaffSortType, TeamDepartmentType, UserRoleType } from '@/types';

import { useStaffList } from '@/features/staff/hooks';

const getRolesByDepartment = (department: TeamDepartmentType): UserRoleType[] => {
  return department === 'FC' ? ['팀장 FC', 'FC'] : ['팀장 트레이너', '트레이너'];
};

const getLeaderRole = (department: TeamDepartmentType): UserRoleType => {
  return department === 'FC' ? '팀장 FC' : '팀장 트레이너';
};

export const useTeamFormState = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const [activeDepartment, setActiveDepartment] = useState<TeamDepartmentType>('트레이너');
  const [teamStaffIds, setTeamStaffIds] = useState<number[]>([]);

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveDepartment(e.target.value as TeamDepartmentType);
  };

  const handleTeamStaffsChange = (values: (string | number)[]) => {
    const formatted = values.map(Number);
    if (JSON.stringify(formatted) !== JSON.stringify(teamStaffIds)) {
      setTeamStaffIds(formatted);
    }
  };

  const roleNames = useMemo(() => getRolesByDepartment(activeDepartment), [activeDepartment]);

  const { data: allStaffData } = useStaffList({
    sort: '이름(가나다순)' as StaffSortType,
    pageNum: 1,
    pageSize: 100000,
    branchName: activeBranch?.name,
    roleNames,
  });

  const { leaderStaffData, staffData } = useMemo(() => {
    const list = allStaffData?.list || [];
    const leaderRole = getLeaderRole(activeDepartment);

    return {
      leaderStaffData: list.filter(({ role }) => role === leaderRole),
      staffData: list.filter(({ role }) => role !== leaderRole),
    };
  }, [allStaffData, activeDepartment]);

  return {
    activeDepartment,
    selectDepartment: handleDepartmentChange,
    setActiveDepartment,
    teamStaffIds,
    changeTeamStaffs: handleTeamStaffsChange,
    staffData,
    leaderStaffData,
  };
};
