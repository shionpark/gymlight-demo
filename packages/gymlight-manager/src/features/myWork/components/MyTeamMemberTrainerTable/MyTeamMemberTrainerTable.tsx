import {
  LabeledContainer,
  Pagination,
  SquareButton,
  VerticalTable,
  SelectWithCustomOption,
  TableHeaderButton,
  Checkbox,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { useMyTeamMemberTrainerTable } from '../../hooks';
import { StaffStatusFlag } from '@/features/staff/components';

import * as Styled from '../tables.styles';

const MyTeamMemberTrainerTable = () => {
  const {
    currentPageNumber,
    pageSize,
    handlePageNumberChange,
    handlePageSizeChange,
    teamMemberTrainersData,

    headerCellProps: { nameCellProps, ageCellProps, joinDateCellProps, birthDateCellProps },
  } = useMyTeamMemberTrainerTable();
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.sm,

    tableCellWidth.xs,
    tableCellWidth.md,

    tableCellWidth.xs,

    tableCellWidth.md,
    tableCellWidth.xs,
    tableCellWidth.md,
    tableCellWidth.xs,
  ];

  const tableHeaderCells = [
    '✔️',
    <TableHeaderButton {...nameCellProps} icon={<nameCellProps.icon />}>
      이름
    </TableHeaderButton>,
    '상태',
    '전화번호',

    '성별',
    <TableHeaderButton {...ageCellProps} icon={<ageCellProps.icon />}>
      나이
    </TableHeaderButton>,
    <TableHeaderButton {...birthDateCellProps} icon={<birthDateCellProps.icon />}>
      생년월일
    </TableHeaderButton>,

    <TableHeaderButton {...joinDateCellProps} icon={<joinDateCellProps.icon />}>
      입사일
    </TableHeaderButton>,
    '목표매출',
  ];

  const tableRows = teamMemberTrainersData
    ? teamMemberTrainersData.list.map(
        ({ teamMemberId, name, phone, birthDate, age, joinDate, status, gender }, index) => [
          <Checkbox id={index.toString()} />,
          name,
          <StaffStatusFlag status={status} />,
          phone,

          gender,
          age,
          birthDate,

          joinDate.split(' ')[0],
          <SquareButton size="small" variant="primary" onClick={() => alert('준비중입니다.')}>
            목표 매출
          </SquareButton>,
        ],
      )
    : [[]];
  return (
    <>
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
        columnWidths={columnWidths}
      />
      <Styled.DualSideBottom
        leftSideChildren={[
          <Pagination
            currentPage={currentPageNumber}
            onPageChange={handlePageNumberChange}
            totalPages={0}
          />,
        ]}
        rightSideChildren={[
          <LabeledContainer
            labelText="한 페이지당 트레이너 수"
            width={20}
            labelRatio={2}
            contentRatio={2}
          >
            <SelectWithCustomOption value={pageSize} onChange={handlePageSizeChange}>
              {[3, 5, 10, 20].map((num) => (
                <option value={num.toString()}>{num}</option>
              ))}
            </SelectWithCustomOption>
          </LabeledContainer>,
        ]}
      />
    </>
  );
};

export default MyTeamMemberTrainerTable;
