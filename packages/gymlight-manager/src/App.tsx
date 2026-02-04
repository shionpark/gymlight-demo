import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useRecoilState } from 'recoil';

import { Layout } from '@/components';
import { activeBranchState, currentUserState } from '@/states';

import { URLS } from './constants';
import { getIsLoggedIn } from './utils';

import { useMe } from '@/features/auth';
import { useBranchNameList } from './features/branch';
import { getBranchById } from './features/product';

const App = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [activeBranch, setActiveBranch] = useRecoilState(activeBranchState);
  const navigate = useNavigate();

  const isLoggedIn = getIsLoggedIn();

  const { data: userData } = useMe();
  const { data: branches } = useBranchNameList();

  const initializeCurrentUser = () => {
    if (userData) {
      setCurrentUser(userData);
    } else if (!isLoggedIn) {
      setCurrentUser(null);
      navigate(URLS.CLIENT.LOGIN);
    }
  };

  const initializeActiveBranch = () => {
    if (currentUser && branches && !activeBranch) {
      const branchIdToSelect = currentUser.branchId || branches[0]?.branchId;
      const selectedBranch = getBranchById({ branches, branchId: branchIdToSelect });
      setActiveBranch(selectedBranch);
    }
  };

  useEffect(() => {
    initializeCurrentUser();
  }, [userData, isLoggedIn]);

  useEffect(() => {
    initializeActiveBranch();
  }, [branches, currentUser]);

  return <Layout />;
};

export default App;
