import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import type { IQueryErrorResponse, IUpdateScheduleRequest, UseMutationOptionsType } from '@/types';
import { updateSchedule } from '@/apis';
interface IUseUpdateScheduleReturn {
  mutate: (variables: IUpdateScheduleRequest) => void;
}
export const useUpdateSchedule = (
  options?: UseMutationOptionsType<void, IUpdateScheduleRequest>,
): IUseUpdateScheduleReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateSchedule,
    onSuccess: (_, variables) => {
      const { scheduleId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MY_WORK.SCHEDULE.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MY_WORK.SCHEDULE.DETAILS, scheduleId] });

      alert('일정 업데이트가 완료되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : '일정 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
      if (options?.onErrorAdditional) {
        options?.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
