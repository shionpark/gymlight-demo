import { DualSideBar, ProfileInfo } from 'gymlight-design-system';

import { formatPrice } from '@/utils';
import type { UserRoleType } from '@/types';

import { DashboardContainer, DashboardContainerHeader } from '../../DashboardContainer';
import { usePerformanceDashboard } from '@/features/dashboard/hooks';

import * as Styled from './TrainerDashboard.styles';

const TrainerDashboard = () => {
  const { data: trainerPerformanceData } = usePerformanceDashboard();

  return (
    <DashboardContainer
      title={
        <>
          <span>트레이너 매출 Top5</span>
          <DashboardContainerHeader>기준 일자: 2025.01.01 ~ 2025.01.31</DashboardContainerHeader>
        </>
      }
    >
      {trainerPerformanceData?.map((trainer, index) => (
        <DualSideBar
          leftSideChildren={[
            <Styled.LeftChildrenWrapper>
              <Styled.Grade>{index + 1}</Styled.Grade>
              <ProfileInfo
                className="not-hover"
                name={trainer.trainerName}
                role={trainer.role as UserRoleType}
                branch={trainer.branchName}
                isDropdown={false}
              />
            </Styled.LeftChildrenWrapper>,
          ]}
          rightSideChildren={[
            <Styled.Sales>
              <span className="trainer-sales">{formatPrice(trainer.ptRevenue)}</span>원
            </Styled.Sales>,
          ]}
        />
      ))}
    </DashboardContainer>
  );
};

export default TrainerDashboard;
