import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, ICreatePackageProductRequest, UseMutationOptionsType } from '@/types';

import { createPackageProduct } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseCreatePackageProductReturn {
  mutate: (variables: ICreatePackageProductRequest) => void;
}

export const useCreatePackageProduct = (
  options?: UseMutationOptionsType<void, ICreatePackageProductRequest>,
): IUseCreatePackageProductReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createPackageProduct,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.PRODUCT.LIST] });

      alert('새로운 패키지 상품이 등록되었습니다.');

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
