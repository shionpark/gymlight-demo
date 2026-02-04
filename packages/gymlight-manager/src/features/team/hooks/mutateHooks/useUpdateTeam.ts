import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { updateTeam } from '@/apis';
import { QUERIES } from '@/constants';
import type { IErrorResponse, IUpdateTeamRequest, UseMutationOptionsType } from '@/types';

interface IUseUpdateTeamReturn {
  mutate: (variables: IUpdateTeamRequest) => void;
}

export const useUpdateTeam = (
  options?: UseMutationOptionsType<void, IUpdateTeamRequest>,
): IUseUpdateTeamReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateTeam,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.TEAM.LIST] });

      alert('팀 정보가 업데이트 되었습니다..');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '팀 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '팀 정보 수정 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
