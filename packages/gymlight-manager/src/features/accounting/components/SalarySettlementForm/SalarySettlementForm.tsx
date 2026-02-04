import type { ReactNode } from 'react';

import { Checkbox, Input, Select, SquareButton, VerticalTable } from 'gymlight-design-system';

import { SalarySettlementStatusType } from '@/types';

import * as Styled from './SalarySettlementForm.styles';

import { useSalarySettlementForm } from '@/features/accounting';

export interface ISalarySettlementFormProps {
  totalSalary?: number;
  baseSalary?: number;
  otIncentive?: number;
  ptIncentive?: number;
  generalIncentive?: number;
  isWalkinBenefit?: boolean;
  status?: SalarySettlementStatusType;
  salarySettlementId?: number;

  issuedAt?: string;
  staffName?: string;
  branchName?: string;
  staffRole?: string;
}

const SalarySettlementForm = ({
  totalSalary,
  baseSalary,
  otIncentive,
  ptIncentive,
  isWalkinBenefit,

  salarySettlementId,
  generalIncentive,
  issuedAt,
  staffName,
  branchName,
  staffRole,
  status,
}: ISalarySettlementFormProps) => {
  const { register, handleClickSubmit, handleToggleEdit, isEdit, formKey } =
    useSalarySettlementForm({
      salarySettlementId,
    });

  const profileTableHeaderCells = ['지점 이름', '직원 이름', '직원 직급', '발행일'];
  const profileTableColumnWidths = ['19', '19', '19', '19', '19'];

  const profileTableRows = [
    [branchName ?? 'N/A', staffName ?? 'N/A', staffRole ?? 'N/A', issuedAt ?? 'N/A'],
  ] as unknown as ReactNode[][];

  const statusOptions =
    status === '정산대기'
      ? [<option value="정산대기">정산대기</option>, <option value="정산완료">정산완료</option>]
      : [<option value="정산완료">정산완료</option>, <option value="정산대기">정산대기</option>];

  const salaryTableHeader = ['정산 항목', '지급 금액 (원)'];
  const valueTableColumnWidths = ['23', '23'];

  const salaryTableRows = [
    [
      '영업 지원금',
      <Input
        readOnly={!isEdit}
        defaultValue={baseSalary?.toString()}
        {...register({ name: 'baseSalary', defaultValue: baseSalary })}
      />,
    ],
    [
      'PT 인센티브 (수업료)',
      <Input
        readOnly={!isEdit}
        defaultValue={ptIncentive?.toString() as string}
        {...register({ name: 'ptIncentive', defaultValue: ptIncentive })}
      />,
    ],
    [
      'OT인센티브',
      <Input
        readOnly={!isEdit}
        defaultValue={otIncentive?.toString() as string}
        {...register({ name: 'otIncentive', defaultValue: otIncentive })}
      />,
    ],
    [
      '주간목표 인센티브',
      <Input
        readOnly={!isEdit}
        defaultValue={generalIncentive?.toString()}
        {...register({ name: 'generalIncentive', defaultValue: generalIncentive })}
      />,
    ],

    [
      '지급액 계',
      <Input
        readOnly={!isEdit}
        defaultValue={totalSalary?.toString()}
        {...register({ name: 'totalSalary', defaultValue: totalSalary })}
      />,
    ],
    [
      '익월 워크인혜택',
      <Checkbox
        disabled={!isEdit}
        readOnly={!isEdit}
        id="isWalkinBenefit"
        {...register({ name: 'isWalkinBenefit', defaultValue: isWalkinBenefit })}
      />,
    ],
    [
      '정산상태',
      <Select {...register({ name: 'status', defaultValue: status })} disabled={!isEdit}>
        {statusOptions}
      </Select>,
    ],
  ];

  return (
    <Styled.Wrapper key={formKey}>
      <VerticalTable
        height={8}
        tableHeaderCells={profileTableHeaderCells}
        tableRows={profileTableRows}
        columnWidths={profileTableColumnWidths}
      />

      <VerticalTable
        height={34}
        tableHeaderCells={salaryTableHeader}
        columnWidths={valueTableColumnWidths}
        tableRows={salaryTableRows}
      />

      <Styled.ButtonWrapper>
        {isEdit ? (
          <SquareButton onClick={handleClickSubmit} variant="primary">
            {' '}
            저장{' '}
          </SquareButton>
        ) : (
          ''
        )}
        <SquareButton onClick={handleToggleEdit} variant={isEdit ? 'primary-outline' : 'normal'}>
          {isEdit ? '취소' : '수정'}
        </SquareButton>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default SalarySettlementForm;
