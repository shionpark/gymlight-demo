import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import type {
  IQueryErrorResponse,
  IUpdateReservedMemberRequest,
  UseMutationOptionsType,
} from '@/types';

import { updateReservation } from '@/apis';

interface IUseUpdateReservationReturn {
  mutate: (variables: IUpdateReservedMemberRequest) => void;
}
export const useUpdateReservation = (
  options?: UseMutationOptionsType<void, IUpdateReservedMemberRequest>,
): IUseUpdateReservationReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateReservation,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.RESERVATION.LIST] });

      alert('예약 정보 업데이트가 완료되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : '예약 정보 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
      if (options?.onErrorAdditional) {
        options?.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
