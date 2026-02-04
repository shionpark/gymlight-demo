import { memo } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

import { Bars3Icon } from '@heroicons/react/24/solid';

import { Select } from 'gymlight-design-system';

import { activeBranchState, sidebarIsFoldState } from '@/states';
import type { IUserResponse } from '@/types';

import { useBranchNameList } from '@/features/branch';
import { getBranchById } from '@/features/product';

import { GuestMenu } from './GuestMenu';
import { UserMenu } from './UserMenu';

import * as Styled from './Header.styles';

interface IHeaderProps {
  currentUser?: IUserResponse | null;
  onClickLogout: () => void;
  sidebarIsFold: boolean;
}

const Header = ({ currentUser, onClickLogout, sidebarIsFold }: IHeaderProps) => {
  const location = useLocation();
  const isBranchPage = location.pathname.includes('/branches');

  const [activeBranch, setActiveBranch] = useRecoilState(activeBranchState);
  const setSidebar = useSetRecoilState(sidebarIsFoldState);
  const { data: branches } = useBranchNameList();

  const handleSidebarToggle = () => setSidebar((prev) => !prev);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchId = +e.target.value;
    if (branches) {
      const selectedBranch = getBranchById({ branches, branchId });
      setActiveBranch(selectedBranch);
    }
  };

  const renderBranchSelectorOrName = () => {
    if (!currentUser || isBranchPage) return null;

    if (currentUser.role === '관리자') {
      return (
        <Select
          onChange={handleBranchChange}
          value={activeBranch?.branchId || ''}
          defaultValue={activeBranch?.branchId}
        >
          {branches?.map((branch) => (
            <option key={branch.branchId} value={branch.branchId}>
              {branch.name}
            </option>
          ))}
        </Select>
      );
    }

    const branchName = getBranchById({
      branches: branches || [],
      branchId: currentUser.branchId,
    })?.name;

    return <span>{branchName}</span>;
  };

  return (
    <Styled.Wrapper sidebarIsFold={sidebarIsFold}>
      <Styled.CommonMenus>
        <Bars3Icon onClick={handleSidebarToggle} />
        {renderBranchSelectorOrName()}
      </Styled.CommonMenus>
      <Styled.CustomMenus>
        {currentUser ? (
          <UserMenu currentUser={currentUser} onClickLogout={onClickLogout} />
        ) : (
          <GuestMenu />
        )}
      </Styled.CustomMenus>
    </Styled.Wrapper>
  );
};

export default memo(Header);
