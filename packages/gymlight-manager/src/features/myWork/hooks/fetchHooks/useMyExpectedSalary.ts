import { useQuery } from '@tanstack/react-query';

import type { IMyExpectedSalaryResponse, UseQueryOptionsType } from '@/types';

import { QUERIES } from '@/constants';

import { fetchMyExpectedSalary } from '@/apis';

export const useMyExpectedSalary = (
  queryOptions?: UseQueryOptionsType<IMyExpectedSalaryResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.MY_WORK.EXPECTED_SALARY],
    queryFn: fetchMyExpectedSalary,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...rest };
};
