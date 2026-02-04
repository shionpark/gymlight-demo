import { URLS } from '@/constants';
import type { IBranchNameResponse, IUserResponse } from '@/types';

import { DashboardContainer } from '../../DashboardContainer';

interface IMyInfoDashboardProps {
  currentUser: IUserResponse | null;
  activeBranch: IBranchNameResponse | null;
}

const MyInfoDashboard = ({ currentUser, activeBranch }: IMyInfoDashboardProps) => {
  return (
    <>
      <DashboardContainer title="내 정보" url={URLS.CLIENT.MY_PAGE}>
        <div>- 이름: {currentUser?.name}</div>
        <div>- 활성 지점: {activeBranch?.name}</div>
        <div>- 직급: {currentUser?.role}</div>
        <div>- 핸드폰번호: {currentUser?.phone}</div>
        <div>
          - 생년월일: {currentUser?.birthDate} ({currentUser?.age})
        </div>
      </DashboardContainer>
    </>
  );
};

export default MyInfoDashboard;
