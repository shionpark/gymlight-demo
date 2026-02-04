import { QUERIES } from '@/constants';
import { fetchNoticeDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useNoticeDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.NOTICE,
    queryFn: fetchNoticeDashboard,
  });
