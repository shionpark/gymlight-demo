import { Checkbox, VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { CheckIcon } from '@heroicons/react/24/outline';

/** 품목별 내역 */
const ProductCategoryTable = () => {
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
    '상품 종류',
    '판매량',
    '현금',
    '카드',
    '미수금',
    '합계',
  ];
  const tableRows = [
    [<Checkbox />, '1', '패키지', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '회원권', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', 'PT', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '운동복', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
    [<Checkbox />, '1', '락커', '28', '4,332,324', '42,345,556', '1,343,000', '132,500'],
  ];

  return (
    <VerticalTable
      columnWidths={columnWidths}
      tableHeaderCells={tableHeaderCells}
      tableRows={tableRows}
    />
  );
};

export default ProductCategoryTable;
