import {
  LabeledContainer,
  Pagination,
  SearchInput,
  SquareButton,
  VerticalTable,
  SelectWithCustomOption,
  Checkbox,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';

import { useMyMemberTable } from '@/features/myWork';

import * as Styled from '../tables.styles';
import { getEachDateTimePartsFromDate } from '@/utils';

const MyMemberTable = () => {
  const {
    pageSize,
    isSearching,
    searchInputRef,
    runSearch,
    endSearch,
    currentPageNumber,
    handlePageNumberChange,
    handlePageSizeChange,
    myMembers,
    openMemberDetailsModal,
    openScheduleFormModal,
  } = useMyMemberTable();

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.xs,
    tableCellWidth.md,
    tableCellWidth.xs,
    tableCellWidth.md,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
  ];

  const tableHeaderCells = [
    '✔️',
    '회원명',
    '연락처',
    '성별',
    '생년월일',
    '나이',
    '회원권 등록일',
    '회원권 만료일',
    '회원권 잔여일',
    'PT잔여량',
    'OT잔여량',
    '당월 OT수행 수',
    '수업 등록',
    '상세보기',
  ];
  const tableRows = myMembers
    ? myMembers.list.map(
        ({
          memberId,
          name,
          gender,
          birthDate,
          remainingDays,
          remainingSessions,
          remainingOtCounts,
          completedOtThisMonth,

          age,
          phone,

          startDate,
          endDate,
        }) => [
          <Checkbox id={`my-member-${memberId}`} />,
          name,
          phone,
          gender,
          birthDate,
          age,
          startDate,
          endDate,
          remainingDays,
          remainingSessions,
          remainingOtCounts,
          completedOtThisMonth,

          <SquareButton
            size="small"
            onClick={() => {
              const { year, month, day, time } = getEachDateTimePartsFromDate(new Date());
              openScheduleFormModal({
                initMemberId: memberId,
                memberName: name,
                memberPhone: phone,
                startDateYear: year,
                startDateMonth: month,
                startDateDay: day,
                scheduledStartTime: time,
              });
            }}
          >
            수업 등록
          </SquareButton>,
          <SquareButton
            size="small"
            variant="primary"
            onClick={() => openMemberDetailsModal({ memberId })}
          >
            상세정보
          </SquareButton>,
        ],
      )
    : [[]];
  return (
    <>
      <Styled.DualSideHeader
        rightSideChildren={[
          <Styled.SearchSectionWrapper>
            <SearchInput placeholder="이름, 연락처 검색" ref={searchInputRef} />,
            <SquareButton size="small" variant="outline" onClick={runSearch}>
              검색
            </SquareButton>
            {isSearching && (
              <SquareButton size="small" variant="outline" onClick={endSearch}>
                초기화
              </SquareButton>
            )}
          </Styled.SearchSectionWrapper>,
        ]}
      />
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        tableRows={tableRows}
        columnWidths={columnWidths}
      />
      <Styled.DualSideBottom
        leftSideChildren={[
          <Pagination
            currentPage={currentPageNumber}
            onPageChange={handlePageNumberChange}
            totalPages={0}
          />,
        ]}
        rightSideChildren={[
          <LabeledContainer
            labelText="한 페이지당 회원 수"
            width={20}
            labelRatio={2}
            contentRatio={2}
          >
            <SelectWithCustomOption value={pageSize} onChange={handlePageSizeChange}>
              {[3, 5, 10, 20].map((num) => (
                <option value={num.toString()}>{num}</option>
              ))}
            </SelectWithCustomOption>
          </LabeledContainer>,
        ]}
      />
    </>
  );
};
export default MyMemberTable;
