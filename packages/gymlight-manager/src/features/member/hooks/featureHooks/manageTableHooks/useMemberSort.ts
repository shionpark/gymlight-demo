import { useState } from 'react';
import type { ForwardRefExoticComponent, SVGProps } from 'react';

import { ChevronUpDownIcon as UnSelectedIcon } from '@heroicons/react/24/outline';

import { getSortIconStyle } from '@/utils';

import type { MemberSortType } from '@/types';
import { MemberTableSortOptions } from '@/constants';

interface ISortToggleButtonProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  buttonName: string;
}

const buttonLabels = {
  name: '이름',
  age: '나이',
  joinDate: '가입일',
  startDate: '이용 시작일',
  endDate: '이용 종료일',
  remainingDays: '남은 일수',
  remainingCount: '남은 횟수',
} as const;

export const useMemberSort = (initialSortOption: MemberSortType = '가입일(내림차순)') => {
  const [sortParam, setSortParam] = useState<MemberSortType>(initialSortOption);

  const toggleSortParam = (ascOption: MemberSortType, descOption: MemberSortType) => () => {
    setSortParam((prev) => (prev === ascOption ? descOption : ascOption));
  };

  const buttonIconMap = getSortIconStyle<MemberSortType>([...MemberTableSortOptions]);

  const getIcon = (propertyName: string) => {
    return sortParam.includes(propertyName) ? buttonIconMap[sortParam] : UnSelectedIcon;
  };

  const nameButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.name,
    icon: getIcon('이름'),
    onClick: toggleSortParam('이름(오름차순)', '이름(내림차순)'),
  };

  const ageButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.age,
    icon: getIcon('나이'),
    onClick: toggleSortParam('나이(오름차순)', '나이(내림차순)'),
  };

  const joinDateButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.joinDate,
    icon: getIcon('가입일'),
    onClick: toggleSortParam('가입일(오름차순)', '가입일(내림차순)'),
  };

  const startDateButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.startDate,
    icon: getIcon('이용 시작일'),
    onClick: toggleSortParam('이용 시작일(오름차순)', '이용 시작일(내림차순)'),
  };

  const endDateButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.endDate,
    icon: getIcon('이용 종료일'),
    onClick: toggleSortParam('이용 종료일(오름차순)', '이용 종료일(내림차순)'),
  };

  const remainingDaysButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.remainingDays,
    icon: getIcon('남은 일수'),
    onClick: toggleSortParam('남은 일수(오름차순)', '남은 일수(내림차순)'),
  };

  const remainingCountButtonProps: ISortToggleButtonProps = {
    buttonName: buttonLabels.remainingCount,
    icon: getIcon('남은 횟수'),
    onClick: toggleSortParam('남은 횟수(오름차순)', '남은 횟수(내림차순)'),
  };

  return {
    sortParam,
    nameButtonProps,
    ageButtonProps,
    joinDateButtonProps,
    startDateButtonProps,
    endDateButtonProps,
    remainingDaysButtonProps,
    remainingCountButtonProps,
  };
};
