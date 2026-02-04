import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type {
  IUnassignMemberFromLockerRequest,
  IErrorResponse,
  UseMutationOptionsType,
} from '@/types';

import { unassignMemberFromLocker } from '@/apis';
import { QUERIES } from '@/constants';

interface IUseUnassignMemberReturn {
  mutate: (variables: IUnassignMemberFromLockerRequest) => void;
}

export const useUnassignMemberFromLocker = (
  options?: UseMutationOptionsType<void, IUnassignMemberFromLockerRequest>,
): IUseUnassignMemberReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: unassignMemberFromLocker,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.LOCKER.DETAIL] });

      alert('락커 회수가 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '락커 회수 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '락커 회수 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
