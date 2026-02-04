import { useState } from 'react';

import type { IStaffResponse, UserRoleType } from '@/types';

interface IStaffDataFilteredByRole {
  leaderStaffData: IStaffResponse[];
  staffData: IStaffResponse[];
}

export const useTeamStaffState = () => {
  const [teamStaffIds, setTeamStaffIds] = useState<number[]>([]);

  const handleTeamStaffsChange = (values: (string | number)[]) => {
    const formatted = values.map((value) => +value);
    if (JSON.stringify(formatted) !== JSON.stringify(teamStaffIds)) {
      setTeamStaffIds(formatted);
    }
  };

  const filterStaffByRole = (
    allStaffData: { list: IStaffResponse[] } | undefined,
    activeDepartment: string,
  ): IStaffDataFilteredByRole => {
    if (!allStaffData?.list) return { leaderStaffData: [], staffData: [] };

    const leaderRole =
      activeDepartment === 'FC' ? ('팀장 FC' as UserRoleType) : ('팀장 트레이너' as UserRoleType);

    return {
      leaderStaffData: allStaffData.list.filter(({ role }) => role === leaderRole),
      staffData: allStaffData.list.filter(({ role }) => role !== leaderRole),
    };
  };

  return {
    teamStaffIds,
    changeTeamStaffs: handleTeamStaffsChange,
    filterStaffByRole,
  };
};
