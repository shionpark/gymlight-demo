import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { IQueryErrorResponse, IRegisterCouponRequest } from '@/types';

import { registerCoupon } from '@/apis';
import { QUERIES } from '@/constants';

export const useRegisterCouponMember = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: registerCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.COUPON.LIST] });

      alert('쿠폰 회원 등록이 완료되었습니다.');
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '쿠폰 회원 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
