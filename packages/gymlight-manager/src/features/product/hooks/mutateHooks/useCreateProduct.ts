import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, ICreateProductRequest, UseMutationOptionsType } from '@/types';

import { createProduct } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseCreateProductReturn {
  mutate: (variables: ICreateProductRequest) => void;
}

export const useCreateProduct = (
  options?: UseMutationOptionsType<void, ICreateProductRequest>,
): IUseCreateProductReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.PRODUCT.LIST] });

      alert('새로운 상품이 등록되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '상품 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '상품 등록 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
