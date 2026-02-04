import { tableCellWidth } from '@/styles/variables';

import { Checkbox, VerticalTable, TablePaginationManager } from 'gymlight-design-system';

import { useCouponMemberTable } from '../../hooks';

import * as TableStyled from './table.styles';

const CouponMemberTable = () => {
  const {
    data,

    handlePageNumberChange,

    currentPageNumber,
    pageSize,
    handlePageSizeChange,
  } = useCouponMemberTable();

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
  ];

  const tableHeaderCells = [
    '✔️',
    'No.',
    '이름',
    '성별',
    '연락처',
    '쿠폰 수',
    '소개 회원',
    '쿠폰 발급자',
  ];

  const tableRows = data?.list.length
    ? data.list.map(({ name, phone, gender, couponDays, referrerName, trainerName }, index) => [
        <Checkbox id={`coupon-${index}`} />,
        index,
        name,
        gender,
        phone,
        couponDays,
        referrerName,
        trainerName,
      ])
    : [];
  return (
    <TableStyled.Wrapper>
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
      <TablePaginationManager
        pageSize={pageSize}
        currentPageIndexNumber={currentPageNumber}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        totalPageNumber={data?.totalPages || 0}
        tableDataName="쿠폰 회원"
      />
    </TableStyled.Wrapper>
  );
};

export default CouponMemberTable;
