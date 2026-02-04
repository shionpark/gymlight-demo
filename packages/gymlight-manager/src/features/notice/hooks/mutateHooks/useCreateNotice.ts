import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, ICreateNoticeRequest, UseMutationOptionsType } from '@/types';

import { createNotice } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseCreateNoticeReturn {
  mutate: (variables: ICreateNoticeRequest) => void;
}

export const useCreateNotice = (
  options?: UseMutationOptionsType<void, ICreateNoticeRequest>,
): IUseCreateNoticeReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createNotice,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.NOTICE.LIST] });

      alert('새로운 공지사항이 등록되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '공지사항 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '공지사항 등록 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
