import { QUERIES } from '@/constants';
import { fetchSalesDashboard } from '@/apis';

import { useDashboardData } from './useDashboardData';

export const useSalesDashboard = () =>
  useDashboardData({
    queryKey: QUERIES.DASHBOARD.SALES,
    queryFn: fetchSalesDashboard,
  });
