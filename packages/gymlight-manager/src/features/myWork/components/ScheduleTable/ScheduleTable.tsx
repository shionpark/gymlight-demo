import {
  LabeledContainer,
  Pagination,
  SearchInput,
  SquareButton,
  VerticalTable,
  SelectWithCustomOption,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';
import { useScheduleTable } from '@/features/myWork';

import * as Styled from '../tables.styles';

interface IScheduleTableProps {}

const ScheduleTable = ({}: IScheduleTableProps) => {
  const {
    getSelectTabHandler,
    getTabButtonVariant,
    tabsMenus,

    searchInputRef,
    isSearching,
    runSearch,
    endSearch,

    pageSize,
    currentPageNumber,
    handlePageNumberChange,
    handlePageSizeChange,
  } = useScheduleTable();

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.auto,
    tableCellWidth.sm,
    tableCellWidth.auto,
    tableCellWidth.auto,
    tableCellWidth.md,
    tableCellWidth.md,
  ];
  const tableRows: [][] = [[]];
  const tableHeaderCells = [
    '✔️',
    '회원명',
    '수업 구분',
    '수업 상태',
    '수업 일자',
    '메모',
    '수업 정보 보기',
  ];
  return (
    <>
      <Styled.DualSideHeader
        leftSideChildren={tabsMenus.map((name) => (
          <SquareButton
            className="filter-tab"
            onClick={getSelectTabHandler(name)}
            variant={getTabButtonVariant(name)}
            size="small"
          >
            {name}
          </SquareButton>
        ))}
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
            labelText="한 페이지당 수업 수"
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
export default ScheduleTable;
