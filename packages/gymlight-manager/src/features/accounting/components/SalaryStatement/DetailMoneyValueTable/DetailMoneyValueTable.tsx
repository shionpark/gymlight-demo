import { memo } from 'react';

import { VerticalTable } from 'gymlight-design-system';

import * as Styled from '../SalaryStatement.styles';

export interface IDetailMoneyValueTableProps {
  trainerSupport: number;
  ptIncentive: number;
  otIncentive: number;
  weeklyGoalPtIncentive: number;
  leaderTrainerIncentive: number;
  generalIncentive: number;
  otPenalty: number;
  incomeTax: number;
  totalSalary: number;
  totalDeduction: number;

  isNextMonthWalkinBenefit: boolean;
  actualSalary: number;
}

const DetailMoneyValueTable = ({
  isNextMonthWalkinBenefit,
  actualSalary,

  trainerSupport,

  otIncentive,
  weeklyGoalPtIncentive,
  leaderTrainerIncentive,
  generalIncentive,
  totalSalary,

  otPenalty,
  incomeTax,
  totalDeduction,
  ptIncentive,
}: IDetailMoneyValueTableProps) => {
  const valueTableColumnWidths = ['23', '23'];
  const salaryTableHeader = ['정산 항목', '지급 금액 (원)'];

  const salaryTableRows = [
    ['영업지원금', trainerSupport],
    ['정산 수업료', ptIncentive],
    ['OT인센티브', otIncentive],
    ['주간목표 인센티브', weeklyGoalPtIncentive],
    ['팀장 인센티브', leaderTrainerIncentive],

    ['추가 인센티브', generalIncentive],
    ['지급액 계', totalSalary],
    ['익월 워크인혜택', isNextMonthWalkinBenefit ? 'O' : 'X'],
  ];

  const deductionTableHeader = ['공제 항목', '공제 금액 (원)'];

  const deductionTableRows = [
    ['OT 패널티', otPenalty],
    ['소득세 3.3%', incomeTax],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['공재액 계', totalDeduction],
    ['실수령 액 (원)', actualSalary],
  ];
  return (
    <>
      <Styled.DetailValueTableHeaders>
        <Styled.SectionTitle>지급</Styled.SectionTitle>
        <Styled.SectionTitle>공제</Styled.SectionTitle>
      </Styled.DetailValueTableHeaders>

      <Styled.GridWrapper>
        <VerticalTable
          height={34}
          tableHeaderCells={salaryTableHeader}
          columnWidths={valueTableColumnWidths}
          tableRows={salaryTableRows}
        />
        <VerticalTable
          height={34}
          tableHeaderCells={deductionTableHeader}
          columnWidths={valueTableColumnWidths}
          tableRows={deductionTableRows}
        />
      </Styled.GridWrapper>
    </>
  );
};

export default memo(DetailMoneyValueTable);
