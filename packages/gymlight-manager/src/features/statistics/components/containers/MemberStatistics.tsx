import { GridContainer } from 'gymlight-design-system';

import type { IBranchNameResponse } from '@/types';

import { useMemberList } from '@/features/member';
import { useStaffList } from '@/features/staff/hooks';
import { useAttendanceList } from '@/features/attendance/hooks';

import {
  DailyVisitChart,
  MemberAgeChart,
  MemberCountsChart,
  MemberGenderChart,
  MemberStatusChart,
} from '../charts';

import KakaoMap from '../maps/KakaoMap';
import { useKakaoLoader, useMarkerData } from '../../hooks';

import * as Styled from './MemberStatistics.styles';
interface MemberStatisticsProps {
  activeBranch: IBranchNameResponse | null;
}

const MemberStatistics = ({ activeBranch }: MemberStatisticsProps) => {
  const { data } = useMemberList({
    branchName: activeBranch?.name,
    sort: '가입일(내림차순)',
    genders: ['남', '여'],
    pageNum: 1,
    pageSize: 100000,
  });
  const memberData = data?.list || [];

  const { data: checkedInMembers } = useAttendanceList({
    branchName: activeBranch?.name,
  });

  const { data: staffData } = useStaffList({
    branchName: activeBranch?.name,
    sort: '이름(가나다순)',
  });

  const isLoaded = useKakaoLoader();
  const memberWithMarker = useMarkerData(memberData, isLoaded);

  return (
    <>
      <Styled.Wrapper>
        <Styled.Container>
          <span>전체 회원수</span>
          <span>{memberData.length}명</span>
        </Styled.Container>
        <Styled.Container>
          <span>전제 직원수</span>
          <span>{staffData?.totalElements}명</span>
        </Styled.Container>
        <Styled.Container>
          <span>워크인 회원수</span>
          <span>43명</span>
        </Styled.Container>
        <Styled.Container>
          <span>당월 만기 재등록 회원수</span>
          <span>31명</span>
        </Styled.Container>
        <Styled.Container>
          <span>소개 등록 회원수</span>
          <span>22명</span>
        </Styled.Container>
      </Styled.Wrapper>
      <GridContainer columns={3}>
        <KakaoMap members={memberWithMarker} />
        <MemberAgeChart members={memberData} />
        <MemberGenderChart members={memberData} />
        <MemberStatusChart members={memberData} />
        <DailyVisitChart checkedInMembers={checkedInMembers?.list} hasTitle />
        <MemberCountsChart members={memberData} />
      </GridContainer>
    </>
  );
};

export default MemberStatistics;
