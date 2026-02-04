import { Dropdown, DropdownForMenu, DualSideBar, SquareButton } from 'gymlight-design-system';
import { CalendarIcon, TagIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';

import { SortDropdown } from '@/components';
import type { ITeamResponse, ITeamStaffListResponse, TeamStaffSortType } from '@/types';

import { useTeamModal } from '@/features/team/hooks';
import { TEAM_STAFF_SORT_OPTIONS } from '@/features/team/constants';

import * as Styled from './TableInfoSection.styles';
import { useToggleDropdownMenu } from '@/hooks';

interface TableInfoSectionProps {
  sortParam: TeamStaffSortType;
  setSortParam: (param: TeamStaffSortType) => void;
  teamStaffData?: ITeamStaffListResponse;
  activeTeamData?: ITeamResponse;
}

const TableInfoSection = ({
  sortParam,
  setSortParam,
  teamStaffData,
  activeTeamData,
}: TableInfoSectionProps) => {
  const { openTeamFormModal } = useTeamModal();

  const { toggleDropdownMenu, checkDropdownMenuOpen, setDropdownMenuRef } =
    useToggleDropdownMenu(1);

  const teamStaffIds = teamStaffData?.list.map((member) => member.teamMemberId);

  return (
    <>
      <Styled.TeamDetails>
        <span>
          <TagIcon />
          {activeTeamData?.department} 부서
        </span>
        <span>
          <UserIcon /> 팀장: {activeTeamData?.teamLeaderName}
        </span>
        <span>
          <CalendarIcon /> 생성일: {activeTeamData?.createdAt}
        </span>
        <span>
          <CalendarIcon /> 수정일: {activeTeamData?.updatedAt}
        </span>
        <Dropdown
          ref={setDropdownMenuRef(0)}
          isDropdownMenuOpened={checkDropdownMenuOpen(0)}
          onClick={() => toggleDropdownMenu(0)}
        >
          <DropdownForMenu
            onClick={() =>
              openTeamFormModal({
                isEdit: true,
                initTeamId: activeTeamData?.teamId,
                initTeamName: activeTeamData?.name,
                initDepartment: activeTeamData?.department,
                initTeamLeaderId: activeTeamData?.teamLeaderId,
                initTeamStaffIds: teamStaffIds,
              })
            }
          >
            팀 정보 수정
          </DropdownForMenu>
        </Dropdown>
      </Styled.TeamDetails>

      <DualSideBar
        leftSideChildren={[
          <Styled.TeamStaffDetails>
            <span>총 {teamStaffData?.totalElements}명</span>
            <span>/</span>
            <span>{sortParam}</span>
          </Styled.TeamStaffDetails>,
        ]}
        rightSideChildren={[
          <Styled.FlexContainer>
            <SquareButton
              size="small"
              onClick={() =>
                openTeamFormModal({
                  isPlusStaff: true,
                  initTeamName: activeTeamData?.name,
                  initTeamStaffIds: teamStaffIds,
                })
              }
            >
              <span>
                <UserPlusIcon />
              </span>
              팀원 추가
            </SquareButton>
            <SortDropdown
              sortParam={sortParam}
              sortOptions={TEAM_STAFF_SORT_OPTIONS}
              setSortParam={setSortParam}
            />
          </Styled.FlexContainer>,
        ]}
      />
    </>
  );
};

export default TableInfoSection;
