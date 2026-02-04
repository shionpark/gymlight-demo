import { useMemo } from 'react';

import { useFilterOption, usePagination } from '@/hooks';
import { useSalarySettlementList } from '@/features/accounting';

import { useMyBranchInfo } from '@/features/auth';
import { SALARY_SETTLEMENT_STATUSES } from '@/constants';
import { useAccountingModals } from '../useAccountingModals';

export const useSalarySettlementTable = () => {
  const { openSalarySettlementModal } = useAccountingModals();

  const { branchName, role } = useMyBranchInfo();
  const isAdmin = useMemo(() => role === '관리자', [role]);
  console.log(`isAdmin:${isAdmin}`);

  const {
    activeStatusFilterOptions: statuses,
    getStatusStateToggleHandler: getStatusesStateToggleHandler,
  } = useFilterOption({
    statusFilterOptions: SALARY_SETTLEMENT_STATUSES,
  });
  const { handlePageNumberChange, handlePageSizeChange, pageSize, currentPageNumber } =
    usePagination();

  const { data } = useSalarySettlementList(
    {
      pageNum: currentPageNumber,
      pageSize: pageSize,
      branchName: branchName as string,
      statuses: statuses,
    },
    { enabled: Boolean(role) },
  );

  return {
    handlePageNumberChange,
    handlePageSizeChange,
    pageSize,
    currentPageNumber,
    getStatusesStateToggleHandler,
    data,
    openSalarySettlementModal,
    isAdmin,
  };
};
