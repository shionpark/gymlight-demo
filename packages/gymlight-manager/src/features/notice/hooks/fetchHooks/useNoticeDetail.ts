import { useQuery } from '@tanstack/react-query';

import { fetchNoticeDetail } from '@/apis';
import { QUERIES } from '@/constants';
import type { INoticeDetailResponse, UseQueryOptionsType } from '@/types';

export const useNoticeDetail = (
  noticeId?: number,
  queryOptions?: UseQueryOptionsType<INoticeDetailResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.NOTICE.DETAIL, noticeId],
    queryFn: () => fetchNoticeDetail(noticeId!),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: typeof noticeId === 'number',
  });

  return {
    data: data?.data,
    ...rest,
  };
};
