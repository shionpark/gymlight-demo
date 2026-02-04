import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import type { UseQueryOptionsType } from '@/types';

export interface DashboardDataOptions<T> {
  queryKey: string;
  queryFn: () => Promise<AxiosResponse<T>>;
  queryOptions?: UseQueryOptionsType<T>;
}

/**
 * 공통 대시보드 데이터 요청 훅
 * @param queryKey 쿼리 키
 * @param queryFn 데이터 요청 함수
 * @param queryOptions 리액트 쿼리 파라미터
 */

export const useDashboardData = <T>({
  queryKey,
  queryFn,
  queryOptions = {},
}: DashboardDataOptions<T>) => {
  const { data, ...rest } = useQuery({
    queryKey: [queryKey],
    queryFn,
    ...queryOptions,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
