import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

import { AttendanceCheckInForm } from '@/features/attendance';

const CheckInPage = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  return (
    <>
      <AttendanceCheckInForm branch={activeBranch} />
    </>
  );
};

export default CheckInPage;
