import { Input, SquareButton, VerticalTable } from 'gymlight-design-system';

import * as Styled from './SettlementRequestForm.styles';

import { useSettlementRequestForm } from '@/features/myWork';

import { formatNumberToKoreanCurrency } from '@/utils';

export interface ISettlementRequestFormProps {}

const SettlementRequestForm = () => {
  const { register, expectedSalaryData, handleClickRequestSubmit } = useSettlementRequestForm();

  const commonTableColumnWidths = ['23', '23'];

  const expectedSalaryTableHeader = ['정산 항목', '지급 항목'];
  const expectedSalaryTableRows = [
    ['영업 지원금', formatNumberToKoreanCurrency(expectedSalaryData?.baseSalary || 0)],
    ['OT 인센티브', formatNumberToKoreanCurrency(expectedSalaryData?.otIncentive || 0)],
    ['PT 인센티브 (수업료)', formatNumberToKoreanCurrency(expectedSalaryData?.ptIncentive || 0)],
    [
      '일반 인센티브 (기타)',
      formatNumberToKoreanCurrency(expectedSalaryData?.generalIncentive || 0),
    ],
    ['지급액 계', formatNumberToKoreanCurrency(expectedSalaryData?.totalSalary || 0)],
    ['워크인 혜택 여부', expectedSalaryData?.isWalkinBenefit ? '✅' : '❌'],
  ];

  const salarySettlementRequestTableHeader = ['정산 항목', '지급 금액 (원)'];
  const salarySettlementRequestTableRows = [
    [
      '영업 지원금',
      <Input
        {...register({
          name: 'baseSalary',
        })}
        defaultValue={expectedSalaryData?.baseSalary.toString()}
      />,
    ],
    [
      'PT 인센티브',
      <Input
        {...register({
          name: 'ptIncentive',
        })}
        defaultValue={expectedSalaryData?.ptIncentive.toString()}
      />,
    ],
    [
      'OT 인센티브',
      <Input
        {...register({
          name: 'otIncentive',
        })}
        defaultValue={expectedSalaryData?.otIncentive.toString()}
      />,
    ],
    [
      '일반 인센티브 (주간목표, 기타)',
      <Input
        {...register({
          name: 'generalIncentive',
        })}
        defaultValue={expectedSalaryData?.generalIncentive.toString()}
      />,
    ],
  ];

  return (
    <Styled.Wrapper>
      <Styled.TableWrapper>
        <Styled.TableTitle>예상 정산 내역</Styled.TableTitle>
        <VerticalTable
          columnWidths={commonTableColumnWidths}
          tableHeaderCells={expectedSalaryTableHeader}
          tableRows={expectedSalaryTableRows}
        />
      </Styled.TableWrapper>
      <Styled.TableWrapper>
        <Styled.TableTitle>급여 정산 요청</Styled.TableTitle>
        <VerticalTable
          columnWidths={commonTableColumnWidths}
          tableHeaderCells={salarySettlementRequestTableHeader}
          tableRows={salarySettlementRequestTableRows}
        />
        <SquareButton onClick={() => handleClickRequestSubmit()} variant="primary" wide>
          정산 요청
        </SquareButton>
      </Styled.TableWrapper>
    </Styled.Wrapper>
  );
};

export default SettlementRequestForm;
