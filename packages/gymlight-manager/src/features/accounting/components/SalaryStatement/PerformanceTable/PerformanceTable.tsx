import { VerticalTable } from 'gymlight-design-system';

import { SectionTitle, FlexColumnWrapper } from '../SalaryStatement.styles';

export interface IPerformanceTableProps {
  systemOtCount: number;
  systemWeeklyGoalPtRevenueCount: number;
  systemTeamRevenue: number;

  managerOtCount: number;
  managerWeeklyGoalPtRevenueCount: number;
  managerTeamRevenue?: number;
  managerAdditionalIncentive: number;

  systemTrainerSupport: number;
  systemMembershipPoint: number;
  systemPtRevenue: number;
  systemPtConductedRevenue: number;
  managerTrainerSupport: number;
  managerMembershipPoint: number;
  managerPtRevenue: number;
  managerPtConductedRevenue: number;
}

const PerformanceTable = ({
  systemOtCount,
  systemWeeklyGoalPtRevenueCount,
  systemTeamRevenue,
  systemTrainerSupport,
  systemMembershipPoint,
  systemPtRevenue,
  systemPtConductedRevenue,

  managerOtCount,
  managerWeeklyGoalPtRevenueCount,
  managerTeamRevenue,
  managerAdditionalIncentive,

  managerTrainerSupport,
  managerMembershipPoint,
  managerPtRevenue,
  managerPtConductedRevenue,
}: IPerformanceTableProps) => {
  const columnWidths = ['19', '19', '19', '19', '19'];
  const incentivePerformanceTableHeaderCells = [
    '인센티브실적',
    'OT회원수',
    '주간목표달성',
    '팀매출액',
    '추가인센티브',
  ];

  const incentivePerformanceTableRows = [
    ['전산 데이터', systemOtCount, systemWeeklyGoalPtRevenueCount, systemTeamRevenue, ''],
    [
      '관리자 인증',
      managerOtCount,
      managerWeeklyGoalPtRevenueCount,
      managerTeamRevenue,
      managerAdditionalIncentive,
    ],
  ];

  const commonPerformanceTableHeaderCells = [
    '일반정산정보',
    '영업지원금',
    '포인트',
    'PT매출액',
    '진행수업료',
  ];

  const commonPerformanceTableRows = [
    [
      '전산 데이터',
      systemTrainerSupport,
      systemMembershipPoint,
      systemPtRevenue,
      systemPtConductedRevenue,
    ],
    [
      '관리자 인증',
      managerTrainerSupport,
      managerMembershipPoint,
      managerPtRevenue,
      managerPtConductedRevenue,
    ],
  ];
  return (
    <FlexColumnWrapper>
      <SectionTitle>반영 실적</SectionTitle>

      <VerticalTable
        height={12}
        tableHeaderCells={incentivePerformanceTableHeaderCells}
        tableRows={incentivePerformanceTableRows}
        columnWidths={columnWidths}
      />
      <VerticalTable
        height={12}
        tableHeaderCells={commonPerformanceTableHeaderCells}
        tableRows={commonPerformanceTableRows}
        columnWidths={columnWidths}
      />
    </FlexColumnWrapper>
  );
};

export default PerformanceTable;
