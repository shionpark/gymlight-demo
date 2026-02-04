import { useQuery } from '@tanstack/react-query';

import { fetchStaffs } from '@/apis';

import { QUERIES } from '@/constants';

import type { IStaffListQuery } from '@/types';

export const useStaffList = (params: IStaffListQuery) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.STAFF.LIST, { ...params }],
    queryFn: () => fetchStaffs({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
