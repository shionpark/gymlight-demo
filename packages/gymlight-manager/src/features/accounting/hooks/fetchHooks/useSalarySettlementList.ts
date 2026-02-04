import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { fetchSalarySettlementList } from '@/apis';

import type {
  ISalarySettlementListQuery,
  ISalarySettlementResponse,
  UseListQueryOptionsType,
} from '@/types';

export const useSalarySettlementList = (
  params: ISalarySettlementListQuery,
  queryOptions?: UseListQueryOptionsType<ISalarySettlementResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.ACCOUNTING.SALARY_SETTLEMENT_LIST, { ...params }],
    queryFn: () => fetchSalarySettlementList({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data?.data, ...rest };
};
