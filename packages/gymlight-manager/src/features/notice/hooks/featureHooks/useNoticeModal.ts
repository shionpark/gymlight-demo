import { useModal } from '@/hooks';
import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import { NoticeFormProps } from '@/features/notice/components/NoticeForm';

export interface ModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  noticeFormProps?: NoticeFormProps;
}

export const useNoticeModal = () => {
  const { openModal, closeModal, data } = useModal<ModalDataProps>();

  const openNoticeFormModal = (props?: NoticeFormProps) => {
    openModal({
      type: 'notice-form',
      size: 'lg',
      noticeFormProps: props,
    });
  };

  const modalTitleText = data?.noticeFormProps?.isEdit ? '공지사항 수정' : '공지사항 등록';

  return {
    openModal,
    openNoticeFormModal,
    closeModal,
    data,
    modalTitleText,
  };
};
