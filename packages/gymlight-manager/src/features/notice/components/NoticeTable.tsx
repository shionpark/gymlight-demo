import {
  Checkbox,
  TableHeaderButton,
  VerticalTable,
  TablePaginationManager,
  Dropdown,
  DropdownForMenu,
} from 'gymlight-design-system';
import { CheckIcon, PaperClipIcon } from '@heroicons/react/24/outline';

import { formatDate } from '@/utils';
import { useToggleDropdownMenu } from '@/hooks';
import { tableCellWidth } from '@/styles/variables';

import { NoticeTypeFlag, TableInfoSection } from '@/features/notice/components';
import { INoticeTableProps, useNoticeModal } from '@/features/notice/hooks';

import * as Styled from './NoticeTable.styles';

interface NoticeTableProps extends INoticeTableProps {
  goToNoticeDetail: (noticeId?: number) => void;
}

const NoticeTable = ({
  noticeData,
  sortProps: {
    sortParam,
    setSortParam,
    createdAtButtonProps,
    updatedAtButtonProps,
    startDateButtonProps,
    endDateButtonProps,
  },
  checkboxProps: { checkboxStates, toggleOneCheckbox, toggleAllCheckboxes, checkboxCountSelected },
  paginationProps: { currentPageNumber, pageSize, handlePageNumberChange, handlePageSizeChange },
  typeSelectProps: { getSelectTypeHandler, checkIsActiveType },
  goToNoticeDetail,
}: NoticeTableProps) => {
  const { openNoticeFormModal } = useNoticeModal();
  const { setDropdownMenuRef, toggleDropdownMenu, checkDropdownMenuOpen } = useToggleDropdownMenu(
    noticeData?.list.length || 0,
  );

  const tableRows = noticeData
    ? noticeData.list.map(
        (
          {
            noticeId,
            title,
            type,
            status,
            createdAt,
            updatedAt,
            startDate,
            endDate,
            branchId,
            branchName,
            authorName,
            hasAttachment,
          },
          index,
        ) => [
          <Checkbox
            id={`${noticeId}-${index}`}
            checked={checkboxStates[index]}
            onChange={() => toggleOneCheckbox(index)}
          />,
          noticeId,
          <Styled.NoticeTitle>
            <span className="title" onClick={() => goToNoticeDetail(noticeId)}>
              {title}
            </span>
            <span>
              <PaperClipIcon style={{ width: '2rem', display: hasAttachment ? 'block' : 'none' }} />
            </span>
          </Styled.NoticeTitle>,
          <NoticeTypeFlag type={type} />,
          status,
          formatDate(createdAt, 'T', 0),
          formatDate(updatedAt, 'T', 0),
          formatDate(startDate, 'T', 0),
          formatDate(endDate, 'T', 0),
          branchName,
          authorName,
          '0',
          <Dropdown
            align="left"
            ref={setDropdownMenuRef(index)}
            isDropdownMenuOpened={checkDropdownMenuOpen(index)}
            onClick={() => toggleDropdownMenu(index)}
          >
            <DropdownForMenu
              onClick={() =>
                openNoticeFormModal({
                  isEdit: true,
                  initTitle: title,
                  initBranchId: branchId,
                  initType: type,
                  initStartDate: startDate,
                  initEndDate: endDate,
                  //  initContent:content,
                  initFiles: hasAttachment,
                })
              }
            >
              공지사항 수정
            </DropdownForMenu>
            <DropdownForMenu>공지사항 삭제</DropdownForMenu>
          </Dropdown>,
        ],
      )
    : [];

  const tableHeaderCells = [
    <CheckIcon onClick={toggleAllCheckboxes} />,
    <TableHeaderButton id="notice-number" buttonName="No." />,
    <TableHeaderButton id="title" buttonName="제목" />,
    <TableHeaderButton id="type" buttonName="타입" />,
    <TableHeaderButton id="status" buttonName="상태" />,
    <TableHeaderButton
      id="createdAt"
      {...createdAtButtonProps}
      icon={<createdAtButtonProps.icon />}
    />,
    <TableHeaderButton
      id="updatedAt"
      {...updatedAtButtonProps}
      icon={<updatedAtButtonProps.icon />}
    />,
    <TableHeaderButton
      id="event-startDate"
      {...startDateButtonProps}
      icon={<startDateButtonProps.icon />}
    />,
    <TableHeaderButton
      id="event-endDate"
      {...endDateButtonProps}
      icon={<endDateButtonProps.icon />}
    />,
    <TableHeaderButton id="branch" buttonName="지점" />,
    <TableHeaderButton id="author" buttonName="작성자" />,
    <TableHeaderButton id="count" buttonName="조회수" />,
    <></>,
  ];

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs, // No.
    tableCellWidth.xl, // 제목
    tableCellWidth.sm, // 타입
    tableCellWidth.sm, // 상태
    tableCellWidth.md, // 작성일
    tableCellWidth.md, // 수정일
    tableCellWidth.md, // 이벤트 시작일
    tableCellWidth.md, // 이벤트 종료일
    tableCellWidth.md, // 지점
    tableCellWidth.md, // 작성자
    tableCellWidth.sm, // 조회수
    tableCellWidth.xxs,
  ];

  return (
    <>
      <TableInfoSection
        sortParam={sortParam}
        setSortParam={setSortParam}
        totalElements={noticeData?.totalElements}
        checkboxCountSelected={checkboxCountSelected}
        checkIsActiveType={checkIsActiveType}
        getSelectTypeHandler={getSelectTypeHandler}
      />
      <VerticalTable
        tableRows={tableRows}
        columnWidths={columnWidths}
        tableHeaderCells={tableHeaderCells}
      />
      <TablePaginationManager
        currentPageIndexNumber={currentPageNumber}
        pageSize={pageSize}
        totalPageNumber={noticeData?.totalPages || 0}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        tableDataName="공지사항"
      />
    </>
  );
};

export default NoticeTable;
