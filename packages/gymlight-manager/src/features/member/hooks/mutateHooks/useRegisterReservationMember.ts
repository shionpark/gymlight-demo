import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { IQueryErrorResponse, IRegisterReservationRequest } from '@/types';
import { registerReservation } from '@/apis';
import { QUERIES } from '@/constants';

export const useRegisterReservationMember = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: registerReservation,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.RESERVATION.LIST] });
      alert('예약 회원 등록이 완료되었습니다.');
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '예약 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
