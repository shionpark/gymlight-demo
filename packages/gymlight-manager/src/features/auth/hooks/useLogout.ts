import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logout, setBearerToken } from '@/apis';
import { QUERIES, URLS } from '@/constants';
import { activeBranchState, currentUserState } from '@/states';
import { useNavigate } from 'react-router';

import { getRedirect, removeIsLoggedIn } from '@/utils';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setBranchState = useSetRecoilState(activeBranchState);
  const navigate = useNavigate();

  const resetUserAuthInfo = useCallback(() => {
    setBearerToken('');
    setCurrentUser(null);
    setBranchState(null);
    queryClient.removeQueries({
      queryKey: [QUERIES.AUTH.ME],
    });
    removeIsLoggedIn();
  }, []);

  const { mutate } = useMutation({
    mutationFn: logout,
  });

  const handleClickLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      mutate();
      resetUserAuthInfo();
      getRedirect();
      navigate(URLS.CLIENT.LOGIN);
    }
  };

  return { mutate, resetUserAuthInfo, handleClickLogout };
};
