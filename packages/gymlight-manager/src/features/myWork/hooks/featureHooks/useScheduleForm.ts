import { useEffect, useState } from 'react';

import { useForm } from 'gymlight-design-system';

import { ScheduleStatusType, ScheduleType } from '@/types';

import { formatYYYYMMDD } from '@/utils';

import {
  useCheckClassComplete,
  useMyWorkModals,
  useRegisterSchedule,
  useUpdateSchedule,
} from '@/features/myWork';

import { useActiveMembers } from '@/features/member';
import { usePdf, useSignaturePad } from '@/hooks';

interface IUseScheduleFormArgs {
  initScheduleId?: number;
  initMode?: 'register' | 'edit' | 'view' | 'signature';
}

interface IScheduleFormFields {
  startDateYear: string;
  startDateMonth: string;
  startDateDay: string;

  endDateYear: string;
  endDateMonth: string;
  endDateDay: string;

  title: string;
  description: string;
  scheduledStartTime: string;
  scheduledEndTime: string;

  memberId: number;

  scheduleType: ScheduleType;
  status: ScheduleStatusType;
}

export const useScheduleForm = ({
  initMode = 'register',
  initScheduleId,
}: IUseScheduleFormArgs) => {
  const [mode, setMode] = useState(() => initMode);
  const [scheduleId, setScheduleId] = useState(() => initScheduleId);

  const isUnEditable = mode === 'view' || mode === 'edit';

  useEffect(() => {
    if (initMode) {
      setMode(initMode);
    }
    if (initScheduleId) setScheduleId(initScheduleId);
  }, [initMode, initScheduleId]);

  const handleClickEditButton = () => {
    setMode('edit');
  };
  const handleClickCancelButton = () => {
    setMode('view');
  };

  const handleClickCompleteButton = () => {
    alert('준비중입니다.');
  };

  const [formKey, setFormKey] = useState(0);

  const { closeModal } = useMyWorkModals();

  const { mutate: create } = useRegisterSchedule({
    onSuccessAdditional: () => {
      setFormKey((prev) => prev + 1);
      closeModal();
    },
  });
  const { mutate: update } = useUpdateSchedule({
    onSuccessAdditional: () => {
      setMode('view');
    },
  });

  const { register, handleSubmit } = useForm<IScheduleFormFields>();

  const onValidCreate = async (form: IScheduleFormFields) => {
    const {
      startDateYear,
      startDateMonth,
      startDateDay,
      endDateYear,
      endDateMonth,
      endDateDay,
      scheduledStartTime,
      scheduledEndTime,
      title,
      description,
      status,
      scheduleType,
      memberId,
    } = form;
    const startTime = `${formatYYYYMMDD(startDateYear, startDateMonth, startDateDay)} ${scheduledStartTime}:00`;
    const endTime = `${formatYYYYMMDD(endDateYear, endDateMonth, endDateDay)} ${scheduledEndTime}:00`;

    create({ startTime, endTime, title, description, memberId, status, scheduleType });
  };

  const onValidUpdate = async (form: IScheduleFormFields) => {
    const {
      startDateYear,
      startDateMonth,
      startDateDay,
      endDateYear,
      endDateMonth,
      endDateDay,
      scheduledStartTime,
      scheduledEndTime,
      title,
      description,
      status,
    } = form;
    const startTime = `${formatYYYYMMDD(startDateYear, startDateMonth, startDateDay)} ${scheduledStartTime}:00`;
    const endTime = `${formatYYYYMMDD(endDateYear, endDateMonth, endDateDay)} ${scheduledEndTime}:00`;

    if (!scheduleId) {
      alert('일정 정보를 불러올 수 없습니다.');
      return;
    }

    update({
      startTime,
      endTime,
      title,
      description,
      scheduleId,
      status,
    });
  };

  const { data: members } = useActiveMembers();

  const handleSubmitRegister = handleSubmit(onValidCreate);

  const handleSubmitUpdate = handleSubmit(onValidUpdate);

  const { mutate: checkClassComplete } = useCheckClassComplete({
    onSuccessAdditional: () => {
      setMode('view');
    },
  });

  const {
    ref: signaturePdfRef,
    downloadPdf,

    getBlob,
  } = usePdf({
    paperSize: [60, 15],
    orientation: 'landscape',
  });

  const signaturePadProps = useSignaturePad({ placeholder: '회원 서명' });

  const signatureImage = signaturePadProps.signatureData;

  const handleSubmitSignature = async () => {
    if (!scheduleId) {
      alert('일정 정보를 불러올 수 없습니다.');
      return;
    }
    if (signaturePadProps.mode !== 'complete') {
      alert('먼저 서명을 입력하고 저장해주세요.');
      return;
    }
    const signaturePdfBlob = await getBlob();
    if (!signaturePdfBlob) {
      alert('서명 이미지 저장에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      return;
    }
    downloadPdf();
    checkClassComplete({ scheduleId, signature: signaturePdfBlob });
  };

  const toggleRenderSignaturePad = () => {
    setMode((prev) => (prev === 'signature' ? 'view' : 'signature'));
  };

  return {
    formKey,
    register,
    handleSubmitRegister,
    handleSubmitUpdate,
    handleClickCompleteButton,
    members,
    handleClickCancelButton,
    handleClickEditButton,
    mode,
    isUnEditable,
    signaturePadProps,

    handleSubmitSignature,
    toggleRenderSignaturePad,
    signaturePdfRef,
    signatureImage,
  };
};

export type UseScheduleFormReturnType = ReturnType<typeof useScheduleForm>;
