import { useMutation } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { login, setBearerToken } from '@/apis';
import type { IErrorResponse, ILoginFormRequest, ILoginResponse } from '@/types';
import { getRedirect, setIsLoggedIn } from '@/utils';

import { useMe } from './useMe';
import { sidebarIsFoldState } from '@/states';
import { useSetRecoilState } from 'recoil';

interface IUseLoginReturn {
  mutate: (variables: ILoginFormRequest) => void;
}

export const useLogin = (): IUseLoginReturn => {
  const navigate = useNavigate();
  const { refetch } = useMe();
  const setSidebarState = useSetRecoilState(sidebarIsFoldState);

  const { mutate } = useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<IErrorResponse>,
    ILoginFormRequest
  >({
    mutationFn: login,

    onSuccess: async (response) => {
      const { accessToken } = response.data;

      setBearerToken(accessToken);
      await refetch();

      alert('로그인 되었습니다!');
      setIsLoggedIn();

      setSidebarState(false);

      const redirect = getRedirect();
      navigate(redirect, { replace: true });
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage = error.response?.data.message ?? '로그인에 실패했습니다.';

      alert(errorMessage);
    },
  });

  return { mutate };
};
