import { useQuery } from '@tanstack/react-query';

import { fetchMe } from '@/apis';
import { QUERIES } from '@/constants';
import { getIsLoggedIn } from '@/utils';

export const useMe = () => {
  const isLoggedIn = !!getIsLoggedIn();

  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.AUTH.ME],
    queryFn: fetchMe,
    enabled: isLoggedIn,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
