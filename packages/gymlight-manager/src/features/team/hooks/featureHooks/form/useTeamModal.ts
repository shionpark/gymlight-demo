import { useModal } from '@/hooks';
import { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import type { ModalType } from '@/types';

import { ITeamFormProps } from '@/features/team/components/TeamForm';

export interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  teamFormProps?: ITeamFormProps;
}

export const useTeamModal = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openTeamFormModal = (props?: ITeamFormProps) => {
    openModal({
      type: 'team-form',
      size: 'md',
      teamFormProps: props,
    });
  };

  const modalTitleText = data?.teamFormProps?.isPlusStaff
    ? `${data?.teamFormProps.initTeamName} 팀원 추가`
    : data?.teamFormProps?.isEdit
      ? '팀 정보 수정'
      : '팀 생성';

  return {
    openModal,
    openTeamFormModal,
    closeModal,
    data,
    modalTitleText,
  };
};
