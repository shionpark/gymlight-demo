import { useMutation } from '@tanstack/react-query';

import type {
  IQueryErrorResponse,
  IMySalarySettlementRequest,
  UseMutationOptionsType,
} from '@/types';
import { requestSalarySettlement } from '@/apis';
interface IUseUpdateScheduleReturn {
  mutate: (variables: IMySalarySettlementRequest) => void;
}
export const useRequestSalarySettlement = (
  options?: UseMutationOptionsType<void, IMySalarySettlementRequest>,
): IUseUpdateScheduleReturn => {
  const { mutate } = useMutation({
    ...options,
    mutationFn: requestSalarySettlement,
    onSuccess: () => {
      alert('정산 요청이 완료되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : '정산 요청 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
      if (options?.onErrorAdditional) {
        options?.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
