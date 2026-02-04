import { ButtonHTMLAttributes, memo } from 'react';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid';

import * as Styled from './Pagination.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'normal' | 'active';
}

const Pagination = ({
  variant = 'normal',
  currentPage,
  totalPages = 1,
  onPageChange,
  ...rest
}: IButtonProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pageNumbers.push(1);

    if (currentPage > 3) {
      pageNumbers.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push('...');
    }

    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Styled.Wrapper>
      <Styled.PageButton
        variant="normal"
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Styled.PageButton>
      {pageNumbers.map((pageNum, index) =>
        typeof pageNum === 'number' ? (
          <Styled.PageButton
            key={pageNum}
            variant={currentPage === pageNum ? 'active' : 'normal'}
            onClick={() => onPageChange(pageNum)}
            {...rest}
          >
            {pageNum}
          </Styled.PageButton>
        ) : (
          <Styled.Ellipsis key={`ellipsis-${index}`}>
            <EllipsisHorizontalIcon />
          </Styled.Ellipsis>
        ),
      )}
      <Styled.PageButton
        variant="normal"
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRightIcon />
      </Styled.PageButton>
    </Styled.Wrapper>
  );
};

Pagination.displayName = 'Pagination';

export default memo(Pagination);
