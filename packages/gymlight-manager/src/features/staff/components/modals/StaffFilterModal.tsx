import { DualSideBar, SquareButton } from 'gymlight-design-system';

import type { UserRoleType } from '@/types';

import { STAFF_ROLLS } from '@/features/staff/constants';
import { FilterOptions } from '@/features/staff/components';
import type { IStaffRoleFilterProps } from '@/features/staff/hooks';

import * as Styled from './StaffFilterModal.styles';

interface StaffFilterModalProps extends IStaffRoleFilterProps {
  dataCounts: number;
}

const StaffFilterModal = ({
  toggleRole,
  resetRoles,
  isRoleActive,
  dataCounts,
}: StaffFilterModalProps) => {
  return (
    <Styled.Wrapper>
      <span className="title">세부 필터링</span>
      <FilterOptions
        label="직급"
        options={STAFF_ROLLS}
        toggleRole={toggleRole}
        isRoleActive={isRoleActive}
      />
      <DualSideBar
        leftSideChildren={[<Styled.ResultCount>조회 결과: {dataCounts}</Styled.ResultCount>]}
        rightSideChildren={[
          <SquareButton size="small" onClick={resetRoles}>
            초기화
          </SquareButton>,
        ]}
      />
    </Styled.Wrapper>
  );
};

export default StaffFilterModal;
