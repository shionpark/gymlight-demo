import { useState } from 'react';
import { useForm } from 'gymlight-design-system';

import { MEMBER_CATEGORIES_CODE } from '@/constants';

import type {
  GenderType,
  IBranchNameResponse,
  ProductCategoryType,
  ReservationPathType,
} from '@/types';

import { useMe } from '@/features/auth';

import { useBranchNameList } from '@/features/branch';
import {
  useMemberCategories,
  useRegisterReservationMember,
  useUpdateReservation,
} from '@/features/member';

import { formatYYYYMMDD } from '@/utils';

type FormModeType = 'create' | 'update' | 'view';

interface IRegisterReservationFormFields {
  name: string;
  phone: string;
  gender: GenderType;
  reservationDateYear: string;
  reservationDateMonth: string;
  reservationDateDay: string;
  visitTime: string;
  content: string;
  author: string;
  reservationPath: ReservationPathType;
  productType: ProductCategoryType;
  branchId: number;
  isRegistered: '등록' | '미등록';
}

export const useReservationMemberForm = () => {
  const [mode, setMode] = useState<FormModeType>('create');
  const [formKey, setFormKey] = useState(0);

  // 예약담당자 이름 자동설정
  const { data } = useMe();
  const loggedInMemberName = data?.name;

  const isAdmin = data?.role === '관리자';
  const { data: branchOptionData } = useBranchNameList();

  const { data: memberCategories } = useMemberCategories();

  const memberCategoryId = memberCategories?.find(
    (aCategory) => aCategory.code === MEMBER_CATEGORIES_CODE['예약 회원'],
  )?.memberCategoryId;

  // 예약일자 (방문예정일) 년도 범위
  const selectYearRange = [new Date().getFullYear(), new Date().getFullYear() + 1];

  // useForm
  const { register, errors, handleSubmit } = useForm<IRegisterReservationFormFields>();

  const { mutate: registerReservation } = useRegisterReservationMember();

  const { mutate: updateReservation } = useUpdateReservation();

  const onValidRegister = async (form: IRegisterReservationFormFields) => {
    const {
      name,
      phone,
      reservationDateYear,
      reservationDateMonth,
      reservationDateDay,
      reservationPath,
      visitTime,
      content,
      gender,
      branchId,
      productType,
    } = form;

    const visitDate = formatYYYYMMDD(reservationDateYear, reservationDateMonth, reservationDateDay);

    const reservationDate = `${visitDate} ${visitTime}:00`;

    if (!memberCategoryId) {
      alert(`memberCategoryId가 존재하지 않습니다. 
        현재 서버와의 통신 상태를 확인해주세요.`);
      return;
    }

    registerReservation({
      name,
      phone,
      gender,
      reservationDate,
      reservationPath,
      content,
      productType,
      isRegistered: false,
      branchId,
      memberCategoryId,
    });
  };

  const generateHandleSubmitUpdate = (reservationId: number) => {
    const onValidUpdate = async (form: IRegisterReservationFormFields) => {
      const {
        reservationDateYear,
        reservationDateMonth,
        reservationDateDay,
        reservationPath,
        content,

        productType,
        isRegistered,
      } = form;

      const reservationDate = formatYYYYMMDD(
        reservationDateYear,
        reservationDateMonth,
        reservationDateDay,
      );

      updateReservation({
        reservationDate,
        reservationId,
        reservationPath,
        productType,
        content,
        isRegistered: isRegistered === '등록',
      });
    };
    return handleSubmit(onValidUpdate);
  };

  const handleSubmitRegister = handleSubmit(onValidRegister);

  const handleCancelUpdateClick = () => {
    setFormKey((prev) => prev + 1);
    setMode('view');
  };

  return {
    mode,
    setMode,
    formKey,

    loggedInMemberName,
    selectYearRange,
    register,
    errors,
    handleCancelUpdateClick,

    handleSubmitRegister,
    generateHandleSubmitUpdate,
    isAdmin,
    branchOptionData: branchOptionData as IBranchNameResponse[],
  };
};
