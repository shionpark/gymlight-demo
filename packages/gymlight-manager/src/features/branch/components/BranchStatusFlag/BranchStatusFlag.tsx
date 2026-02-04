import { StatusButton, theme } from 'gymlight-design-system';

import type { BranchStatusType } from '@/types';

interface IBranchStatusFlagProps {
  status: BranchStatusType;
}

const BranchStatusFlag = ({ status }: IBranchStatusFlagProps) => {
  const statusColors = {
    영업중: theme.branchStatus.영업중,
    폐점: theme.branchStatus.폐점,
    휴점: theme.branchStatus.휴점,
    리모델링중: theme.branchStatus.리모델링중,
  };

  return <StatusButton colors={statusColors} status={status} />;
};

export default BranchStatusFlag;
