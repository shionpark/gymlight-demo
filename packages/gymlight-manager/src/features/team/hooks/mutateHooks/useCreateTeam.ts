import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { createTeam } from '@/apis';
import { QUERIES } from '@/constants';
import type { IErrorResponse, ICreateTeamRequest, UseMutationOptionsType } from '@/types';

interface IUseCreateTeamReturn {
  mutate: (variables: ICreateTeamRequest) => void;
}

export const useCreateTeam = (
  options?: UseMutationOptionsType<void, ICreateTeamRequest>,
): IUseCreateTeamReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: createTeam,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.TEAM.LIST] });

      alert('새로운 팀이 등록되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '팀 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '팀 등록 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
