import { useModal } from '@/hooks';

import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import type { IBranchFormProps } from '@/features/branch/components/BranchForm/BranchForm';
import type { IBranchStatusFormProps } from '@/features/branch/components/BranchStatusForm/BranchStatusForm';
import type { IBranchDeleteFormProps } from '../../components/BranchDeleteForm/BranchDeleteForm';

interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  branchFormProps?: IBranchFormProps;
  branchStatusFormProps?: IBranchStatusFormProps;
  branchDeleteFormProps?: IBranchDeleteFormProps;
}

export const useBranchModals = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openBranchFormModal = (props?: IBranchFormProps) => {
    openModal({ type: 'branch-info', size: 'lg', branchFormProps: props });
  };

  const openBranchStatusFormModal = (props: IBranchStatusFormProps) => {
    openModal({ type: 'branch-status', size: 'md', branchStatusFormProps: props });
  };

  const openBranchDeleteFormModal = (props?: IBranchDeleteFormProps) => {
    openModal({ type: 'branch-delete', size: 'md', branchDeleteFormProps: props });
  };

  const modalTitleText =
    data?.type === 'branch-delete'
      ? '지점 삭제'
      : data?.type === 'branch-status'
        ? '지점 상태 수정'
        : data?.branchFormProps?.isEdit
          ? '지점 정보 수정'
          : '지점 등록';

  return {
    openModal,
    closeModal,
    data,

    openBranchFormModal,
    openBranchStatusFormModal,
    openBranchDeleteFormModal,

    modalTitleText,
  };
};
