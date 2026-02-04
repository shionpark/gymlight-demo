import { memo } from 'react';
import { VerticalTable } from 'gymlight-design-system';

export interface IStaffProfileTableProps {
  issuedAt: string;
  staffName: string;
  branchName: string;
  staffRole: string;
  isWalkinBenefit: boolean;
}

const StaffProfileTable = ({
  issuedAt,
  staffName,
  branchName,
  staffRole,
  isWalkinBenefit,
}: IStaffProfileTableProps) => {
  const profileTableHeaderCells = ['지점 이름', '직원 이름', '직원 직급', '워크인혜택', '발행일'];
  const profileTableColumnWidths = ['19', '19', '19', '19', '19'];

  const profileTableRows = [
    [branchName, staffName, staffRole, isWalkinBenefit ? 'O' : 'X', issuedAt],
  ];
  return (
    <VerticalTable
      height={8}
      tableHeaderCells={profileTableHeaderCells}
      tableRows={profileTableRows}
      columnWidths={profileTableColumnWidths}
    />
  );
};

export default memo(StaffProfileTable);
