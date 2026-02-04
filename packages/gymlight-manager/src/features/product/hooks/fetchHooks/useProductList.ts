import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import type { IProductListQuery, IProductResponse, UseListQueryOptionsType } from '@/types';

import { fetchProducts } from '@/apis';

export const useProductList = (
  params: IProductListQuery,
  queryOptions?: UseListQueryOptionsType<IProductResponse>,
) => {
  const { data, ...rest } = useQuery({
    ...queryOptions,
    queryKey: [QUERIES.PRODUCT.LIST, { ...params }],
    queryFn: () => fetchProducts({ ...params }),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
