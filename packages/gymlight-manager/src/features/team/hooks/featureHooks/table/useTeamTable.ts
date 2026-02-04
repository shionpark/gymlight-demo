import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';
import { useToggleTabMenu } from '@/hooks';

import { useTeamList, useTeamNames } from '@/features/team/hooks';

export const useTeamTable = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { data: teamData } = useTeamList({
    branchName: activeBranch?.name,
    sort: '생성일(오래된순)',
  });

  const { teamNames } = useTeamNames({
    branchName: activeBranch?.name,
  });

  const {
    activeTab: activeTeamName,
    setActiveTab: setActiveTeamName,
    getSelectTabHandler: getSelectTeamHandler,
    checkIsActiveTab: checkIsActiveTeam,
  } = useToggleTabMenu(teamNames);

  useEffect(() => {
    if (teamNames.length > 0 && !teamNames.includes(activeTeamName)) {
      setActiveTeamName(teamNames[0]);
    }
  }, [teamNames, activeTeamName]);

  const activeTeamData = useMemo(() => {
    return teamData?.list.find((team) => team.name === activeTeamName);
  }, [teamData?.list, activeTeamName]);

  return {
    teamData,
    teamNames,
    activeTeamName,
    setActiveTeamName,
    getSelectTeamHandler,
    checkIsActiveTeam,
    activeTeamData,
  };
};

export interface ITeamTableProps extends ReturnType<typeof useTeamTable> {}
