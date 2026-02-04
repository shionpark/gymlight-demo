import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, IUpdateProductRequest, UseMutationOptionsType } from '@/types';

import { updateProduct } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseUpdateProductReturn {
  mutate: (variables: IUpdateProductRequest) => void;
}

export const useUpdateProduct = (
  options?: UseMutationOptionsType<void, IUpdateProductRequest>,
): IUseUpdateProductReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateProduct,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.PRODUCT.LIST] });

      alert('상품 정보가 수정되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '상품 정보 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '상품 정보 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
