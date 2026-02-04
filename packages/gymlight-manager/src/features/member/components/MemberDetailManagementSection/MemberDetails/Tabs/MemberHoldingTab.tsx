import { tableCellWidth } from '@/styles/variables';

import {
  Checkbox,
  DualSideBar,
  TablePaginationManager,
  VerticalTable,
} from 'gymlight-design-system';

import { DateFilterOptionBox } from '@/components';

import * as TabStyle from './tab.styles';

import { IMemberHoldingInfo } from '@/types';

interface IMemberHoldingTabProps {
  holdings: IMemberHoldingInfo[];
}

const MemberHoldingTab = ({ holdings }: IMemberHoldingTabProps) => {
  const tableHeaderCells = ['No.', '홀딩 일수', '신청일', '시작일', '종료일', '사유'];
  const columnWidths = [
    tableCellWidth.xs,
    tableCellWidth.md,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.md,
  ];

  const tableRows = holdings
    ? holdings.map((aHolding, index) => [
        index,
        aHolding.days,
        aHolding.createdAt,
        aHolding.startDate,
        aHolding.endDate,
        aHolding.reason,
      ])
    : [];

  return (
    <TabStyle.Wrapper>
      <VerticalTable
        height={30}
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
    </TabStyle.Wrapper>
  );
};
export default MemberHoldingTab;
