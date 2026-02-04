import { usePagination, useSearchInput } from '@/hooks';

import { useTrainerSalarySort } from './useTrainerSalarySort';

export const useTrainerSalaryTable = () => {
  // 페이지네이션 관리
  const {
    handlePageNumberChange,
    currentPageNumber: pageNum,
    handlePageSizeChange,
    pageSize,
  } = usePagination();

  // 검색Input + search Param 관리
  const {
    searchInputRef,
    isSearching,

    searchParam,

    runSearch,
    endSearch,
  } = useSearchInput();

  const {
    sortParam,
    totalSalaryButtonProps,
    baseSalaryButtonProps,
    otIncentiveButtonProps,
    ptIncentiveButtonProps,
    normalSalaryButtonProps,
  } = useTrainerSalarySort();

  // sort option 관리

  // 데이터 fetch api - 정산 급여목록
  //
  //  const {data} = useTrainerSalaryList({ sort: sortParam,
  //    pageNum: currentPageNumber,
  //    pageSize: pageSize,
  //    params:{search: searchParam}
  //  }})
  //

  return {
    runSearch,
    isSearching,
    endSearch,
    searchInputRef,

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
  };
};
