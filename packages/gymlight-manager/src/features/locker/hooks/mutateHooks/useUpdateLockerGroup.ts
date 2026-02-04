import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type {
  IErrorResponse,
  ILockerGroupResponse,
  IUpdateLockerGroupRequest,
  UseMutationOptionsType,
} from '@/types';

import { updateLockerGroup } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateLockerGroupReturn {
  mutate: (variables: IUpdateLockerGroupRequest) => void;
}

export const useUpdateLockerGroup = (
  options?: UseMutationOptionsType<ILockerGroupResponse, IUpdateLockerGroupRequest>,
): IUseUpdateLockerGroupReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateLockerGroup,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.LOCKER.GROUP] });

      alert('락커 그룹 정보가 수정되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '락커 그룹 정보 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '락커 그룹 정보 수정 중 알 수 없는 오류가 발생했습니다.');

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
