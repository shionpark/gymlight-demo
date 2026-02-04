import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { ILockerDetailListQuery } from '@/types';
import { fetchLockerDetail } from '@/apis';

export const useLockerDetail = (params: ILockerDetailListQuery) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.LOCKER.DETAIL, { ...params }],
    queryFn: () => fetchLockerDetail({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
