import { HttpResponse } from 'msw';

import type { IPaginationResponse, IItemListResponse } from '@/types';

/**
 * 페이지네이션 응답 래퍼
 */
export const wrapPaginationResponse = <T>(
  list: T[],
  pageNum: number,
  pageSize: number,
  total: number,
): ReturnType<typeof HttpResponse.json> => {
  const totalPages = Math.ceil(total / pageSize);

  const paginationData: IPaginationResponse<T> = {
    totalElements: total,
    totalPages,
    pageNum,
    pageSize,
    isFirst: pageNum === 1,
    isLast: pageNum >= totalPages,
    list,
  };

  return HttpResponse.json({ data: paginationData });
};

/**
 * 아이템 리스트 응답 래퍼 (페이지네이션 없이 limit만 있는 경우)
 */
export const wrapItemListResponse = <T>(
  list: T[],
  totalElements: number,
  limit: number,
): ReturnType<typeof HttpResponse.json> => {
  const itemListData: IItemListResponse<T> = {
    list,
    totalElements,
    limit,
  };

  return HttpResponse.json({ data: itemListData });
};

/**
 * 페이지네이션 파라미터 파싱
 */
export const parsePaginationParams = (url: URL) => {
  const pageNum = parseInt(url.searchParams.get('pageNum') || '1', 10);
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10', 10);

  return { pageNum, pageSize };
};

/**
 * 목록 슬라이싱 (페이지네이션 적용)
 */
export const sliceByPagination = <T>(list: T[], pageNum: number, pageSize: number): T[] => {
  const startIndex = (pageNum - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return list.slice(startIndex, endIndex);
};
