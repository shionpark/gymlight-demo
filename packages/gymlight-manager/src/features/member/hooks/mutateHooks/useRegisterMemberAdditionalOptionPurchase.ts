import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { registerMemberAdditionalOptionPurchase } from '@/apis';

import type {
  IPurchaseAdditionalOptionRequest,
  IQueryErrorResponse,
  UseMutationOptionsType,
} from '@/types';

interface IUseRegisterMemberAdditionalOptionPurchase {
  mutate: (variables: IPurchaseAdditionalOptionRequest) => void;
}

export const useRegisterMemberAdditionalOptionPurchase = (
  options?: UseMutationOptionsType<void, IPurchaseAdditionalOptionRequest>,
): IUseRegisterMemberAdditionalOptionPurchase => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: registerMemberAdditionalOptionPurchase,

    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      alert('옵션 추가결제 등록이 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : '옵션 추가 결제 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
