import { VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

/** 매출 내역 */
const TotalSalesTable = () => {
  const columnWidths = [
    tableCellWidth.md, // 총매출액
    tableCellWidth.md, // 현금
    tableCellWidth.md, // 카드
    tableCellWidth.md, // 미수금
    tableCellWidth.md, // 환불금액
  ];

  const tableHeaderCells = ['총 매출액', '현금', '카드', '미수금', '환불 금액'];

  const tableRows = [['55,975,400', '4,332,324', '42,345,556', '1,343,000', '132,500']];

  return (
    <VerticalTable
      columnWidths={columnWidths}
      tableHeaderCells={tableHeaderCells}
      tableRows={tableRows}
    />
  );
};

export default TotalSalesTable;
