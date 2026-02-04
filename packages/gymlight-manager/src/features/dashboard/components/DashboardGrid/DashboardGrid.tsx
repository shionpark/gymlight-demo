import { Suspense } from 'react';
import { GridContainer, LoadingFallback } from 'gymlight-design-system';

import type { IBranchNameResponse, IUserResponse } from '@/types';

import {
  BranchDashboard,
  MemberDashboard,
  NoticeDashboard,
  ProductDashboard,
  StatisticDashboard,
  TrainerDashboard,
} from '@/features/dashboard/components/dashboards';

import * as Styled from './DashboardGrid.styles';

interface IDashboardGridProps {
  currentUser: IUserResponse | null;
  activeBranch: IBranchNameResponse | null;
}

const DashboardGrid = ({ currentUser, activeBranch }: IDashboardGridProps) => {
  return (
    <Styled.Wrapper>
      <GridContainer columns={2}>
        <Styled.Section>
          {/* MemberDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <MemberDashboard currentUserRole={currentUser?.role} />
          </Suspense>

          {/* StatisticDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <StatisticDashboard currentUserRole={currentUser?.role} />
          </Suspense>

          {/* ProductDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <ProductDashboard activeBranch={activeBranch} />
          </Suspense>
        </Styled.Section>

        <Styled.Section>
          {/* NoticeDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <NoticeDashboard />
          </Suspense>

          {/* BranchDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <BranchDashboard currentUser={currentUser} activeBranch={activeBranch} />
          </Suspense>

          {/* TrainerDashboard */}
          <Suspense fallback={<LoadingFallback />}>
            <TrainerDashboard />
          </Suspense>
        </Styled.Section>
      </GridContainer>
    </Styled.Wrapper>
  );
};

export default DashboardGrid;
