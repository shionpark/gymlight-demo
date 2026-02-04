import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, IUpdateBranchStatusRequest } from '@/types';

import { updateBranchStatus } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateBranchStatusReturn {
  mutate: (variables: IUpdateBranchStatusRequest) => void;
}

export const useUpdateBranchStatus = (): IUseUpdateBranchStatusReturn => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateBranchStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.BRANCH.LIST] });
      alert('지점 상태가 변경되었습니다.');
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '지점상태 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '지점상태 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
