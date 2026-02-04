import { useEffect, useState, type ChangeEvent } from 'react';

import type { GenderType, JoinReasonType, VisitPathType } from '@/types';
import { splitYYYYMMDD } from '@/utils';

import { useForm } from 'gymlight-design-system';
import { useAddressBox, useSelfieCamera, useDateSelectState } from '@/hooks';
import { useUpdateMemberInfo } from '@/features/member';

export interface IUpdateMemberInfoFormFields {
  name?: string;
  gender?: GenderType;
  phone?: string;
  address?: string;
}

export interface IUseMemberInfoFormParams {
  initVisitPath?: VisitPathType;
  initVisitPathOther?: string;
  initJoinReason?: JoinReasonType;
  initJoinReasonOther?: string;
  initProfileImg?: string;
}

// TODO: 사진 변경 구현

export const useMemberInfoForm = ({
  initVisitPath,
  initVisitPathOther,
  initJoinReason,
  initJoinReasonOther,
  initProfileImg,
}: IUseMemberInfoFormParams) => {
  const generateInitOther = (init?: string) => {
    if (init && init !== 'N/A') {
      return init;
    }
    return '';
  };
  const [visitPathOther, setVisitPathOther] = useState(() => generateInitOther(initVisitPathOther));
  const onChangeVisitPathOther = (event: ChangeEvent<HTMLInputElement>) => {
    setVisitPathOther(event.target.value);
  };

  const [joinReasonOther, setJoinReasonOther] = useState(() =>
    generateInitOther(initJoinReasonOther),
  );
  const onChangeJoinReasonOther = (event: ChangeEvent<HTMLInputElement>) => {
    setJoinReasonOther(event.target.value);
  };

  const [visitPath, setVisitPath] = useState(() => initVisitPath);
  const onChangeVisitPath = (event: ChangeEvent<HTMLSelectElement>) => {
    const visitPathValue = event.target.value as VisitPathType;
    setVisitPath(visitPathValue);
  };

  const [joinReason, setJoinReason] = useState(() => initJoinReason);
  const onChangeJoinReason = (event: ChangeEvent<HTMLSelectElement>) => {
    const joinReasonValue = event.target.value as JoinReasonType;
    setJoinReason(joinReasonValue);
  };

  const {
    address,
    handleAddressInputChange,
    errorMessage,
    showAddressBox,
    setShowAddressBox,
    handleAddressChange,
    handleErrorChange,
    setAddress,
  } = useAddressBox();

  // 생년월일

  const {
    selectStateControlProps: birthDateSelectStateControlProps,
    setYear: setBirthDateYear,
    setMonth: setBirthDateMonth,
    setDay: setBirthDateDay,
    dateString: birthDate,
  } = useDateSelectState();

  const {
    selectStateControlProps: startDateSelectStateControlProps,
    setYear: setStartDateYear,
    setMonth: setStartDateMonth,
    setDay: setStartDateDay,
    dateString: startDate,
  } = useDateSelectState();

  const setInitDates = ({ birthDate, startDate }: { birthDate: string; startDate: string }) => {
    const trimZeroOnDateString = (dateValue: string) => `${+dateValue}`;

    const [initBirthDateYears, initBirthDateMonths, initBirthDateDays] = splitYYYYMMDD(
      birthDate,
    ).map((value) => trimZeroOnDateString(value));
    const [initStartDateYears, initStartDateMonths, initStartDateDays] = splitYYYYMMDD(
      startDate,
    ).map((value) => trimZeroOnDateString(value));

    setBirthDateYear(initBirthDateYears);
    setBirthDateMonth(initBirthDateMonths);
    setBirthDateDay(initBirthDateDays);

    setStartDateYear(initStartDateYears);
    setStartDateMonth(initStartDateMonths);
    setStartDateDay(initStartDateDays);
  };

  //저장시에만 변경 useEffect onSuccess => setProfileImage(photoString)
  const [profileImg, setProfileImg] = useState(() => initProfileImg);

  const { cameraMode, shot, photoString, videoRef, turnOnCamera, turnOffCamera, removeSavedPhoto } =
    useSelfieCamera({ profileImg: profileImg });

  // 폼의 readonly 상태관리
  const [formKey, setFormKey] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  const onClickCancelEdit = () => {
    setIsEdit(false);
    setFormKey((prev) => prev + 1);
    setAddress(null);

    setVisitPath(initVisitPath);
    setJoinReason(initJoinReason);
  };

  // Form Mutation

  const { register, errors, handleSubmit } = useForm<IUpdateMemberInfoFormFields>();

  const { mutate } = useUpdateMemberInfo({
    onSuccessAdditional: () => {
      setIsEdit(false);
    },
  });

  const getHandleValidSubmit = (memberId: number) => {
    const onValid = async (form: IUpdateMemberInfoFormFields) => {
      const { name, gender, phone, address } = form;

      mutate({
        name,
        gender,
        birthDate,
        startDate,
        phone,
        address,
        visitPath,
        visitPathOther: visitPath === '기타' ? visitPathOther : '',
        joinReason,
        joinReasonOther: joinReason === '기타' ? joinReasonOther : '',
        memberId,
      });
    };
    return handleSubmit(onValid);
  };

  const [isEditImage, setIsEditImage] = useState(false);

  const onClickIsEditImage = () => {
    setIsEditImage((prev) => !prev);
  };

  // 카메라 &  주소 컴포넌트 열면 자동 스크롤
  useEffect(() => {
    const modalElement = document.querySelector('.modal-content') as HTMLElement;

    const scrollRatio = isEditImage ? (showAddressBox ? 0.6 : 0.4) : 0;
    if (modalElement && scrollRatio > 0) {
      modalElement.scrollTo({
        top: modalElement.scrollHeight * scrollRatio,
        behavior: 'smooth',
      });
    }
  }, [isEditImage]);

  useEffect(() => {
    const modalElement = document.querySelector('.modal-content') as HTMLElement;

    const scrollRatio = showAddressBox ? (isEditImage ? 0.2 : 0.28) : 0;
    if (modalElement && scrollRatio > 0) {
      modalElement.scrollTo({
        top: modalElement.scrollHeight * scrollRatio,
        behavior: 'smooth',
      });
    }
  }, [showAddressBox]);

  // 프로필 이미지 카메라

  const selfieCameraProps = {
    normalProps: {
      shot,
      photoString,
      cameraMode,
      removeSavedPhoto,
      turnOnCamera,
      turnOffCamera,
    },
    ref: videoRef,
  };

  return {
    selfieCameraProps,

    getHandleValidSubmit,
    register,
    errors,
    addressBoxProps: {
      address,
      handleAddressInputChange,
      errorMessage,
      showAddressBox,
      setShowAddressBox,
      handleAddressChange,
      handleErrorChange,
    },
    setAddress,

    birthDateSelectStateControlProps,
    startDateSelectStateControlProps,
    setInitDates,

    joinReason,
    onChangeJoinReason,
    joinReasonOther,
    onChangeJoinReasonOther,

    visitPath,
    onChangeVisitPath,
    visitPathOther,
    onChangeVisitPathOther,

    isEdit,
    onClickEdit,
    onClickCancelEdit,

    isEditImage,
    onClickIsEditImage,
    formKey,
  };
};
