import { QUERIES } from '@/constants';
import { fetchUserDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useUserDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.USER,
    queryFn: fetchUserDashboard,
  });
