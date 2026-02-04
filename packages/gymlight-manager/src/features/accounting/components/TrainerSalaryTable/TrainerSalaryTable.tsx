import { tableCellWidth } from '@/styles/variables';

import {
  Pagination,
  VerticalTable,
  SearchInput,
  DualSideBar,
  SquareButton,
  LabeledContainer,
  TableHeaderButton,
  SelectWithCustomOption,
} from 'gymlight-design-system';

import { useTrainerSalaryTable } from '@/features/accounting';

import * as Styled from './TrainerSalaryTable.styles';

const TrainerSalaryTable = () => {
  const {
    searchInputRef,
    runSearch,
    isSearching,
    endSearch,

    handlePageNumberChange,
    pageNum,
    pageSize,
    handlePageSizeChange,

    sortParam,
    totalSalaryButtonProps,
    baseSalaryButtonProps,
    otIncentiveButtonProps,
    ptIncentiveButtonProps,
    normalSalaryButtonProps,
  } = useTrainerSalaryTable();

  const tableHeaderCells = [
    '✔️',
    'No.',
    '이름',
    '연락처',
    '지점',
    '역할',
    '당월 워크인 혜택',
    <TableHeaderButton
      id="base-salary"
      {...baseSalaryButtonProps}
      icon={<baseSalaryButtonProps.icon />}
    />,
    <TableHeaderButton
      id="ot-incentive"
      {...otIncentiveButtonProps}
      icon={<otIncentiveButtonProps.icon />}
    />,
    <TableHeaderButton
      id="pt-incentive"
      {...ptIncentiveButtonProps}
      icon={<ptIncentiveButtonProps.icon />}
    />,
    <TableHeaderButton
      id="normal-incentive"
      {...normalSalaryButtonProps}
      icon={<normalSalaryButtonProps.icon />}
    />,
    <TableHeaderButton
      id="total-salary"
      {...totalSalaryButtonProps}
      icon={<totalSalaryButtonProps.icon />}
    />,
    '발행일',
    '정산 상태',
  ];
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.sm,
    tableCellWidth.xs,
  ];

  const tableRows = [[]];
  return (
    <Styled.Wrapper>
      <DualSideBar
        rightSideChildren={[
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
      <Pagination
        currentPage={pageNum}
        onPageChange={handlePageNumberChange}
        totalPages={pageSize}
      />
      <Styled.TopPanel>
        <div>
          <span>
            전체 목록 총 {`${0}`}개 {'\b'}
          </span>
          <span>
            / {'\b'} {sortParam} 기준{' '}
          </span>
        </div>
        <LabeledContainer
          labelText="한 페이지당 목록 수:"
          width={30}
          labelRatio={2}
          contentRatio={2}
        >
          <SelectWithCustomOption value={pageSize} onChange={handlePageSizeChange}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </SelectWithCustomOption>
        </LabeledContainer>
      </Styled.TopPanel>
    </Styled.Wrapper>
  );
};

export default TrainerSalaryTable;
