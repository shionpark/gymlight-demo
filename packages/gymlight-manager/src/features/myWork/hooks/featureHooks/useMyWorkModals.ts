import { useModal } from '@/hooks';

import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import type { IScheduleFormProps } from '@/features/myWork/components/ScheduleForm/ScheduleForm';
import { IMemberDetailManagementSectionProps } from '@/features/member/components/MemberDetailManagementSection/MemberDetailManagementSection';
import { IScheduleFormWithFetchingDataProps } from '../../components/ScheduleForm/ScheduleFormWithFetchingData';
import { ISettlementRequestFormProps } from '../../components/SettlementRequestForm/SettlementRequestForm';

interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  scheduleFormProps?: IScheduleFormProps;
  ScheduleFormWithFetchingDataProps?: IScheduleFormWithFetchingDataProps;
  memberDetailManagementSectionProps?: IMemberDetailManagementSectionProps;
  settlementRequestFormProps?: ISettlementRequestFormProps;
}

export const useMyWorkModals = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openScheduleFormModal = (props?: IScheduleFormProps) => {
    openModal({ type: 'mywork-schedule', size: 'xl', scheduleFormProps: props });
  };

  const openScheduleFormWithFetchingDataModal = (props?: IScheduleFormWithFetchingDataProps) => {
    openModal({
      type: 'mywork-schedule-fetching-data',
      size: 'xl',
      ScheduleFormWithFetchingDataProps: props,
    });
  };

  const openMemberDetailsModal = (props?: IMemberDetailManagementSectionProps) => {
    openModal({ type: 'member-details', size: '2xl', memberDetailManagementSectionProps: props });
  };

  const openSettlementRequestFormModal = (props?: ISettlementRequestFormProps) => {
    openModal({ type: 'mywork-settlement', size: '2xl', settlementRequestFormProps: props });
  };

  const modalTitleText =
    data?.type === 'mywork-schedule'
      ? '일정 등록'
      : data?.type === 'mywork-schedule-fetching-data'
        ? '일정 정보'
        : data?.type === 'mywork-settlement'
          ? '정산 요청'
          : '';

  return {
    closeModal,
    data,
    openScheduleFormModal,
    openMemberDetailsModal,
    openScheduleFormWithFetchingDataModal,
    openSettlementRequestFormModal,
    modalTitleText,
  };
};
