import { useForm } from 'gymlight-design-system';

import { hasEmptyFields } from '@/utils';
import { useAssignMemberToLocker, useUnassignMemberFromLocker } from '@/features/locker/hooks';

export interface LockerAssignFormFields {
  lockerId?: number;
  memberId?: number;
  password: string;
  memo: string;
}

export const useLockerAssignFormValidation = () => {
  const { register, handleSubmit, reset } = useForm<LockerAssignFormFields>();

  const { mutate: assignLocker } = useAssignMemberToLocker({
    onSuccessAdditional: () => {
      window.location.reload();
    },
  });

  const { mutate: unassignLocker } = useUnassignMemberFromLocker({
    onSuccessAdditional: () => {
      window.location.reload();
    },
  });

  const onValidAssignLocker = (form: LockerAssignFormFields) => {
    return async () => {
      const alertMessage = '신규 락커를 배정하시겠습니까?';
      if (!confirm(alertMessage)) {
        return;
      }
      if (hasEmptyFields(form)) {
        alert('모든 필수 값을 입력해주세요.');
        return;
      }

      const { lockerId, memberId, password, memo } = form;

      if (!lockerId) {
        alert('존재하지 않는 락커입니다.');
        return;
      }
      if (!memberId) {
        alert('존재하지 않는 회원입니다.');
        return;
      }

      assignLocker({
        lockerId,
        memberId,
        password,
        memo,
      });
    };
  };

  const onValidUnassignLocker = (lockerId: number) => {
    return async () => {
      const alertMessage = '락커를 회수하시겠습니까?';
      if (!confirm(alertMessage)) {
        return;
      }

      unassignLocker({
        lockerId,
      });
    };
  };

  const onValidMoveLocker = ({
    lockerId: moveId,
    memberId,
    password,
    memo,
  }: Partial<LockerAssignFormFields>) => {
    return async () => {
      const alertMessage = '기존 락커를 이동하시겠습니까?';
      if (!confirm(alertMessage)) {
        return;
      }

      if (!moveId || !password || !memo) {
        alert('잘못된 락커 정보입니다.');
        return;
      }

      if (!memberId) {
        alert('존재하지 않는 회원입니다.');
        return;
      }

      assignLocker({
        lockerId: moveId,
        memberId,
        password,
        memo,
      });
    };
  };

  const handleSubmitAssignLocker = (params: LockerAssignFormFields) => {
    const onValid = onValidAssignLocker(params);
    return handleSubmit(onValid);
  };

  const handleSubmitMoveLocker = (params: Partial<LockerAssignFormFields>) => {
    const onValid = onValidMoveLocker(params);
    return handleSubmit(onValid);
  };

  return {
    register,
    handleSubmit,
    reset,

    assignLocker: handleSubmitAssignLocker,
    unassignLocker: onValidUnassignLocker,
    moveLocker: handleSubmitMoveLocker,
  };
};
