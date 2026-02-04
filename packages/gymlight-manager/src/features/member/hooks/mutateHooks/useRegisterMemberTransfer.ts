import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { registerMemberTransfer } from '@/apis';

import type {
  IQueryErrorResponse,
  IRegisterMemberTransferRequest,
  UseMutationOptionsType,
} from '@/types';

interface IUseRegisterMemberTransferReturn {
  mutate: (variables: IRegisterMemberTransferRequest) => void;
}

export const useRegisterMemberTransfer = (
  options?: UseMutationOptionsType<void, IRegisterMemberTransferRequest>,
): IUseRegisterMemberTransferReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: registerMemberTransfer,
    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      queryClient.refetchQueries({
        queryKey: [QUERIES.MEMBER.REFUNDABLE_PAYMENTS, memberId],
      });
      alert('양도 회원 등록이 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '양도 회원 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
