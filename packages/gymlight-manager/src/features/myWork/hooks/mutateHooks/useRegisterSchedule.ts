import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { registerSchedule } from '@/apis';

import type {
  IQueryErrorResponse,
  IRegisterScheduleRequest,
  UseMutationOptionsType,
} from '@/types';

interface IUseRegisterScheduleReturn {
  mutate: (variables: IRegisterScheduleRequest) => void;
}

export const useRegisterSchedule = (
  options?: UseMutationOptionsType<void, IRegisterScheduleRequest>,
): IUseRegisterScheduleReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: registerSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MY_WORK.SCHEDULE.LIST] });

      alert('일정 등록이 완료되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '일정 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
