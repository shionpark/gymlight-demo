import { QUERIES } from '@/constants';
import { fetchVisitDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useVisitDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.VISIT,
    queryFn: fetchVisitDashboard,
  });
