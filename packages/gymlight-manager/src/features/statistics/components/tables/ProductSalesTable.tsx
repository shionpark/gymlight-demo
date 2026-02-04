import { VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { CheckIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

/** 상품별 내역 */
const ProductSalesTable = ({
  getTableRows,
}: {
  getTableRows: (row: string[]) => ReactNode[][];
}) => {
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs, // No.
    tableCellWidth.md, // 상품명
    tableCellWidth.sm, // 판매량
    tableCellWidth.sm, // 현금
    tableCellWidth.sm, // 카드
    tableCellWidth.sm, // 미수금
    tableCellWidth.md, // 합계
  ];

  const tableHeaderCells = [
    <CheckIcon />,
    'No.',
    '상품명',
    '판매량',
    '현금',
    '카드',
    '미수금',
    '합계',
  ];

  const tableRows = getTableRows([
    '회원권 12개월',
    '28',
    '4,332,324',
    '42,345,556',
    '1,343,000',
    '132,500',
  ]);

  return (
    <VerticalTable
      columnWidths={columnWidths}
      tableHeaderCells={tableHeaderCells}
      tableRows={tableRows}
    />
  );
};

export default ProductSalesTable;
