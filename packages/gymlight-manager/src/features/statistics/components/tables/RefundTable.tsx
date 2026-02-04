import { SquareButton, VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { CheckIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

const RefundTable = ({
  getTableRows,
}: {
  getTableRows: (row: (string | ReactNode)[]) => ReactNode[][];
}) => {
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs, // No.
    tableCellWidth.md, // 구매 일시
    tableCellWidth.sm, // 회원명
    tableCellWidth.lg, // 상품명
    tableCellWidth.sm, // 담당자
    tableCellWidth.sm, // 환불 금액
    tableCellWidth.md, // 환불 일시
    tableCellWidth.sm, // 판매 금액
    tableCellWidth.sm, // 할인금액
    tableCellWidth.sm, // 결제수단
    tableCellWidth.sm, // 현금
    tableCellWidth.sm, // 카드
    tableCellWidth.sm, // 카드사
    tableCellWidth.sm, // 승인번호
  ];

  const tableHeaderCells = [
    <CheckIcon />,
    'No.',
    '구매일',
    '회원명',
    '상품명',
    '담당자',
    '환불 금액',
    '환불 일시',
    '판매 금액',
    '할인 금액',
    '결제수단',
    '현금',
    '카드',
    '카드사',
    '승인번호',
  ];
  const tableRows = getTableRows([
    '2024-12-01',
    '홍길동',
    '회원권 12개월',
    '박용성',
    <SquareButton size="xsmall">600,000</SquareButton>,
    '2024-12-02',
    '600,000',
    '0',
    '카드',
    '0',
    '600,000',
    '신한카드',
    '122313',
  ]);

  return (
    <VerticalTable
      columnWidths={columnWidths}
      tableHeaderCells={tableHeaderCells}
      tableRows={tableRows}
    />
  );
};

export default RefundTable;
