import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

import type {
  IBranchParams,
  IDeleteBranchRequest,
  IErrorResponse,
  UseMutationOptionsType,
} from '@/types';

import { QUERIES } from '@/constants';

import { deleteBranch } from '@/apis';

interface IUseDeleteBranchReturn {
  mutate: (variables: IBranchParams) => void;
}

export const useDeleteBranch = (
  options?: UseMutationOptionsType<void, IDeleteBranchRequest>,
): IUseDeleteBranchReturn => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...options,

    mutationFn: deleteBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.BRANCH.LIST] });
      alert('지점이 삭제되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '지점삭제 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '지점삭제 중 알 수 없는 오류가 발생했습니다.');
      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
