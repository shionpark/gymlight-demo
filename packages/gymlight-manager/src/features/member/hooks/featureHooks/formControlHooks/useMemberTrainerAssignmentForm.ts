import { useForm } from 'gymlight-design-system';

import { ITrainerResponse } from '@/types';

import { useMe } from '@/features/auth';
import { useTrainerList } from '@/features/staff/hooks';
import { useAssignTrainerToMember } from '@/features/member';

interface IFetchTrainersResponse {
  data: ITrainerResponse[];
}

interface IMemberTrainerAssignmentFormFields {
  trainerId: number;
}

export const useMemberTrainerAssignmentForm = () => {
  const { data: userData } = useMe();
  const hasAuth = Boolean(userData?.role === '매니저');

  const { data: trainersData } = useTrainerList();

  const { mutate } = useAssignTrainerToMember();

  const { register, handleSubmit } = useForm<IMemberTrainerAssignmentFormFields>();

  const getHandleSubmit = (memberId: number) => {
    const onValid = async (values: IMemberTrainerAssignmentFormFields) => {
      mutate({
        memberId: +memberId,
        trainerId: +values.trainerId,
      });
    };
    return handleSubmit(onValid);
  };
  return {
    trainers: trainersData as unknown as IFetchTrainersResponse['data'],
    register,
    handleSubmit,
    getHandleSubmit,
    hasAuth,
  };
};

export type IUseMemberTrainerAssignmentFormReturn = ReturnType<
  typeof useMemberTrainerAssignmentForm
>;
