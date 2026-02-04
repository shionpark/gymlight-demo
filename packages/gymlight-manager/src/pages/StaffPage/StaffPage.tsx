import { ManagementSection } from 'gymlight-design-system';

import { Modal } from '@/components';

import { StaffForm, StaffTable } from '@/features/staff/components';
import { useStaffModal, useStaffTable } from '@/features/staff/hooks';

const StaffPage = () => {
  const { closeModal, data, modalTitleText } = useStaffModal();

  const staffTableProps = useStaffTable();

  return (
    <>
      <ManagementSection>
        <StaffTable {...staffTableProps} />
      </ManagementSection>

      <Modal title={modalTitleText} onClose={closeModal} size={data?.size}>
        {() =>
          data?.type === 'staff-approval' && (
            <StaffForm {...staffTableProps} {...data?.staffFormProps!} closeModal={closeModal} />
          )
        }
      </Modal>
    </>
  );
};

export default StaffPage;
