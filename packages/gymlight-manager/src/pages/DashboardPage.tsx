import { useRecoilValue } from 'recoil';
import { activeBranchState, currentUserState } from '@/states';

import { DashboardGrid } from '@/features/dashboard';

const DashboardPage = () => {
  const currentUser = useRecoilValue(currentUserState);
  const activeBranch = useRecoilValue(activeBranchState);

  return (
    <>
      <DashboardGrid currentUser={currentUser} activeBranch={activeBranch} />
    </>
  );
};

export default DashboardPage;
