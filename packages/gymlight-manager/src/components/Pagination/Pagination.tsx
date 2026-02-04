import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import * as Styled from './Pagination.styles';

interface PaginationProps {
  dataPerPage: number;
  currentPageNumber: number;
  totalPageNumber: number;
  totalElements: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({
  currentPageNumber,
  dataPerPage,
  totalElements,
  totalPageNumber,
  handlePageChange,
}: PaginationProps) => {
  const dataFirstNum = (currentPageNumber - 1) * dataPerPage + 1;
  const dataLastNum = Math.min(currentPageNumber * dataPerPage, totalElements);

  return (
    <Styled.Wrapper>
      <span>
        {dataFirstNum} - {dataLastNum} of {totalElements}
      </span>
      <Styled.ArrowWrapper
        disabled={currentPageNumber === 1}
        onClick={() => handlePageChange(currentPageNumber - 1)}
      >
        <ChevronLeftIcon />
      </Styled.ArrowWrapper>
      <Styled.ArrowWrapper
        disabled={currentPageNumber === totalPageNumber}
        onClick={() => handlePageChange(currentPageNumber + 1)}
      >
        <ChevronRightIcon />
      </Styled.ArrowWrapper>
    </Styled.Wrapper>
  );
};

export default Pagination;
