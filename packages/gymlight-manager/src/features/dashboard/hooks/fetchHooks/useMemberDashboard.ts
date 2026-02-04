import { QUERIES } from '@/constants';
import { fetchMemberDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useMemberDashboard = () => {
  const { data, ...rest } = useDashboardData({
    queryKey: QUERIES.DASHBOARD.MEMBERS,
    queryFn: fetchMemberDashboard,
    queryOptions: {
      staleTime: 30000, // 30초 동안 신선한 상태 유지
      refetchInterval: 60000, // 1분마다 갱신
    },
  });

  return {
    data,
    ...rest,
  };
};
