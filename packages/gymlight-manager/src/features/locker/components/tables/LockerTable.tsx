import { LockerAssignForm, LockerItemsGrid, TableInfoSection } from '@/features/locker/components';
import type { IReturnOfUseLockerTable } from '@/features/locker/hooks';

import * as Styled from './LockerTable.styles';

const LockerTable = (lockerTableProps: IReturnOfUseLockerTable) => {
  const {
    activeLockerGroupDetails,
    lockerGroupProps: { activeLockerGroupData, lastLockerItemNumber },
  } = lockerTableProps;

  return (
    <>
      <TableInfoSection
        lastLockerItemNumber={lastLockerItemNumber}
        activeLockerGroupData={activeLockerGroupData}
        activeLockerGroupDetails={activeLockerGroupDetails}
      />

      <Styled.TableSection>
        <LockerItemsGrid {...lockerTableProps} />
        <LockerAssignForm {...lockerTableProps} />
      </Styled.TableSection>
    </>
  );
};

export default LockerTable;
