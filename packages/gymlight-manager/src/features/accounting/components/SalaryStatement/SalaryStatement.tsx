import * as Styled from './SalaryStatement.styles';

import { PerformanceTable } from './PerformanceTable';
import type { IPerformanceTableProps } from './PerformanceTable/PerformanceTable';
import { StaffProfileTable } from './StaffProfileTable';
import { DetailMoneyValueTable } from './DetailMoneyValueTable';
import { IDetailMoneyValueTableProps } from './DetailMoneyValueTable/DetailMoneyValueTable';
import { IStaffProfileTableProps } from './StaffProfileTable/StaffProfileTable';
import { ExplanationTable } from './ExplanationTable';

export interface ISalaryStatementProps {
  year: number | string;
  month: number | string;
  detailMoneyValueTableProps: IDetailMoneyValueTableProps;
  staffProfileTableProps: IStaffProfileTableProps;
  performanceTableProps: IPerformanceTableProps;
  managerComment?: string;
}

const SalaryStatement = ({
  year,
  month,
  managerComment,
  detailMoneyValueTableProps,
  staffProfileTableProps,
  performanceTableProps,
}: ISalaryStatementProps) => {
  return (
    <Styled.Wrapper>
      <Styled.MainTitle>
        {year}년 {month}월 짐라이트 급여 명세서
      </Styled.MainTitle>
      <Styled.GridWrapper>
        <Styled.DetailValueContainer>
          <Styled.SectionTitle> 발행 정보</Styled.SectionTitle>
          <StaffProfileTable {...staffProfileTableProps} />
          <DetailMoneyValueTable {...detailMoneyValueTableProps} />
          <Styled.SectionTitle>매니저 코멘트</Styled.SectionTitle>
          <Styled.commentPre>{managerComment}</Styled.commentPre>
        </Styled.DetailValueContainer>
        <Styled.FlexColumnWrapper>
          <PerformanceTable {...performanceTableProps} />
          <ExplanationTable />
        </Styled.FlexColumnWrapper>
      </Styled.GridWrapper>
    </Styled.Wrapper>
  );
};

export default SalaryStatement;
