import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IAssignMemberToLockerRequest, IErrorResponse, UseMutationOptionsType } from '@/types';

import { assignMemberToLocker } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseAssignMemberToLockerReturn {
  mutate: (variables: IAssignMemberToLockerRequest) => void;
}

export const useAssignMemberToLocker = (
  options?: UseMutationOptionsType<void, IAssignMemberToLockerRequest>,
): IUseAssignMemberToLockerReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: assignMemberToLocker,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.LOCKER.LIST] });

      alert('락커 할당이 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '락커 할당 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '락커 할당 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
