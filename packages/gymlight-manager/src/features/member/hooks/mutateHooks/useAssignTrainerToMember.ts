import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERIES } from '@/constants';

import type { IQueryErrorResponse, IAssignTrainerToMemberRequest } from '@/types';
import { assignTrainerToMember } from '@/apis';

interface IUseAssignTrainerToMemberReturn {
  mutate: (variables: IAssignTrainerToMemberRequest) => void;
}
export const useAssignTrainerToMember = (): IUseAssignTrainerToMemberReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: assignTrainerToMember,
    onSuccess: (_, variables) => {
      const { memberId } = variables;
      queryClient.invalidateQueries({ queryKey: [QUERIES.MEMBER.LIST] });
      queryClient.refetchQueries({ queryKey: [QUERIES.MEMBER.DETAILS, memberId] });

      alert('트레이너 할당이 완료되었습니다.');
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '트레이너 할당 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
