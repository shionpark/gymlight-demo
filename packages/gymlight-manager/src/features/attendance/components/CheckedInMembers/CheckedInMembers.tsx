import { Dropdown, DualSideBar, GridContainer } from 'gymlight-design-system';

import { ButtonFilterOptionBox, DateFilterOptionBox, EnrollButton } from '@/components';

import { CheckedInMemberDetail } from './CheckedInMemberDetail';
import { IAttendanceMemberProps } from '../../hooks';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import * as Styled from './CheckedInMembers.styles';

interface ICheckedInMembersProps extends IAttendanceMemberProps {
  openMemberDetailsModal: ({ memberId }: { memberId: number }) => void;
}

const CheckedInMembers = ({
  attendanceMemberData,
  dropdownProps: { setFilterMenuRef, toggleFilterMenu, checkFilterMenuOpen },
  filterOptions: { dateFilterOptionBoxProps, genderFilterOptionBoxProps },
  openMemberDetailsModal,
}: ICheckedInMembersProps) => {
  return (
    <>
      <DualSideBar
        rightSideChildren={[
          <Dropdown
            align="left"
            ref={setFilterMenuRef}
            button={
              <EnrollButton
                size="small"
                Icon={AdjustmentsHorizontalIcon}
                label={'필터'}
                variant="normal"
                onClick={toggleFilterMenu}
              />
            }
            isDropdownMenuOpened={checkFilterMenuOpen}
            distance={10}
          >
            <Styled.FilterContainer>
              <Styled.Title>세부 필터링</Styled.Title>
              <DateFilterOptionBox {...dateFilterOptionBoxProps} />
              <ButtonFilterOptionBox {...genderFilterOptionBoxProps} />
            </Styled.FilterContainer>
          </Dropdown>,
        ]}
      />
      <Styled.GirdWrapper>
        <GridContainer columns={4}>
          {attendanceMemberData?.list.map((member) => (
            <CheckedInMemberDetail
              key={member.memberId}
              checkedInMember={member}
              openMemberDetailsModal={openMemberDetailsModal}
            />
          ))}
        </GridContainer>
      </Styled.GirdWrapper>
    </>
  );
};

export default CheckedInMembers;
