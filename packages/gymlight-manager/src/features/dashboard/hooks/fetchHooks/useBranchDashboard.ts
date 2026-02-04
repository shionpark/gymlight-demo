import { QUERIES } from '@/constants';
import { fetchBranchDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useBranchDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.BRANCH,
    queryFn: fetchBranchDashboard,
  });
