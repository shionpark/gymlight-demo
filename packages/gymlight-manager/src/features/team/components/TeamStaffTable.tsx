import { TableHeaderButton, VerticalTable, TablePaginationManager } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { StaffStatusFlag } from '@/features/staff/components';

import { TableInfoSection } from '@/features/team/components';
import { ITeamStaffTableProps } from '@/features/team/hooks';

import * as Styled from './TeamStaffTable.styles';

const TeamStaffTable = ({
  activeTeamData,
  teamStaffData,
  sortProps: {
    sortParam,
    setSortParam,
    nameButtonProps,
    ageButtonProps,
    joinDateButtonProps,
    birthDateButtonProps,
  },
  paginationProps: { pageSize, handlePageSizeChange, currentPageNumber, handlePageNumberChange },
}: ITeamStaffTableProps) => {
  const tableHeaderCells = [
    'No.',
    <TableHeaderButton {...nameButtonProps} icon={<nameButtonProps.icon />} />,
    <TableHeaderButton id="branch" buttonName="상태" />,
    <TableHeaderButton id="role" buttonName="직급" />,
    <TableHeaderButton id="phone" buttonName="연락처" />,
    <TableHeaderButton {...birthDateButtonProps} icon={<birthDateButtonProps.icon />} />,
    <TableHeaderButton {...ageButtonProps} icon={<ageButtonProps.icon />} />,
    <TableHeaderButton id="gender" buttonName="성별" />,
    <TableHeaderButton {...joinDateButtonProps} icon={<joinDateButtonProps.icon />} />,
  ];

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.md, // 이름
    tableCellWidth.xs, // 상태
    tableCellWidth.sm, // 직급
    tableCellWidth.md, // 연락처
    tableCellWidth.sm, // 생년월일
    tableCellWidth.xs, // 나이
    tableCellWidth.xs, // 성별
    tableCellWidth.lg, // 가입일
  ];

  const tableRows = teamStaffData?.list
    ? teamStaffData.list.map(
        ({ name, phone, birthDate, age, gender, joinDate, status, role }, index) => [
          index + 1,
          name,
          <StaffStatusFlag status={status} />,
          role,
          phone,
          birthDate,
          age,
          gender,
          joinDate,
        ],
      )
    : [];

  return (
    <Styled.Wrapper>
      <TableInfoSection
        sortParam={sortParam}
        setSortParam={setSortParam}
        teamStaffData={teamStaffData}
        activeTeamData={activeTeamData}
      />

      <VerticalTable
        columnWidths={columnWidths}
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
      />

      <TablePaginationManager
        totalPageNumber={teamStaffData?.totalPages || 0}
        currentPageIndexNumber={currentPageNumber}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        tableDataName="팀원 "
        pageSize={pageSize}
      />
    </Styled.Wrapper>
  );
};

export default TeamStaffTable;
