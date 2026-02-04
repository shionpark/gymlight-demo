import { useNavigate } from 'react-router';

import { LoadingFallback } from 'gymlight-design-system';

import { URLS } from '@/constants';
import type { UserRoleType } from '@/types';

import {
  DashboardContainer,
  DashboardContainerHeader,
} from '@/features/dashboard/components/DashboardContainer';
import { RotatingIcon } from '@/features/dashboard/components/RotatingIcon';
import { useMemberDashboard, useSpinAnimation } from '@/features/dashboard/hooks';
import MemberCardList from './MemberCardList';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

import * as Styled from './MemberDashboard.styles';

const MemberDashboard = ({ currentUserRole }: { currentUserRole?: UserRoleType }) => {
  const navigate = useNavigate();

  const { data: memberData, isRefetching } = useMemberDashboard();
  const shouldSpin = useSpinAnimation({ isRefetching });

  const [updatedDate, updatedTime] = memberData?.lastUpdated
    .split(' ')
    .map((time) => time.toString()) || ['', ''];

  const dataLabels: Record<string, string> = {
    activeMembersCount: '활성 회원',
    newMembersTodayCount: '신규 등록 회원',
    expiringMembersThisMonthCount: '당월 만료 회원',
  };

  const morePageUrl =
    currentUserRole === '관리자' || currentUserRole === '매니저' ? URLS.CLIENT.STATISTICS : '';

  return (
    <DashboardContainer
      title={
        <>
          <span>회원 통계</span>
          <DashboardContainerHeader>
            <Styled.UpdateDateSection isRefetching={isRefetching}>
              <span>업데이트 일시:</span>
              <span>{updatedDate}</span>
              <span className="updated-time">{updatedTime}</span>
              <RotatingIcon shouldSpin={shouldSpin} />
            </Styled.UpdateDateSection>
          </DashboardContainerHeader>
        </>
      }
      url={morePageUrl}
    >
      <Styled.Wrapper>
        {memberData ? (
          <MemberCardList dataLabels={dataLabels} memberData={memberData} />
        ) : (
          <LoadingFallback />
        )}
        <Styled.PlusUserButton
          variant="primary-outline"
          onClick={() => navigate(URLS.CLIENT.MEMBER)}
        >
          회원 가입
          <span>
            <ArrowRightIcon />
          </span>
        </Styled.PlusUserButton>
      </Styled.Wrapper>
    </DashboardContainer>
  );
};

export default MemberDashboard;
