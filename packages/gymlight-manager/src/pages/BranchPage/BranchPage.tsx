import { SquareButton } from 'gymlight-design-system';
import { ManagementSection, Modal } from '@/components';

import {
  useBranchTable,
  BranchTable,
  useBranchModals,
  BranchForm,
  BranchStatusForm,
  BranchDeleteForm,
} from '@/features/branch';

import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';

const BranchPage = () => {
  const {
    openBranchFormModal,
    openBranchStatusFormModal,
    modalTitleText,
    closeModal,
    data: modalData,
  } = useBranchModals();

  const branchTableProps = useBranchTable();

  return (
    <>
      <ManagementSection
        buttons={
          <SquareButton
            type="submit"
            size="small"
            variant="primary"
            onClick={() => {
              openBranchFormModal();
            }}
          >
            <span>
              <BuildingStorefrontIcon />
            </span>
            지점 등록
          </SquareButton>
        }
      >
        <BranchTable {...branchTableProps} />
      </ManagementSection>
      <Modal title={modalTitleText} onClose={closeModal} size={modalData?.size}>
        {() => (
          <>
            {modalData?.type === 'branch-info' && <BranchForm {...modalData?.branchFormProps} />}
            {modalData?.type === 'branch-status' && (
              <BranchStatusForm {...modalData?.branchStatusFormProps!} />
            )}
            {modalData?.type === 'branch-delete' && (
              <BranchDeleteForm {...modalData?.branchDeleteFormProps!} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default BranchPage;
