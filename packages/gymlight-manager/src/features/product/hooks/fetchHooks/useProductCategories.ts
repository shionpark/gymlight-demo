import { useQuery } from '@tanstack/react-query';

import { fetchProductCategories } from '@/apis';
import { QUERIES } from '@/constants';

export const useProductCategories = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.PRODUCT.CATEGORY],
    queryFn: () => fetchProductCategories(),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    ...data,
    ...rest,
  };
};
