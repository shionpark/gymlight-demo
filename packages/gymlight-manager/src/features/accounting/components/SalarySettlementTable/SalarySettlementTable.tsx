import {
  VerticalTable,
  DualSideBar,
  SquareButton,
  TablePaginationManager,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { TableStyled } from '@/features/member';

import { useSalarySettlementTable, AccountingStatusFlag } from '@/features/accounting';
import { formatNumberToKoreanCurrency } from '@/utils';
import { useMemo } from 'react';

const SalarySettlementTable = () => {
  const {
    handlePageNumberChange,
    handlePageSizeChange,
    pageSize,
    currentPageNumber,
    data,
    openSalarySettlementModal,
  } = useSalarySettlementTable();

  const columnWidths = [
    tableCellWidth.xxs,

    tableCellWidth.xs,
    tableCellWidth.xs,
    tableCellWidth.xs,

    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.xs,

    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.xs,
  ];

  const tableHeaderCells = [
    'No.',

    '이름',
    '직급',
    '지점',

    '전체 급여',
    <div title="영업 지원금">기본 급여</div>,
    'OT 인센티브',
    <div title="수업료">PT 인센티브</div>,
    <div title="주간 목표매출 달성 인센티브">일반 인센티브</div>,
    '워크인 혜택',

    '정산 상태',
    '요청일',
    '관리',
  ];

  const tableRows = useMemo(
    () =>
      data?.list
        ? data.list.map(
            (
              {
                salarySettlementId,
                totalSalary,
                baseSalary,
                otIncentive,
                ptIncentive,
                generalIncentive,
                isWalkinBenefit,
                status,
                issuedAt,

                branchName,

                staffName,
                staffRole,
              },
              index,
            ) => [
              index,
              staffName,
              staffRole,
              branchName,
              formatNumberToKoreanCurrency(totalSalary),
              formatNumberToKoreanCurrency(baseSalary),
              formatNumberToKoreanCurrency(otIncentive),
              formatNumberToKoreanCurrency(ptIncentive),
              formatNumberToKoreanCurrency(generalIncentive),
              isWalkinBenefit ? '✅' : '❌',
              <AccountingStatusFlag status={status} />,
              issuedAt,
              <SquareButton
                variant={status === '정산대기' ? 'primary' : 'normal'}
                onClick={() =>
                  openSalarySettlementModal({
                    salarySettlementId,
                    totalSalary,
                    baseSalary,
                    otIncentive,
                    ptIncentive,
                    generalIncentive,
                    isWalkinBenefit,
                    status,
                    issuedAt,

                    branchName,

                    staffName,
                    staffRole,
                  })
                }
              >
                {status === '정산대기' ? '발행' : '수정'}
              </SquareButton>,
            ],
          )
        : [[]],
    [data],
  );

  return (
    <TableStyled.Wrapper>
      <DualSideBar className="top-menu" />
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
      <TablePaginationManager
        tableDataName="정산 목록"
        currentPageIndexNumber={currentPageNumber}
        totalPageNumber={data?.totalPages || 0}
        pageSize={pageSize}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
      />
    </TableStyled.Wrapper>
  );
};

export default SalarySettlementTable;
