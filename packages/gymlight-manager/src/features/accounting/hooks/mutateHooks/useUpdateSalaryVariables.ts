import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

import type {
  IErrorResponse,
  IUpdateSalaryVariablesRequest,
  UseMutationOptionsType,
} from '@/types';

import { updateSalaryVariables } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateSalaryVariablesReturn {
  mutate: (variables: IUpdateSalaryVariablesRequest) => void;
}

export const useUpdateSalaryVariables = (
  options?: UseMutationOptionsType<void, IUpdateSalaryVariablesRequest>,
): IUseUpdateSalaryVariablesReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateSalaryVariables,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.ACCOUNTING.SALARY_VARIABLES] });

      alert('급여 정산 변수가 성공적으로 수정되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '급여 정산 변수 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '급여 정산 변수 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
