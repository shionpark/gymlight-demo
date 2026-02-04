import { VerticalTable } from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';
import * as TabStyle from './tab.styles';

import { IMemberPaymentInfo } from '@/types';

interface IMemberPaymentTabProps {
  payments: IMemberPaymentInfo[];
}

const MemberPaymentTab = ({ payments }: IMemberPaymentTabProps) => {
  const tableHeaderCells = [
    'No.',
    '결제 상태',
    '총 금액',
    '결제 금액',
    '미수금',
    '할인 금액',
    '할인 사유',
    '결제 수단',
    '전산 등록일',
  ];

  const columnWidths = [
    tableCellWidth.xxl,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.xs,
    tableCellWidth.sm,
  ];

  const tableRows = payments
    ? payments.map((aPayment, index) => [
        index,
        aPayment.paymentStatus,
        aPayment.totalAmount,
        aPayment.paidAmount,
        aPayment.receivableAmount,
        aPayment.discountAmount,
        aPayment.discountReason,
        aPayment.paymentMethod,
        aPayment.createdAt,
      ])
    : [];

  return (
    <TabStyle.Wrapper>
      <TabStyle.TopPanel>조회된 내역 총 {payments.length}개</TabStyle.TopPanel>
      <VerticalTable
        height={30}
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
        columnWidths={columnWidths}
      />
    </TabStyle.Wrapper>
  );
};
export default MemberPaymentTab;
