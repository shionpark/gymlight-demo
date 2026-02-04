import { useMutation } from '@tanstack/react-query';

import type { IQueryErrorResponse, ISaveContractRequest } from '@/types';

import { saveMemberContract } from '@/apis';

interface IUseSaveMemberContract {
  mutate: (params: ISaveContractRequest) => void;
}
export const useSaveMemberContract = (): IUseSaveMemberContract => {
  const { mutate } = useMutation({
    mutationFn: saveMemberContract,

    onSuccess: () => {
      alert('계약서 등록이 완료되었습니다.');
    },

    onError: (error: IQueryErrorResponse) => {
      const errorMessage = error.response?.data
        ? JSON.stringify(error.response?.data)
        : ' 계약서 등록 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage);
    },
  });
  return { mutate };
};
