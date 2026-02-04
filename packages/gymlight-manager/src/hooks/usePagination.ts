import { useState } from 'react';
import type { ChangeEvent } from 'react';

export interface UsePaginationReturn {
  currentPageNumber: number;
  pageSize: number;
  handlePageNumberChange: (pageNum: number) => void;
  handlePageSizeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  resetPageNumber: () => void;
}

/**
 * 페이지네이션을 적용하기 위한 커스텀 훅
 */

export const usePagination = (initialPageSize?: number) => {
  const defaultPageNumber = 1;
  const [currentPageNumber, setCurrentPageNumber] = useState(defaultPageNumber);
  const [pageSize, setPageSize] = useState(initialPageSize || 10);

  const handlePageNumberChange = (pageNum: number) => {
    setCurrentPageNumber(pageNum);
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(+event.target.value);
    setCurrentPageNumber(1);
  };

  const resetPageNumber = () => {
    setCurrentPageNumber(defaultPageNumber);
  };

  return {
    currentPageNumber,
    pageSize,
    handlePageNumberChange,
    handlePageSizeChange,
    resetPageNumber,
  };
};
