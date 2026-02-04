import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, IUpdateNoticeRequest, UseMutationOptionsType } from '@/types';

import { updateNotice } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateNoticeReturn {
  mutate: (variables: IUpdateNoticeRequest) => void;
}

export const useUpdateNotice = (
  options?: UseMutationOptionsType<void, IUpdateNoticeRequest>,
): IUseUpdateNoticeReturn => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateNotice,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.NOTICE.LIST] });

      alert('공지사항이 업데이트 되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '공지사항 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '공지사항 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
