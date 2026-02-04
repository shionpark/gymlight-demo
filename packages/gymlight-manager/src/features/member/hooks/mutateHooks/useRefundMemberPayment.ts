import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { IQueryErrorResponse, IRefundRequest, UseMutationOptionsType } from '@/types';

import { refundMemberPayment } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseRefundMemberPaymentReturn {
  mutate: (variables: IRefundRequest) => void;
}

export const useRefundMemberPayment = (
  options?: UseMutationOptionsType<void, IRefundRequest>,
): IUseRefundMemberPaymentReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: refundMemberPayment,
    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.REFUNDABLE_PAYMENTS, memberId] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      alert('회원 환불이 완료되었습니다,');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '환불 도중 알수없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
