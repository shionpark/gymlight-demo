import { Checkbox, VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { CheckIcon } from '@heroicons/react/24/outline';

/** 품목별 내역 */
const PaymentMethodTable = () => {
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs, // No.
    tableCellWidth.md, // 결제수단
    tableCellWidth.sm, // 판매량
    tableCellWidth.sm, // 현금
    tableCellWidth.sm, // 카드
    tableCellWidth.sm, // 미수금
    tableCellWidth.md, // 합계
  ];
  const tableHeaderCells = [
    <CheckIcon />,
    'No.',
    '결제 수단',
    '판매량',
    '현금',
    '카드',
    '미수금',
    '합계',
  ];
  const tableRows = [
    [<Checkbox />, '1', '카드', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '현금', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '계좌이체', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '복합결제', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
  ];

  return (
    <VerticalTable
      columnWidths={columnWidths}
      tableHeaderCells={tableHeaderCells}
      tableRows={tableRows}
    />
  );
};

export default PaymentMethodTable;
