import { useEffect } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';
import {
  Checkbox,
  Dropdown,
  ScrollableTableCell,
  TableHeaderButton,
  VerticalTable,
  TablePaginationManager,
  DropdownForMenu,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { TopPanel } from './BranchTable.styles';

import { BranchStatusFlag, type IReturnOfUseBranchTable } from '@/features/branch';

export interface BranchEditFormProps {
  name: string;
  tel: string;
  address: string;
  branchId: number;
  openDate: string;
  code: string;
}

const BranchTable = ({
  data,
  resetCheckboxes,

  sortParam,
  branchNumberButtonProps,
  branchNameButtonProps,
  openDateButtonProps,

  checkboxStates,
  toggleOneCheckbox,
  toggleAllCheckboxes,

  toggleDropdownMenu,
  checkDropdownMenuOpen,
  setDropdownMenuRef,

  handleClickEditBranch,
  handleClickDeleteBranch,
  handleClickChangeBranchStatus,

  pageSize,
  handlePageSizeChange,
  currentPageNumber,
  handlePageNumberChange,
}: IReturnOfUseBranchTable) => {
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.sm,
    tableCellWidth.lg,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.xl,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.xs,
  ];

  const tableHeaderCells = [
    <CheckIcon width="2rem" onClick={toggleAllCheckboxes} />,
    <TableHeaderButton
      id="branch-number"
      {...branchNumberButtonProps}
      icon={<branchNumberButtonProps.icon />}
    />,
    <TableHeaderButton
      id="branch-name"
      {...branchNameButtonProps}
      icon={<branchNameButtonProps.icon />}
    />,
    '지점 코드',
    '전화 번호',
    '지점 주소',
    '지점 상태',
    '매니저 이름',
    '직원 수',
    '회원 수',
    <TableHeaderButton
      id="branch-createdAt"
      {...openDateButtonProps}
      icon={<openDateButtonProps.icon />}
    />,
    '설정',
  ];

  useEffect(() => {
    resetCheckboxes();
  }, [sortParam]);

  const tableRows = data
    ? data.list.map(
        (
          {
            number,
            name,
            code,
            tel,
            address,
            status,
            managerName,
            memberCount,
            staffCount,
            openDate,
            branchId,
          },
          index,
        ) => [
          <Checkbox
            id={`check-${name}-${tel}`}
            checked={checkboxStates[index]}
            onClick={() => toggleOneCheckbox(index)}
          />,
          number,
          name,
          code,
          tel,
          <ScrollableTableCell>{address}</ScrollableTableCell>,
          <BranchStatusFlag status={status} />,
          managerName,
          memberCount,
          staffCount,
          openDate,
          <Dropdown
            key={`branchTable-dropdown-${branchId}`}
            align="left"
            ref={setDropdownMenuRef(index)}
            isDropdownMenuOpened={checkDropdownMenuOpen(index)}
            onClick={() => toggleDropdownMenu(index)}
          >
            <DropdownForMenu
              onClick={handleClickEditBranch({
                initName: name,
                initCode: code,
                initAddress: address,
                branchId,
                initTel: tel,
                initOpenDate: openDate,
              })}
            >
              지점정보 수정
            </DropdownForMenu>
            <DropdownForMenu
              onClick={handleClickChangeBranchStatus({
                initStatus: status,
                branchId,
                name,
                number,
              })}
            >
              지점상태 변경
            </DropdownForMenu>
            <DropdownForMenu onClick={handleClickDeleteBranch({ name, branchId })}>
              지점 삭제
            </DropdownForMenu>
          </Dropdown>,
        ],
      )
    : [];

  return (
    <>
      <TopPanel>
        <div>
          <span>
            전체 지점 총 {`${data?.totalElements}`}개 {'\b'}
          </span>
          <span>
            / {'\b'} {sortParam} 기준{' '}
          </span>
        </div>
      </TopPanel>
      <VerticalTable
        columnWidths={columnWidths}
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
      />
      <TablePaginationManager
        pageSize={pageSize}
        totalPageNumber={data?.totalPages || 0}
        currentPageIndexNumber={currentPageNumber}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        tableDataName="지점"
      />
    </>
  );
};

export default BranchTable;
