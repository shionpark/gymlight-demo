import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import { registerMember } from '@/apis';

import type {
  ICreateMemberResponse,
  IQueryErrorResponse,
  IRegisterNewMemberRequest,
  UseMutationOptionsType,
} from '@/types';

interface IUseRegisterNewMemberReturn {
  mutate: (variables: IRegisterNewMemberRequest) => void;
}

export const useRegisterNewMember = (
  options?: UseMutationOptionsType<ICreateMemberResponse, IRegisterNewMemberRequest>,
): IUseRegisterNewMemberReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: registerMember,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });

      alert('새 회원 등록이 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional(data?.data.memberId);
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '새 회원 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);

      if (options?.onErrorAdditional) {
        options.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
