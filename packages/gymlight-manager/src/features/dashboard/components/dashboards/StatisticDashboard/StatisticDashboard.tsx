import { GridContainer } from 'gymlight-design-system';

import { URLS } from '@/constants';
import type { UserRoleType } from '@/types';

import { DashboardContainer } from '../../DashboardContainer';
import { DailyVisitChart, SalesChart } from '@/features/statistics';

const StatisticDashboard = ({ currentUserRole }: { currentUserRole?: UserRoleType }) => {
  const morePageUrl =
    currentUserRole === '관리자' || currentUserRole === '매니저' ? URLS.CLIENT.STATISTICS : '';
  const chartWidth = 40;

  return (
    <GridContainer columns={2}>
      <DashboardContainer title="매출 통계" url={morePageUrl}>
        <SalesChart width={chartWidth} />
      </DashboardContainer>
      <DashboardContainer title="방문 회원수" url={morePageUrl}>
        <DailyVisitChart width={chartWidth} />
      </DashboardContainer>
    </GridContainer>
  );
};

export default StatisticDashboard;
