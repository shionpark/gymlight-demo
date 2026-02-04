import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { join } from '@/apis';
import { URLS } from '@/constants';
import type { IErrorResponse, IJoinFormRequest } from '@/types';

interface IUseJoinReturn {
  mutate: (variables: IJoinFormRequest) => void;
}

export const useJoin = (): IUseJoinReturn => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: join,

    onSuccess: () => {
      alert('Gymlight의 직원이 되신 것을 환영합니다!');
      navigate(URLS.CLIENT.LOGIN);
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '회원가입 중 알 수 없는 오류가 발생했습니다.';

      alert(errorMessage || '회원가입 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
