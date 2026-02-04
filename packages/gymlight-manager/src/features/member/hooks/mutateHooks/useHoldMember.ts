import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { IQueryErrorResponse, IHoldingRequest } from '@/types';
import { holdMember } from '@/apis';
import { QUERIES } from '@/constants';

interface IUseHoldMemberReturn {
  mutate: (variables: IHoldingRequest) => void;
}

export const useHoldMember = (): IUseHoldMemberReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: holdMember,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, variables.memberId] });

      alert('회원 홀딩이 완료되었습니다.');
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '회원 홀딩중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
