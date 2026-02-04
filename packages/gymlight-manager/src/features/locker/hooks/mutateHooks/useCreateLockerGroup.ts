import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type {
  IErrorResponse,
  ICreateLockerGroupRequest,
  UseMutationOptionsType,
  ILockerGroupResponse,
} from '@/types';

import { createLockerGroup } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseCreateLockerGroupReturn {
  mutate: (variables: ICreateLockerGroupRequest) => void;
}

export const useCreateLockerGroup = (
  options?: UseMutationOptionsType<ILockerGroupResponse, ICreateLockerGroupRequest>,
): IUseCreateLockerGroupReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: createLockerGroup,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.LOCKER.GROUP] });

      alert('새로운 락커 그룹이 등록되었습니다.');
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.data ?? '락커 그룹 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional(errorMessage);
      }
    },
  });

  return { mutate };
};
