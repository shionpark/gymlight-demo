import { useRecoilValue } from 'recoil';
import { Dropdown, DropdownForMenu, DualSideBar } from 'gymlight-design-system';
import {
  ArrowDownIcon,
  ArrowLongRightIcon,
  BuildingStorefrontIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

import { activeBranchState } from '@/states';
import { useToggleDropdownMenu } from '@/hooks';
import type { ILockerGroupDetailResponse, ILockerGroupResponse } from '@/types';

import { LockerGroupStatus } from '@/features/locker/components';
import { useLockerModals } from '@/features/locker/hooks';

import * as Styled from './TableInfoSection.styles';

interface TableInfoSectionProps {
  lastLockerItemNumber: number;
  activeLockerGroupData?: ILockerGroupResponse;
  activeLockerGroupDetails?: ILockerGroupDetailResponse;
}

const TableInfoSection = ({
  lastLockerItemNumber,
  activeLockerGroupData,
  activeLockerGroupDetails: lockerGroup,
}: TableInfoSectionProps) => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { openLockerGroupFormModal } = useLockerModals();

  const { toggleDropdownMenu, checkDropdownMenuOpen, setDropdownMenuRef } =
    useToggleDropdownMenu(1);

  const { name, direction, startNumber, columns, rows } = lockerGroup || {};

  const Icon = direction === '가로' ? ArrowLongRightIcon : ArrowDownIcon;

  return (
    <>
      <DualSideBar
        leftSideChildren={[
          <Styled.Details>
            <span>
              <BuildingStorefrontIcon />
              {activeBranch?.name}
            </span>
            <span>
              <LockClosedIcon />
              {startNumber}번 ~ {lastLockerItemNumber}번
            </span>
            <span>
              가로{columns} X 세로{rows}
            </span>
            <span>
              {<Icon />} {direction} 방향
            </span>
            <Dropdown
              ref={setDropdownMenuRef(0)}
              isDropdownMenuOpened={checkDropdownMenuOpen(0)}
              onClick={() => toggleDropdownMenu(0)}
            >
              <DropdownForMenu
                onClick={() =>
                  openLockerGroupFormModal({
                    isEdit: true,
                    initName: name,
                  })
                }
              >
                락커 그룹 수정
              </DropdownForMenu>
            </Dropdown>
          </Styled.Details>,
        ]}
      />
      <DualSideBar leftSideChildren={[<LockerGroupStatus lockerGroup={activeLockerGroupData} />]} />
    </>
  );
};

export default TableInfoSection;
