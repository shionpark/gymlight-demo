import { memo } from 'react';
import { SectionTitle, FlexColumnWrapper } from '../SalaryStatement.styles';
import { VerticalTable } from 'gymlight-design-system';

const ExplanationTable = () => {
  const tableHeaderCells = ['구분', '지급 조건 ', '계산 방법'];
  const tableRows = [
    ['영업지원금', '트레이너 등급에 따라 책정되는 기본금', '계약서에 고지된 금액'],
    ['정산 수업료', 'PT수업 진행시 지급', '진행수업료 * 정산비율'],
    [
      'OT인센티브',
      'OT회원수가 인센티브기준을 달성했고, OT사용방법이 “당월인센티브”인경우에 지급',
      '(OT회원수 - OT인센티브기준) * OT인센티브금액',
    ],
    ['주간목표매출 인센티브', '주간 PT목표매출 달성시 지급', '주간목표매출인센티브 * 달성횟수'],
    [
      '팀장 인센티브',
      '직급이 “팀장”인 트레이너에게 지급',
      '팀장인센티브율 * 본인 팀 전체 PT매출액',
    ],
    [
      '추가 인센티브',
      '프로그램 데이터와에 독립적인 재량 실적에 대해 지급 (블로그 관리 등)',
      '관리자, 센터 재량',
    ],
  ];
  const columnWidths = ['20%', '40%', '40%'];

  return (
    <FlexColumnWrapper>
      <SectionTitle>정산항목 계산방법</SectionTitle>
      <VerticalTable
        height={39}
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
        columnWidths={columnWidths}
      />
    </FlexColumnWrapper>
  );
};

export default memo(ExplanationTable);
