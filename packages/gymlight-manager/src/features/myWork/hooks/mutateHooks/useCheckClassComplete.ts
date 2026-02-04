import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { checkClassComplete } from '@/apis';

import type {
  IQueryErrorResponse,
  ICheckClassCompleteRequest,
  UseMutationOptionsType,
} from '@/types';

interface IUseCheckClassCompleteReturn {
  mutate: (variables: ICheckClassCompleteRequest) => void;
}

export const useCheckClassComplete = (
  options?: UseMutationOptionsType<void, ICheckClassCompleteRequest>,
): IUseCheckClassCompleteReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: checkClassComplete,
    onSuccess: (_, variables) => {
      const { scheduleId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MY_WORK.SCHEDULE.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MY_WORK.SCHEDULE.DETAILS, scheduleId] });

      alert('수업 완료 처리에 성공하였습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '수업 완료 처리중 알수 없는 오류가 발생하였습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
