import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { ILockerListQuery } from '@/types';
import { fetchLockerGroups } from '@/apis';

export const useLockerGroupList = (params: ILockerListQuery) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.LOCKER.GROUP, { ...params }],
    queryFn: () => fetchLockerGroups({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
