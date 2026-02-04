import {
  Checkbox,
  VerticalTable,
  SearchInput,
  DualSideBar,
  SquareButton,
  TableHeaderButton,
  TablePaginationManager,
  Dropdown,
} from 'gymlight-design-system';

import { FilterWindowButton } from '@/components';
import { RegisteredMemberFilterMenu, useRegisteredMemberTable } from '@/features/member';

import { tableCellWidth } from '@/styles/variables';

import * as TableStyled from './table.styles';

import type { IMemberListResponse } from '@/types';

import type { IMemberDetailManagementSectionProps } from '../MemberDetailManagementSection/MemberDetailManagementSection';

export interface IMemberResponse {
  memberId: number; // 회원 식별자

  name: string;
  gender: '남' | '여';
  birthDate: string;
  age: number;
  phone: string;

  joinDate: string;
  startDate: string;
  endDate: string;

  remainingDays: number;
  remainingSessions: number;

  branchId: number;
  branchName: string;
}

interface IRegisteredMemberTableProps {
  openMemberDetailsModal: (props: IMemberDetailManagementSectionProps) => void;
}

const RegisteredMemberTable = ({ openMemberDetailsModal }: IRegisteredMemberTableProps) => {
  const {
    memberListData,
    searchedMemberListData,

    searchInputRef,
    runSearch,
    isSearching,
    endSearch,

    handlePageNumberChange,

    pageNum,
    pageSize,

    nameButtonProps,
    ageButtonProps,
    joinDateButtonProps,
    startDateButtonProps,
    endDateButtonProps,
    remainingDaysButtonProps,
    remainingCountButtonProps,
    handlePageSizeChange,

    setFilterDropdownRef,
    isFilterDropdownOpened,
    toggleFilterDropdownOpen,
    filterBoxProps,
  } = useRegisteredMemberTable();

  const tableHeaderCells = [
    '✔️',
    'No.',
    <TableHeaderButton id="member-name" {...nameButtonProps} icon={<nameButtonProps.icon />} />,

    '성별',
    '연락처',
    '생년월일',
    <TableHeaderButton id="member-age" {...ageButtonProps} icon={<ageButtonProps.icon />} />,
    '상태',
    '담당 트레이너',

    <TableHeaderButton
      id="member-start-date"
      {...startDateButtonProps}
      icon={<startDateButtonProps.icon />}
    />,
    <TableHeaderButton
      id="member-end-date"
      {...endDateButtonProps}
      icon={<endDateButtonProps.icon />}
    />,
    <TableHeaderButton
      id="member-remain-days"
      {...remainingDaysButtonProps}
      icon={<remainingDaysButtonProps.icon />}
    />,
    <TableHeaderButton
      id="member-remain-sessions"
      {...remainingCountButtonProps}
      icon={<remainingCountButtonProps.icon />}
    />,
    <TableHeaderButton
      id="member-join-date"
      {...joinDateButtonProps}
      icon={<joinDateButtonProps.icon />}
    />,
    '상세 정보',
  ];
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs,
    tableCellWidth.xs,

    tableCellWidth.xxs,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.xs,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.xs,
  ];

  const createTableRows = (data: IMemberListResponse | undefined) => {
    return data?.list.length
      ? data.list.map(
          (
            {
              memberId,
              name,
              phone,
              age,
              status,
              trainerName,
              gender,
              birthDate,
              joinDate,
              startDate,
              endDate,
              remainingDays,
              remainingSessions,
            },
            index,
          ) => [
            <Checkbox id={`coupon-${index}`} />,
            index,
            name,
            gender,

            phone,
            birthDate,
            age,

            status,
            trainerName || '없음',
            <TableStyled.DateAndTime>{startDate.split(' ').join('\n')}</TableStyled.DateAndTime>,
            <TableStyled.DateAndTime>{endDate.split(' ').join('\n')}</TableStyled.DateAndTime>,
            remainingDays,
            remainingSessions,
            joinDate,

            <SquareButton
              size="small"
              variant="primary"
              onClick={() => openMemberDetailsModal({ memberId })}
            >
              상세정보
            </SquareButton>,
          ],
        )
      : [];
  };

  const data = isSearching ? searchedMemberListData : memberListData;

  const searchedTableRows = createTableRows(searchedMemberListData);
  const unSearchedTableRows = createTableRows(memberListData);

  const tableRows = isSearching ? searchedTableRows : unSearchedTableRows;

  return (
    <TableStyled.Wrapper>
      <DualSideBar
        className="top-menu"
        rightSideChildren={[
          <Dropdown
            ref={setFilterDropdownRef(0)}
            align="left"
            isDropdownMenuOpened={isFilterDropdownOpened}
            button={<FilterWindowButton onClick={toggleFilterDropdownOpen} />}
          >
            <RegisteredMemberFilterMenu {...filterBoxProps} />
          </Dropdown>,
          <SearchInput placeholder="이름, 연락처 검색" ref={searchInputRef} />,
          <SquareButton size="small" variant="outline" onClick={runSearch}>
            검색
          </SquareButton>,
          <>
            {isSearching && (
              <SquareButton size="small" variant="outline" onClick={endSearch}>
                초기화
              </SquareButton>
            )}
          </>,
        ]}
      />
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
      <TablePaginationManager
        tableDataName="등록 회원"
        currentPageIndexNumber={pageNum}
        totalPageNumber={data?.totalPages || 0}
        pageSize={pageSize}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
      />
    </TableStyled.Wrapper>
  );
};

export default RegisteredMemberTable;
