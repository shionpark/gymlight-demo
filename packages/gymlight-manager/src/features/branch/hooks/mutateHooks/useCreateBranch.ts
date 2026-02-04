import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, ICreateBranchRequest } from '@/types';

import { createBranch } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseCreateBranchReturn {
  mutate: (variables: ICreateBranchRequest) => void;
}

export const useCreateBranch = (): IUseCreateBranchReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createBranch,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.BRANCH.LIST] });

      alert('새 지점이 등록되었습니다.');
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '지점등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '지점등록 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
