import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchSalaryVariables } from '@/apis';

import type { ISalaryVariablesResponse, UseQueryOptionsType } from '@/types';

export const useSalaryVariables = (
  queryOptions?: UseQueryOptionsType<ISalaryVariablesResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ACCOUNTING.SALARY_VARIABLES],
    queryFn: fetchSalaryVariables,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
