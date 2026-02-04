import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

export interface IModalDataProps<T = any> {
  type: ModalType;
  size?: ModalSizeTypes;
  title: string;
  customProps?: T;
}

interface OpenCustomModalProps<T> {
  openModal: (data: IModalDataProps<T>) => void;
  modalType: ModalType;
  size?: ModalSizeTypes;
  title: string;
  customProps?: T;
}

export const openCustomModal = <T = undefined>({
  openModal,
  modalType,
  size,
  title,
  customProps,
}: OpenCustomModalProps<T>) => {
  openModal({
    type: modalType,
    size,
    title,
    customProps,
  });
};
