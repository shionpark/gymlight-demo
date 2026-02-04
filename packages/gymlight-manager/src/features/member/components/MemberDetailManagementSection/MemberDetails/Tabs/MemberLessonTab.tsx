import {
  VerticalTable,
  SquareButton,
  DualSideBar,
  Checkbox,
  TablePaginationManager,
} from 'gymlight-design-system';

import { DateFilterOptionBox } from '@/components';

import { tableCellWidth } from '@/styles/variables';
import * as TabStyle from './tab.styles';
import { useMemberLessonTable } from '@/features/member/hooks';

interface IMemberLessonTabProps {}
const MemberLessonTab = ({}: IMemberLessonTabProps) => {
  const {
    data,
    getSelectTabHandler,
    checkIsActiveTab,
    tabMenus,

    dateFilterOptions,
    getDateStateChangeHandler,
    dateFilterStates,

    handlePageNumberChange,
    handlePageSizeChange,
    pageSize,

    pageNum,
  } = useMemberLessonTable();

  const tableHeaderCells = ['✔️', 'No.', '구분', '일시', '담당자'];
  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.lg,
    tableCellWidth.sm,
  ];
  const tableRows = data?.list?.length
    ? data.list.map(({ id, date, lessonType, trainerName }, index) => [
        <Checkbox id={`${id}-lesson`} />,
        index,
        lessonType,
        date,
        trainerName,
      ])
    : [];

  const tabButtons = tabMenus.map((tabName, index) => (
    <SquareButton
      size="small"
      variant={checkIsActiveTab(tabName) ? 'primary' : 'reverse'}
      key={index}
      onClick={getSelectTabHandler(tabName)}
    >
      {tabName}
    </SquareButton>
  ));

  return (
    <TabStyle.Wrapper>
      <DualSideBar
        leftSideChildren={tabButtons}
        rightSideChildren={[
          <DateFilterOptionBox
            getDateStateChangeHandler={getDateStateChangeHandler}
            dateFilterOptions={dateFilterOptions as unknown as string[]}
            dateFilterStates={dateFilterStates}
          />,
        ]}
      />
      <TabStyle.TopPanel>조회된 내역 총 {data.totalElement}개</TabStyle.TopPanel>
      <VerticalTable
        height={30}
        tableRows={tableRows}
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
      />
      <TablePaginationManager
        handlePageSizeChange={handlePageSizeChange}
        handlePageIndexNumberChange={handlePageNumberChange}
        totalPageNumber={data?.totalPages}
        pageSize={pageSize}
        tableDataName="수업"
        currentPageIndexNumber={pageNum}
      />
    </TabStyle.Wrapper>
  );
};
export default MemberLessonTab;
