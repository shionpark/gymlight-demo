import { useModal } from '@/hooks';

import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import type { ModalType } from '@/types';

export interface IModalDataProps {
  type?: ModalType | 'attendance-members';
  size?: ModalSizeTypes;
  phone: string;
}

export const useCheckInModal = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openAttendanceMembersModal = (phone: string) => {
    openModal({
      type: 'attendance-members',
      size: 'md',
      phone,
    });
  };

  const modalTitleText = '회원 조회';

  return {
    openModal,
    closeModal,
    openAttendanceMembersModal,

    data,

    modalTitleText,
  };
};

export interface ICheckInModalProps extends ReturnType<typeof useCheckInModal> {}
