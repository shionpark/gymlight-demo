import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, IUpdateBranchInfoRequest } from '@/types';

import { updateBranchInfo } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateBranchInfoReturn {
  mutate: (variables: IUpdateBranchInfoRequest) => void;
}

export const useUpdateBranchInfo = (): IUseUpdateBranchInfoReturn => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateBranchInfo,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.BRANCH.LIST] });

      alert('지점정보가 업데이트 되었습니다..');
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '지점정보 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '지점정보 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
