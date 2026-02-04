import { useCallback } from 'react';
import { GridContainer } from 'gymlight-design-system';

import type { ILockerResponse, LockerDirectionType } from '@/types';

import { LockerItem } from '@/features/locker/components';
import type { IReturnOfUseLockerTable } from '@/features/locker/hooks';

import * as Styled from './LockerItemsGrid.styles';

const LockerItemsGrid = ({
  lockerItemProps: { checkIsActiveLockerId, getSelectLockerIdHandler },
  activeLockerGroupDetails,
}: IReturnOfUseLockerTable) => {
  const { columns, rows, lockers, direction } = activeLockerGroupDetails || {};

  const isHorizontal = useCallback(
    (direction?: LockerDirectionType) => {
      return direction === '가로' ? columns : rows;
    },
    [direction],
  );

  return (
    <Styled.Wrapper>
      <GridContainer columns={isHorizontal(direction) || 0} direction={direction}>
        {lockers?.map((locker: ILockerResponse) => [
          <LockerItem
            key={locker.lockerId}
            lockerData={locker}
            checkIsActiveLockerId={checkIsActiveLockerId}
            getSelectLockerIdHandler={getSelectLockerIdHandler}
          />,
        ])}
      </GridContainer>
    </Styled.Wrapper>
  );
};

export default LockerItemsGrid;
