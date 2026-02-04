import { URLS } from '@/constants';
import type { IBranchNameResponse, IUserResponse } from '@/types';

import BranchCard from './BranchCard';
import { useBranchList } from '@/features/branch';

import { useBranchDashboard, useLoadMoreData } from '@/features/dashboard/hooks';
import {
  DashboardContainer,
  DashboardContainerHeader,
} from '@/features/dashboard/components/DashboardContainer';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import * as Styled from './BranchDashboard.styles';

interface IBranchDashboardProps {
  currentUser: IUserResponse | null;
  activeBranch: IBranchNameResponse | null;
}

const BranchDashboard = ({ currentUser, activeBranch }: IBranchDashboardProps) => {
  const { data: branchData } = useBranchDashboard();

  const { visibleData, handleLoadMore, handlePrev } = useLoadMoreData({
    data: branchData,
    startNumber: 0,
    moreIndex: 2,
  });

  const isAdmin = currentUser?.role === '관리자';

  const { data: branchDetailData } = useBranchList({ sort: '지점 번호(오름차순)' });
  const branchDetails = branchDetailData?.list.find(
    (branch) => branch.branchId === activeBranch?.branchId,
  );

  return (
    <DashboardContainer
      title={
        <>
          <span>지점 정보</span>
          <DashboardContainerHeader>총 {branchData?.length}개</DashboardContainerHeader>
        </>
      }
      url={isAdmin ? URLS.CLIENT.BRANCH : ''}
    >
      <Styled.Wrapper>
        {visibleData.map((branch) => (
          <BranchCard branch={branch} branchDetailData={branchDetails} isAdmin={isAdmin} />
        ))}
        <Styled.ButtonsWrapper>
          <Styled.MoreButton onClick={handlePrev}>
            <ChevronUpIcon />
          </Styled.MoreButton>
          <Styled.MoreButton onClick={handleLoadMore}>
            <ChevronDownIcon />
          </Styled.MoreButton>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </DashboardContainer>
  );
};

export default BranchDashboard;
