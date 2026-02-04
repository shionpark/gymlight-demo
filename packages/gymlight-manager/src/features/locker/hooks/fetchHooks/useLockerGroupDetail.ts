import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { ILockerGroupDetailListQuery } from '@/types';
import { fetchLockerGroupDetail } from '@/apis';

export const useLockerGroupDetail = (params: ILockerGroupDetailListQuery) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.LOCKER.GROUP_DETAIL, { ...params }],
    queryFn: () => fetchLockerGroupDetail({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
