import { ForwardRefExoticComponent, SVGProps, useState } from 'react';
import {
  BarsArrowUpIcon as AscIcon,
  BarsArrowDownIcon as DscIcon,
} from '@heroicons/react/24/outline';

import type { StaffSortType } from '@/types';

import { STAFF_SORT_OPTIONS } from '@/features/staff/constants';
interface ISortProps {
  id: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  buttonName: string;
  onClick: () => void;
}

export const useStaffSort = () => {
  const [sortParam, setSortParam] = useState<StaffSortType>(STAFF_SORT_OPTIONS[0]);

  const isDefaultParam = (currentParam: StaffSortType) => {
    return currentParam === '가입일(내림차순)';
  };

  const handleSort = (curState: StaffSortType, toBeState: StaffSortType) => () => {
    setSortParam((prev) => (prev === curState ? toBeState : curState));
  };

  const nameCellProps: ISortProps = {
    id: 'name',
    buttonName: '이름',
    icon: sortParam === '이름(가나다순)' ? AscIcon : DscIcon,
    onClick: handleSort('이름(가나다순)', '이름 역순(가나다순)'),
  };

  const birthDateCellProps: ISortProps = {
    id: 'birthDate',
    buttonName: '생년월일',
    icon: sortParam === '생일(빠른순)' ? AscIcon : DscIcon,
    onClick: handleSort('생일(빠른순)', '생일(늦은순)'),
  };

  const ageCellProps: ISortProps = {
    id: 'age',
    buttonName: '나이',
    icon: sortParam === '나이(오름차순)' ? AscIcon : DscIcon,
    onClick: handleSort('나이(오름차순)', '나이(내림차순)'),
  };

  const joinDateCellProps: ISortProps = {
    id: 'joinDate',
    buttonName: '가입 일시',
    icon: sortParam === '가입일(오름차순)' ? AscIcon : DscIcon,
    onClick: handleSort('가입일(오름차순)', '가입일(내림차순)'),
  };

  const loginFailedCountCellProps: ISortProps = {
    id: 'loginFailedCount',
    buttonName: '로그인 실패 횟수',
    icon: sortParam === '로그인 실패 횟수(오름차순)' ? AscIcon : DscIcon,
    onClick: handleSort('로그인 실패 횟수(오름차순)', '로그인 실패 횟수(내림차순)'),
  };

  const updatedAtCellProps: ISortProps = {
    id: 'updatedAt',
    buttonName: '수정일',
    icon: sortParam === '수정일(오름차순)' ? AscIcon : DscIcon,
    onClick: handleSort('수정일(오름차순)', '수정일(내림차순)'),
  };

  return {
    sortParam,
    setSortParam,
    isDefaultParam,

    nameCellProps,
    birthDateCellProps,
    ageCellProps,
    joinDateCellProps,
    loginFailedCountCellProps,
    updatedAtCellProps,
  };
};
