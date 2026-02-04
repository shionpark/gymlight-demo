import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

import type {
  IErrorResponse,
  IUpdateSalarySettlementRequest,
  UseMutationOptionsType,
} from '@/types';

import { updateSalarySettlement } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateSalarySettlementReturn {
  mutate: (variables: IUpdateSalarySettlementRequest) => void;
}

export const useUpdateSalarySettlement = (
  options?: UseMutationOptionsType<void, IUpdateSalarySettlementRequest>,
): IUseUpdateSalarySettlementReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateSalarySettlement,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.ACCOUNTING.SALARY_SETTLEMENT_LIST] });

      alert('정산서가 성공적으로 수정되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '정산서 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '정산서 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
