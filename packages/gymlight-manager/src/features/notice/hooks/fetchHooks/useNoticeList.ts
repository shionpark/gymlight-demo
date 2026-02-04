import { useQuery } from '@tanstack/react-query';

import { fetchNotices } from '@/apis';
import { QUERIES } from '@/constants';

import type { INoticeListQuery } from '@/types';

export const useNoticeList = (params: INoticeListQuery) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.NOTICE.LIST, { ...params }],
    queryFn: () => fetchNotices({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
