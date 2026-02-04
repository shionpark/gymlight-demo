import {
  Input,
  LabeledContainer,
  SquareButton,
  Textarea,
  VerticalTable,
} from 'gymlight-design-system';

import { SectionTitle, FlexColumnWrapper } from './SalaryStatementForm.styles';

import { SalaryStatement, UseSalaryStatementFormReturnType } from '@/features/accounting';
import { DetailMoneyValueTable } from '../SalaryStatement/DetailMoneyValueTable';
import { InvisibleWrapper } from '@/components';

export interface ISalaryStatementFormProps extends UseSalaryStatementFormReturnType {}

const SalaryStatementForm = ({
  performanceTableFormProps,
  statementProps,
  onChangeManagerComment,
  managerComment,
  statementRef,
  onSubmit,
}: ISalaryStatementFormProps) => {
  const {
    systemOtCount,
    systemWeeklyGoalPtRevenueCount,
    systemTeamRevenue,

    systemTrainerSupport,
    systemMembershipPoint,
    systemPtRevenue,
    systemPtConductedRevenue,
    managerOtCount,
    onChangeManagerOtCount,
    managerWeeklyGoalPtRevenueCount,
    onChangeManagerWeeklyGoalPtRevenueCount,
    managerTeamRevenue,
    onChangeManagerTeamRevenue,
    managerAdditionalIncentive,
    onChangeManagerAdditionalIncentive,

    managerTrainerSupport,
    onChangeManagerTrainerSupport,
    managerMembershipPoint,
    onChangeManagerMembershipPoint,
    managerPtRevenue,
    onChangeManagerPtRevenue,
    managerPtConductedRevenue,
    onChangeManagerPtConductedRevenue,
  } = performanceTableFormProps;

  const columnWidths = ['19', '19', '19', '19', '19'];
  const incentiveSalaryStatementFormHeaderCells = [
    '인센티브실적',
    'OT회원수',
    '주간목표달성',
    '팀매출액',
    '추가인센티브',
  ];

  const incentiveSalaryStatementFormRows = [
    ['전산 데이터', systemOtCount, systemWeeklyGoalPtRevenueCount, systemTeamRevenue, ''],
    [
      '관리자 인증',
      <Input value={managerOtCount} onChange={onChangeManagerOtCount} />,
      <Input
        value={managerWeeklyGoalPtRevenueCount}
        onChange={onChangeManagerWeeklyGoalPtRevenueCount}
      />,
      <Input value={managerTeamRevenue} onChange={onChangeManagerTeamRevenue} />,
      <Input value={managerAdditionalIncentive} onChange={onChangeManagerAdditionalIncentive} />,
    ],
  ];

  const commonSalaryStatementFormHeaderCells = [
    '일반정산정보',
    '영업지원금',
    '포인트',
    'PT매출액',
    '진행수업료',
  ];

  const commonSalaryStatementFormRows = [
    [
      '전산 데이터',
      systemTrainerSupport,
      systemMembershipPoint,
      systemPtRevenue,
      systemPtConductedRevenue,
    ],
    [
      '관리자 인증',
      <Input value={managerTrainerSupport} onChange={onChangeManagerTrainerSupport} />,
      <Input value={managerMembershipPoint} onChange={onChangeManagerMembershipPoint} />,
      <Input value={managerPtRevenue} onChange={onChangeManagerPtRevenue} />,
      <Input value={managerPtConductedRevenue} onChange={onChangeManagerPtConductedRevenue} />,
    ],
  ];
  return (
    <>
      <InvisibleWrapper ref={statementRef}>
        <SalaryStatement {...statementProps} />
      </InvisibleWrapper>
      <FlexColumnWrapper>
        <SectionTitle>반영 실적</SectionTitle>

        <VerticalTable
          height={12}
          tableHeaderCells={incentiveSalaryStatementFormHeaderCells}
          tableRows={incentiveSalaryStatementFormRows}
          columnWidths={columnWidths}
        />
        <VerticalTable
          height={12}
          tableHeaderCells={commonSalaryStatementFormHeaderCells}
          tableRows={commonSalaryStatementFormRows}
          columnWidths={columnWidths}
        />
      </FlexColumnWrapper>
      <DetailMoneyValueTable {...statementProps.detailMoneyValueTableProps} />
      <LabeledContainer labelText="매니저 코멘트" vertical>
        <Textarea
          size="normal"
          value={managerComment}
          onChange={onChangeManagerComment}
          maxTextLength={150}
        />
      </LabeledContainer>
      <SquareButton wide onClick={onSubmit}>
        발급 완료
      </SquareButton>
    </>
  );
};

export default SalaryStatementForm;
