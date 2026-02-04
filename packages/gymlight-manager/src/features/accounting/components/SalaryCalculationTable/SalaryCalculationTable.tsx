import { VerticalTable, TablePaginationManager, SquareButton } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
} from '@heroicons/react/24/solid';

import { useSalaryCalculationTable } from '@/features/accounting';

import * as Styled from './SalaryCalculationTable.styles';

const SalaryCalculationTable = () => {
  const {
    handlePageNumberChange,
    totalPageNumbers,

    currentPageNumber,
    pageSize,
    handlePageSizeChange,
    performanceListData,

    dataRangeInfoText,
    moveToNextMonth,
    moveToPrevMonth,
  } = useSalaryCalculationTable();

  const columnWidths = [
    tableCellWidth.xxs,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.xs,
    tableCellWidth.xs,
    tableCellWidth.xs,
  ];

  const tableHeaderCells = [
    'No.',
    '이름',
    '포인트',
    'OT 회원수',
    'PT 매출액',
    'PT  수업 수',
    '당월 워크인 혜택',
    '신입 혜택',
    '정산',
  ];

  const tableRows = performanceListData
    ? performanceListData.map(
        (
          {
            performanceId,
            otCount,
            ptCount,

            ptRevenue,
            membershipPoints,

            isWalkinBenefit,
            isNew,

            trainerName,
          },
          index,
        ) => [
          index,
          trainerName,
          membershipPoints,
          otCount,
          ptRevenue,
          ptCount,
          isWalkinBenefit ? '🟢 ' : '❌',
          isNew ? '🟢 ' : '❌',
          <SquareButton
            onClick={() => {
              alert('준비중입니다');
            }}
            size="small"
            variant="primary"
          >
            실행
          </SquareButton>,
        ],
      )
    : [[]];

  return (
    <>
      <Styled.TableInfoDualSideBar
        leftSideChildren={[
          <p>실적내역: {dataRangeInfoText}</p>,
          <SquareButton size="normal" variant="primary-outline" onClick={moveToPrevMonth}>
            <LeftIcon />
          </SquareButton>,
          <SquareButton size="normal" variant="primary-outline" onClick={moveToNextMonth}>
            <RightIcon />
          </SquareButton>,
        ]}
      />
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
      <TablePaginationManager
        tableDataName="실적 정보"
        currentPageIndexNumber={currentPageNumber}
        pageSize={pageSize}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        totalPageNumber={totalPageNumbers as number}
      />
    </>
  );
};

export default SalaryCalculationTable;
