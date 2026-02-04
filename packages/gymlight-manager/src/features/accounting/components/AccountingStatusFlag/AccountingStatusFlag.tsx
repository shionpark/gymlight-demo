import type { SalarySettlementStatusType } from '@/types';
import { memo } from 'react';

import { StatusButton, theme } from 'gymlight-design-system';

interface IAccountingStatusFlagProps {
  status: SalarySettlementStatusType;
}

const AccountingStatusFlag = ({ status }: IAccountingStatusFlagProps) => (
  <StatusButton colors={theme.accountingStatus} status={status} />
);

export default memo(AccountingStatusFlag);
