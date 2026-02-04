import { useModal } from '@/hooks';
import type { ModalType } from '@/types';

import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import type { LockerAssignFormFields } from './useLockerFormValidation';
import type { ILockerGroupFormProps } from '@/features/locker/components/modals/LockerGroupForm';

interface LockerModalData {
  type: ModalType;
  size: ModalSizeTypes;
  lockerFormProps?: ILockerGroupFormProps;
  lockerMoveFormProps?: Partial<LockerAssignFormFields>;
}

export const useLockerModals = () => {
  const { openModal, closeModal, data } = useModal<LockerModalData>();

  const openLockerGroupFormModal = (props?: ILockerGroupFormProps) => {
    openModal({
      type: 'locker-group',
      size: props ? 'sm' : '2xl',
      lockerFormProps: props,
    });
  };

  const openMemberSearchFormModal = () => {
    openModal({
      type: 'locker-member-search',
      size: 'md',
    });
  };

  const openLockerMoveModal = (props: Partial<LockerAssignFormFields>) => {
    openModal({
      type: 'locker-member-move',
      size: 'sm',
      lockerMoveFormProps: props,
    });
  };

  const modalTitleText =
    data?.type === 'locker-member-move'
      ? '락커 이동'
      : data?.type === 'locker-member-search'
        ? '회원 검색'
        : data?.lockerFormProps?.isEdit
          ? '락커 그룹 수정'
          : '락커 그룹 생성';

  return {
    openModal,
    closeModal,
    openLockerGroupFormModal,
    openMemberSearchFormModal,
    openLockerMoveModal,
    data,
    modalTitleText,
  };
};
