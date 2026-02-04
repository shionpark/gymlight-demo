import { ForwardRefExoticComponent, SVGProps, useState } from 'react';

import {
  BarsArrowUpIcon as AscIcon,
  BarsArrowDownIcon as DescIcon,
} from '@heroicons/react/24/outline';

type TrainerSalarySortType =
  | '기본급(오름차순)'
  | '기본급(내림차순)'
  | 'OT 인센티브(오름차순)'
  | 'OT 인센티브(내림차순)'
  | 'PT 인센티브(오름차순)'
  | 'PT 인센티브(내림차순)'
  | '일반 인센티브(오름차순)'
  | '일반 인센티브(내림차순)'
  | '총 급여(오름차순)'
  | '총 급여(내림차순)';

interface ISortToggleButtonProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  buttonName: string;
}

export const useTrainerSalarySort = () => {
  const [sortParam, setSortParam] = useState<TrainerSalarySortType>('총 급여(오름차순)');

  const getNumericIcon = (
    ascCondition: boolean,
  ): ForwardRefExoticComponent<SVGProps<SVGSVGElement>> => (ascCondition ? AscIcon : DescIcon);

  const toggleSortParam =
    (ascOption: TrainerSalarySortType, descOption: TrainerSalarySortType) => () => {
      setSortParam((prev) => (prev === ascOption ? descOption : ascOption));
    };

  const totalSalaryButtonProps: ISortToggleButtonProps = {
    buttonName: '총 급여',
    icon: getNumericIcon(sortParam === '총 급여(오름차순)'),
    onClick: toggleSortParam('총 급여(오름차순)', '총 급여(내림차순)'),
  };

  const baseSalaryButtonProps: ISortToggleButtonProps = {
    buttonName: '기본급',
    icon: getNumericIcon(sortParam === '기본급(오름차순)'),
    onClick: toggleSortParam('기본급(오름차순)', '기본급(내림차순)'),
  };

  const normalSalaryButtonProps: ISortToggleButtonProps = {
    buttonName: '일반 인센티브',
    icon: getNumericIcon(sortParam === '일반 인센티브(오름차순)'),
    onClick: toggleSortParam('일반 인센티브(오름차순)', '일반 인센티브(내림차순)'),
  };

  const otIncentiveButtonProps: ISortToggleButtonProps = {
    buttonName: 'OT 인센티브',
    icon: getNumericIcon(sortParam === 'OT 인센티브(오름차순)'),
    onClick: toggleSortParam('OT 인센티브(오름차순)', 'OT 인센티브(내림차순)'),
  };

  const ptIncentiveButtonProps: ISortToggleButtonProps = {
    buttonName: 'PT 인센티브',
    icon: getNumericIcon(sortParam === 'PT 인센티브(오름차순)'),
    onClick: toggleSortParam('PT 인센티브(오름차순)', 'PT 인센티브(내림차순)'),
  };

  return {
    sortParam,
    totalSalaryButtonProps,
    baseSalaryButtonProps,
    otIncentiveButtonProps,
    ptIncentiveButtonProps,
    normalSalaryButtonProps,
  };
};
