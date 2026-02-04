import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';
import { usePagination, useToggleCheckbox, useToggleTabMenu } from '@/hooks';

import { NOTICE_TYPES, NOTICE_TYPES_ALL } from '@/features/notice/constant';
import { useNoticeList, useNoticeSort } from '@/features/notice/hooks';

export const useNoticeTable = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const sortProps = useNoticeSort();
  const paginationProps = usePagination();

  const {
    activeTab: activeType,
    getSelectTabHandler: getSelectTypeHandler,
    checkIsActiveTab: checkIsActiveType,
  } = useToggleTabMenu(NOTICE_TYPES_ALL);

  const { data: noticeData } = useNoticeList({
    branchName: activeBranch?.name,
    types: activeType === '전체' ? ['공지', '이벤트'] : [activeType],
    statuses: undefined,
    sort: sortProps.sortParam,
    pageNum: paginationProps.currentPageNumber,
    pageSize: paginationProps.pageSize,
    startDate: '2024-01-01',
    endDate: '2025-12-31',
  });

  // console.log('NOTICE DATA: ', noticeData);

  const checkboxProps = useToggleCheckbox(noticeData?.list.length || 0);

  useEffect(() => {
    checkboxProps.resetCheckboxes();
  }, [activeBranch, paginationProps.currentPageNumber, sortProps.sortParam]);

  useEffect(() => {
    paginationProps.resetPageNumber();
  }, [activeType]);

  return {
    noticeData,

    sortProps,
    checkboxProps,
    paginationProps,
    typeSelectProps: {
      getSelectTypeHandler,
      checkIsActiveType,
    },
  };
};

export interface INoticeTableProps extends ReturnType<typeof useNoticeTable> {}
