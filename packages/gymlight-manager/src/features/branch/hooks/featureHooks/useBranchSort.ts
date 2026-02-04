import { useState } from 'react';
import type { ForwardRefExoticComponent, SVGProps } from 'react';

import { ChevronUpDownIcon as UnSelectedIcon } from '@heroicons/react/24/outline';

import type { BranchSortType } from '@/types';

import { getSortIconStyle } from '@/utils';
import { BranchTableSortOptions } from '@/constants';

interface ISortToggleButtonProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  buttonName: string;
}

const buttonLabels = {
  branchNumber: '지점 번호',
  branchName: '지점 이름',
  openDate: '오픈일',
} as const;

export const useBranchSort = (initialSortOption: BranchSortType = '오픈일(최신순)') => {
  const [sortParam, setSortParam] = useState<BranchSortType>(initialSortOption);

  const toggleSortParam = (ascOption: BranchSortType, descOption: BranchSortType) => () => {
    setSortParam((prev) => (prev === ascOption ? descOption : ascOption));
  };

  const buttonIconMap = getSortIconStyle<BranchSortType>([...BranchTableSortOptions]);

  const getIcon = (propertyName: string) => {
    return sortParam.includes(propertyName) ? buttonIconMap[sortParam] : UnSelectedIcon;
  };

  const branchNumberButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.branchNumber,
    icon: getIcon('지점 번호'),
    onClick: toggleSortParam('지점 번호(오름차순)', '지점 번호(내림차순)'),
  };

  const branchNameButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.branchName,
    icon: getIcon('지점 이름'),
    onClick: toggleSortParam('지점 이름(가나다순)', '지점 이름(가나다역순)'),
  };

  const openDateButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.openDate,
    icon: getIcon('오픈일'),
    onClick: toggleSortParam('오픈일(최신순)', '오픈일(오래된순)'),
  };

  return {
    sortParam,
    branchNumberButtonProps,
    branchNameButtonProps,
    openDateButtonProps,
  };
};
