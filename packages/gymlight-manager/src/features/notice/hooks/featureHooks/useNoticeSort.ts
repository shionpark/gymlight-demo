import { ForwardRefExoticComponent, SVGProps, useState } from 'react';
import {
  BarsArrowUpIcon as AscIcon,
  BarsArrowDownIcon as DescIcon,
} from '@heroicons/react/24/outline';

import type { NoticeSortType } from '@/types';

interface ISortToggleButtonProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  buttonName: string;
}

export const useNoticeSort = () => {
  const [sortParam, setSortParam] = useState<NoticeSortType>('작성일(내림차순)' as NoticeSortType);

  const toggleSortParam = (ascOption: NoticeSortType, descOption: NoticeSortType) => () =>
    setSortParam((prev) => (prev === ascOption ? descOption : ascOption));

  const getNumericIcon = (descCondition: boolean) => (descCondition ? DescIcon : AscIcon);

  const createdAtIcon = getNumericIcon(sortParam === ('작성일(내림차순)' as NoticeSortType));
  const updatedAtIcon = getNumericIcon(sortParam === ('수정일(내림차순)' as NoticeSortType));
  const startDateIcon = getNumericIcon(sortParam === ('시작일(내림차순)' as NoticeSortType));
  const endDateIcon = getNumericIcon(sortParam === ('종료일(내림차순)' as NoticeSortType));

  const createdAtButtonProps: ISortToggleButtonProps = {
    buttonName: '작성일',
    icon: createdAtIcon,
    onClick: toggleSortParam('작성일(내림차순)', '작성일(오름차순)'),
  };

  const updatedAtButtonProps: ISortToggleButtonProps = {
    buttonName: '수정일',
    icon: updatedAtIcon,
    onClick: toggleSortParam('수정일(내림차순)', '수정일(오름차순)'),
  };

  const startDateButtonProps: ISortToggleButtonProps = {
    buttonName: '시작일',
    icon: startDateIcon,
    onClick: toggleSortParam('시작일(내림차순)', '시작일(오름차순)'),
  };

  const endDateButtonProps: ISortToggleButtonProps = {
    buttonName: '종료일',
    icon: endDateIcon,
    onClick: toggleSortParam('종료일(내림차순)', '종료일(오름차순)'),
  };

  return {
    sortParam,
    setSortParam,
    createdAtButtonProps,
    updatedAtButtonProps,
    startDateButtonProps,
    endDateButtonProps,
  };
};
