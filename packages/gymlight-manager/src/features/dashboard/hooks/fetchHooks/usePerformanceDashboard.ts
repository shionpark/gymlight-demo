import { QUERIES } from '@/constants';
import { fetchPerformanceDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const usePerformanceDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.PERFORMANCE,
    queryFn: fetchPerformanceDashboard,
  });
