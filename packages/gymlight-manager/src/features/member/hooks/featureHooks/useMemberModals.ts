import { useModal } from '@/hooks';

import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';

import { ICouponMemberFormProps } from '../../components/forms/CouponMemberForm/CouponMemberForm';
import { IReservationMemberFormProps } from '../../components/forms/ReservationMemberForm/ReservationMemberForm';
import { IMemberDetailManagementSectionProps } from '../../components/MemberDetailManagementSection/MemberDetailManagementSection';

interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  couponMemberFormProps?: ICouponMemberFormProps;
  reservationMemberFormProps?: IReservationMemberFormProps;
  memberDetailManagementSectionProps?: IMemberDetailManagementSectionProps;
}

export const useMemberModals = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openCouponMemberFormModal = (props?: ICouponMemberFormProps) => {
    openModal({ type: 'coupon', size: 'lg', couponMemberFormProps: props });
  };

  const openReservationMemberFormModal = (props?: IReservationMemberFormProps) => {
    openModal({ type: 'reservation', size: 'xl', reservationMemberFormProps: props });
  };

  const openMemberDetailsModal = (props?: IMemberDetailManagementSectionProps) => {
    openModal({ type: 'member-details', size: '2xl', memberDetailManagementSectionProps: props });
  };

  const modalTitleText =
    data?.type === 'member-details'
      ? '회원 관리'
      : data?.type === 'coupon'
        ? data?.couponMemberFormProps?.isEdit
          ? '쿠폰 수정'
          : '쿠폰 등록'
        : data?.type === 'reservation'
          ? data?.reservationMemberFormProps?.initMode === 'update'
            ? '예약 수정'
            : data?.reservationMemberFormProps?.initMode === 'create'
              ? '예약등록'
              : '예약조회'
          : data?.type === 'member-assign-trainer'
            ? '트레이너 할당'
            : '';

  return {
    modalTitleText,
    openMemberDetailsModal,
    openCouponMemberFormModal,
    openReservationMemberFormModal,
    closeModal,
    data,
  };
};
