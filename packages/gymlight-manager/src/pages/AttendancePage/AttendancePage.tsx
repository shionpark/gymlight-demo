import { useNavigate } from 'react-router';

import { ManagementSection } from 'gymlight-design-system';

import { EnrollButton, Modal } from '@/components';
import { URLS } from '@/constants';

import { MemberDetailManagementSection, useMemberModals } from '@/features/member';
import { CheckedInMembers } from '@/features/attendance';
import { useAttendanceMember } from '@/features/attendance/hooks';

import { IdentificationIcon } from '@heroicons/react/24/outline';

const AttendancePage = () => {
  const { data, closeModal, openMemberDetailsModal, modalTitleText } = useMemberModals();
  const attendanceMemberProps = useAttendanceMember();

  const navigate = useNavigate();

  return (
    <>
      <ManagementSection
        buttons={
          <EnrollButton
            size="small"
            label="출석 등록"
            Icon={IdentificationIcon}
            onClick={() => navigate(URLS.CLIENT.CHECK_IN)}
          />
        }
      >
        <CheckedInMembers
          {...attendanceMemberProps}
          openMemberDetailsModal={openMemberDetailsModal}
        />
      </ManagementSection>

      <Modal title={modalTitleText} onClose={closeModal} size={data?.size}>
        {() => (
          <>
            {data?.type === 'member-details' && (
              <MemberDetailManagementSection {...data?.memberDetailManagementSectionProps} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default AttendancePage;
