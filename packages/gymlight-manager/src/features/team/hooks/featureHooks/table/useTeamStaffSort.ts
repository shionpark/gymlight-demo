import { useState } from 'react';
import type { ForwardRefExoticComponent, SVGProps } from 'react';
import {
  BarsArrowUpIcon as AscIcon,
  BarsArrowDownIcon as DescIcon,
} from '@heroicons/react/24/outline';

import type { TeamStaffSortType } from '@/types';

interface ISortToggleButtonProps {
  buttonName: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const useTeamStaffSort = (initialSortOption: TeamStaffSortType = '이름(가나다순)') => {
  const [sortParam, setSortParam] = useState<TeamStaffSortType>(initialSortOption);

  const getNumericIcon = (
    ascCondition: boolean,
  ): ForwardRefExoticComponent<SVGProps<SVGSVGElement>> => (ascCondition ? AscIcon : DescIcon);

  const nameIcon = getNumericIcon(sortParam === '이름(가나다순)');
  const birthDateIcon = getNumericIcon(sortParam === '생일(빠른순)');
  const ageIcon = getNumericIcon(sortParam === '나이(오름차순)');
  const joinDateIcon = getNumericIcon(sortParam === '가입일(오름차순)');

  const toggleSortParam = (ascOption: TeamStaffSortType, descOption: TeamStaffSortType) => () => {
    setSortParam((prev) => (prev === ascOption ? descOption : ascOption));
  };

  const nameButtonProps: ISortToggleButtonProps = {
    buttonName: '이름',
    icon: nameIcon,
    onClick: toggleSortParam('이름(가나다순)', '이름 역순(가나다순)'),
  };

  const birthDateButtonProps: ISortToggleButtonProps = {
    buttonName: '생일',
    icon: birthDateIcon,
    onClick: toggleSortParam('생일(빠른순)', '생일(늦은순)'),
  };

  const ageButtonProps: ISortToggleButtonProps = {
    buttonName: '나이',
    icon: ageIcon,
    onClick: toggleSortParam('나이(오름차순)', '나이(내림차순)'),
  };

  const joinDateButtonProps: ISortToggleButtonProps = {
    buttonName: '가입일',
    icon: joinDateIcon,
    onClick: toggleSortParam('가입일(오름차순)', '가입일(내림차순)'),
  };

  return {
    sortParam,
    setSortParam,
    nameButtonProps,
    birthDateButtonProps,
    ageButtonProps,
    joinDateButtonProps,
  };
};
