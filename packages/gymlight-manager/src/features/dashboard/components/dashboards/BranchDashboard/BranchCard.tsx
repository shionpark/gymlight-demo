import { BranchStatusFlag } from '@/features/branch';
import type { IBranchDashboardResponse, IBranchResponse } from '@/types';

import * as Styled from './BranchCard.styles';

interface IBranchCardProps {
  branch: IBranchDashboardResponse;
  branchDetailData?: IBranchResponse;
  isAdmin: boolean;
}

const BranchCard = ({ branch, branchDetailData, isAdmin }: IBranchCardProps) => {
  return (
    <Styled.BranchCard key={branch?.branchId}>
      <Styled.FlexContainer>
        <Styled.BranchNumber>{branch?.number}호점</Styled.BranchNumber>
        <div>
          <Styled.BranchName>
            <span>{branch?.name}</span>
            <BranchStatusFlag status={branch?.status} />
          </Styled.BranchName>

          <Styled.BranchTel>
            <span>전화번호: {isAdmin ? branchDetailData?.tel : '-'}</span>
            <span>매니저: {isAdmin ? branchDetailData?.managerName : '-'}</span>
          </Styled.BranchTel>
        </div>
      </Styled.FlexContainer>

      <Styled.BranchStaffInfo>
        <span>직원 {isAdmin ? branchDetailData?.staffCount : '-'}명</span>
        <span>회원 {isAdmin ? branchDetailData?.memberCount : '-'}명</span>
      </Styled.BranchStaffInfo>
    </Styled.BranchCard>
  );
};

export default BranchCard;
