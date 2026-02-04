import { Dispatch, SetStateAction } from 'react';
import { Dropdown, DualSideBar, SquareButton } from 'gymlight-design-system';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import { FilterWindowButton } from '@/components';
import { useToggleDropdownMenu } from '@/hooks';
import { buttonsWrapper } from '@/styles';
import type { IStaffListResponse, StaffSortType } from '@/types';

import { STAFF_SORT_OPTIONS } from '@/features/staff/constants';
import { StaffFilterModal } from '@/features/staff/components';
import type {
  UseStaffRoleFilterReturnType,
  UseStaffStatusFilterReturnType,
} from '@/features/staff/hooks';

import * as Styled from './TableInfoSection.styles';

interface TableInfoSectionProps {
  staffData?: IStaffListResponse;
  checkboxCountSelected: number;
  sortParam: StaffSortType;
  setSortParam: Dispatch<SetStateAction<StaffSortType>>;
  statusFilterProps: UseStaffStatusFilterReturnType;
  roleFilterProps: UseStaffRoleFilterReturnType;
}

const TableInfoSection = ({
  staffData,
  checkboxCountSelected,
  sortParam,
  setSortParam,
  statusFilterProps: { staffStatuses, checkIsCurrentStatus, getSelectStatusHandler },
  roleFilterProps,
}: TableInfoSectionProps) => {
  const {
    toggleDropdownMenu: toggleFilterMenu,
    setDropdownMenuRef: setFilterMenuRef,
    checkDropdownMenuOpen: checkFilterMenuOpen,
    closeDropdownMenu: closeFilterDropdownMenu,
  } = useToggleDropdownMenu(2);

  return (
    <>
      <DualSideBar
        leftSideChildren={[
          <div css={buttonsWrapper}>
            {staffStatuses.map((status) => (
              <SquareButton
                key={status}
                size="small"
                variant={checkIsCurrentStatus(status) ? 'primary' : 'outline'}
                onClick={getSelectStatusHandler(status)}
              >
                {status}
              </SquareButton>
            ))}
          </div>,
        ]}
      />
      <DualSideBar
        leftSideChildren={[
          <Styled.Details>
            <span>총 {staffData?.totalElements}개</span>
            <span>{` / `}</span>
            {sortParam}
            {checkboxCountSelected > 0 && (
              <>
                <span>{` / `}</span>
                <span>{checkboxCountSelected}개 선택</span>
              </>
            )}
          </Styled.Details>,
        ]}
        rightSideChildren={[
          <Styled.FlexContainer>
            <Dropdown
              align="left"
              ref={setFilterMenuRef(0)}
              button={<FilterWindowButton onClick={() => toggleFilterMenu(0)} />}
              isDropdownMenuOpened={checkFilterMenuOpen(0)}
              distance={10}
            >
              <StaffFilterModal {...roleFilterProps} dataCounts={staffData?.totalElements || 0} />
            </Dropdown>
            <Dropdown
              align="left"
              ref={setFilterMenuRef(1)}
              button={
                <SquareButton size="small" variant="outline" onClick={() => toggleFilterMenu(1)}>
                  {sortParam}
                  <span>
                    <ChevronDownIcon style={{ width: '1.2rem', marginLeft: '1rem' }} />
                  </span>
                </SquareButton>
              }
              isDropdownMenuOpened={checkFilterMenuOpen(1)}
              distance={10}
            >
              {STAFF_SORT_OPTIONS.map((option) => (
                <Styled.OptionWrapper
                  key={option}
                  onClick={() => {
                    setSortParam(option);
                    closeFilterDropdownMenu();
                  }}
                >
                  <span>{option}</span>
                  {sortParam === option && <CheckIcon />}
                </Styled.OptionWrapper>
              ))}
            </Dropdown>
          </Styled.FlexContainer>,
        ]}
      />
    </>
  );
};

export default TableInfoSection;
