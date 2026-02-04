import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type {
  IErrorResponse,
  IUpdateStaffRequest,
  UseMutationOptionsType,
  IStaffResponse,
} from '@/types';

import { updateStaff } from '@/apis';

import { QUERIES } from '@/constants';

interface IUseApproveStaffJoinReturn {
  mutate: (variables: IUpdateStaffRequest) => void;
}

export const useUpdateStaff = (
  options?: UseMutationOptionsType<IStaffResponse, IUpdateStaffRequest>,
): IUseApproveStaffJoinReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...options,
    mutationFn: updateStaff,

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.STAFF.LIST] });
      alert('직원 정보 업데이트가 완료되었습니다.');

      if (options?.onSuccessAdditional) {
        options.onSuccessAdditional();
      }
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response.data)
        : '직원 정보 업데이트 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
