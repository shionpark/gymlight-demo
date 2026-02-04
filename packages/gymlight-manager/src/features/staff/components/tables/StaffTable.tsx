import {
  Checkbox,
  SquareButton,
  TableHeaderButton,
  TablePaginationManager,
  VerticalTable,
} from 'gymlight-design-system';
import { CheckIcon } from '@heroicons/react/24/outline';

import { tableCellWidth } from '@/styles/variables';
import type { UserStatusType } from '@/types';

import { StaffStatusFlag } from '@/features/staff/components';
import TableInfoSection from './TableInfoSection';
import { useStaffModal, type IStaffTableProps } from '@/features/staff/hooks';

import * as Styled from './StaffTable.styles';

const StaffTable = ({
  staffData,
  sortProps: { nameCellProps, ageCellProps, joinDateCellProps, birthDateCellProps, ...sortProps },
  paginationProps: { currentPageNumber, pageSize, handlePageNumberChange, handlePageSizeChange },
  checkboxProps: { checkboxStates, toggleOneCheckbox, toggleAllCheckboxes, checkboxCountSelected },
  roleFilterProps,
  statusFilterProps,
}: IStaffTableProps) => {
  const { openStaffFormModal } = useStaffModal();

  const tableRows = staffData?.list
    ? staffData.list.map(
        (
          {
            staffId,
            name,
            status,
            branchName,
            role,
            gender,
            age,
            birthDate,
            phone,
            joinDate,
            email,
          },
          index,
        ) => {
          const isApprovePending = (currentState: UserStatusType): boolean =>
            status === currentState;

          const renderApproveButton = (content: string) => (
            <Styled.ApproveButton>
              {isApprovePending('승인대기') ? (
                <SquareButton
                  wide
                  size="xsmall"
                  onClick={() =>
                    openStaffFormModal({
                      staffId,
                      staffRoleName: role,
                      staffStatus: status,
                      branchName,
                    })
                  }
                >
                  입력
                </SquareButton>
              ) : (
                content
              )}
            </Styled.ApproveButton>
          );

          return [
            <Checkbox
              id={`check-${name}-${phone}`}
              checked={checkboxStates[index]}
              onClick={() => toggleOneCheckbox(index)}
            />,
            name,
            <StaffStatusFlag status={status} />,
            renderApproveButton(role),
            phone,
            email,
            birthDate,
            age,
            gender,
            joinDate,
          ];
        },
      )
    : [];

  const tableHeaderCells = [
    <CheckIcon onClick={toggleAllCheckboxes} />,
    <TableHeaderButton {...nameCellProps} icon={<nameCellProps.icon />} />,
    <TableHeaderButton id="status" buttonName="상태" />,
    <TableHeaderButton id="role" buttonName="직급" />,
    <TableHeaderButton id="phone" buttonName="연락처" />,
    <TableHeaderButton id="email" buttonName="이메일" />,
    <TableHeaderButton {...birthDateCellProps} icon={<birthDateCellProps.icon />} />,
    <TableHeaderButton id="gender" buttonName="성별" />,
    <TableHeaderButton {...ageCellProps} icon={<ageCellProps.icon />} />,
    <TableHeaderButton {...joinDateCellProps} icon={<joinDateCellProps.icon />} />,
  ];

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.md, // 이름
    tableCellWidth.sm, // 상태
    tableCellWidth.md, // 직급
    tableCellWidth.md, // 연락처
    tableCellWidth.lg, // 이메일
    tableCellWidth.sm, // 생년월일
    tableCellWidth.xs, // 성별
    tableCellWidth.xs, // 나이
    tableCellWidth.lg, // 가입일
  ];

  return (
    <Styled.Wrapper>
      <TableInfoSection
        staffData={staffData}
        checkboxCountSelected={checkboxCountSelected}
        roleFilterProps={roleFilterProps}
        statusFilterProps={statusFilterProps}
        {...sortProps}
      />

      <VerticalTable
        columnWidths={columnWidths}
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
      />

      <TablePaginationManager
        totalPageNumber={staffData?.totalPages || 0}
        currentPageIndexNumber={currentPageNumber}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        tableDataName="직원 "
        pageSize={pageSize}
      />
    </Styled.Wrapper>
  );
};

export default StaffTable;
