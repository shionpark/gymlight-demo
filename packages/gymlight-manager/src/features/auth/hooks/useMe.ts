import { useQuery } from '@tanstack/react-query';

import { fetchMe } from '@/apis';
import { QUERIES } from '@/constants';

export const useMe = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.AUTH.ME],
    queryFn: fetchMe,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
