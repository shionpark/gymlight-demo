import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import type {
  IQueryErrorResponse,
  IUpdateMemberInfoRequest,
  UseMutationOptionsType,
} from '@/types';
import { updateMemberInfo } from '@/apis';
interface IUseUpdateMemberInfoReturn {
  mutate: (variables: IUpdateMemberInfoRequest) => void;
}
export const useUpdateMemberInfo = (
  options?: UseMutationOptionsType<void, IUpdateMemberInfoRequest>,
): IUseUpdateMemberInfoReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateMemberInfo,
    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      alert('회원 정보 업데이트가 완료되었습니다.');
      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : '회원 정보 수정 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
      if (options?.onErrorAdditional) {
        options?.onErrorAdditional();
      }
    },
  });

  return { mutate };
};
