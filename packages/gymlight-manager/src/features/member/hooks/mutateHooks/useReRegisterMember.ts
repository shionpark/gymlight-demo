import { useMutation, useQueryClient } from '@tanstack/react-query';

import type {
  ICreateMemberResponse,
  IQueryErrorResponse,
  IReRegisterMemberRequest,
  UseMutationOptionsType,
} from '@/types';
import { reRegisterMember } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseReRegisterMemberReturn {
  mutate: (variables: IReRegisterMemberRequest) => void;
}

export const useReRegisterMember = (
  options?: UseMutationOptionsType<ICreateMemberResponse, IReRegisterMemberRequest>,
): IUseReRegisterMemberReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: reRegisterMember,
    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      alert('회원 재 등록이 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : ' 회원 재 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
