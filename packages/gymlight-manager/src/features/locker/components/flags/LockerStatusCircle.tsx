import type { LockerStatusType } from '@/types';

import { StatusCircle } from './LockerStatusCircle.styles';

const LockerStatusCircle = ({ status }: { status: LockerStatusType }) => {
  return <StatusCircle status={status} />;
};

export default LockerStatusCircle;
