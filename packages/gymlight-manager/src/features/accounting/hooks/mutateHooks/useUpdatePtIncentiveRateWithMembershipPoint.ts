import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

import type {
  IErrorResponse,
  IUpdatePtIncentiveRateWithMembershipPointRequest,
  UseMutationOptionsType,
} from '@/types';

import { QUERIES } from '@/constants';

import { updatePtIncentiveRateWithMembershipPoints } from '@/apis';

export const useUpdatePtIncentiveRateWithMembershipPoint = (
  options?: UseMutationOptionsType<void, IUpdatePtIncentiveRateWithMembershipPointRequest>,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updatePtIncentiveRateWithMembershipPoints,

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QUERIES.ACCOUNTING.PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINT],
      });

      alert('정산 변수 - 포인트 반영 PT수업료 비율이 성공적으로 수정되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ??
        '정산 변수 - 포인트 반영 PT수업료 비율 수정중 알 수 없는 오류가 발생하였습니다.';

      alert(
        errorMessage ||
          '정산 변수 - 포인트 반영 PT수업료 비율 수정중 알 수 없는 오류가 발생하였습니다',
      );
    },
  });

  return { mutate };
};
