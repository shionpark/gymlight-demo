import { useModal } from '@/hooks';
import { IUpdateStaffRequest, ModalType } from '@/types';

import { ModalSizeTypes } from '@/components/Modal/Modal.styles';

export interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  staffFormProps?: IUpdateStaffRequest;
}

export const useStaffModal = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openStaffFormModal = (props?: IUpdateStaffRequest) => {
    openModal({
      type: 'staff-approval',
      size: 'sm',
      staffFormProps: props,
    });
  };

  const modalTitleText = '직원 정보';

  return {
    openModal,
    closeModal,
    openStaffFormModal,

    data,

    modalTitleText,
  };
};
