import { useEffect } from 'react';

import { useFilterOption } from '@/hooks';
import type { GenderType } from '@/types';

import type { IButtonFilterOptionBoxProps } from '@/components/ButtonFilterOptionBox/ButtonFilterOptionBox';
import type { IDateFilterOptionBoxProps } from '@/components/DateFilterOptionBox/DateFilterOptionBox';

export const useAttendanceFilterOptions = () => {
  const genderFilterOptions: GenderType[] = ['남', '여'] as const;
  const dateFilterOptions = ['기간'] as const;

  const { activeStatusFilterOptions, getRequiredStatusStateToggleHandler } = useFilterOption({
    statusFilterOptions: genderFilterOptions,
  });
  const {
    dateFilterStates,
    getDateStateChangeHandler,
    getDateFilterStateAsArray,
    setDateFilterState,
  } = useFilterOption({ dateFilterOptions });

  const genderFilterOptionBoxProps: IButtonFilterOptionBoxProps = {
    statusName: '성별',
    statusFilterOptions: genderFilterOptions,
    activeStatusFilterOptions: activeStatusFilterOptions,
    getStatusStateToggleHandler: getRequiredStatusStateToggleHandler,
  };

  const dateFilterOptionBoxProps: IDateFilterOptionBoxProps = {
    dateFilterOptions,
    dateFilterStates,
    getDateStateChangeHandler,
  };

  useEffect(() => {
    const date = new Date();
    const initRangeEnd = `${date.getFullYear() + 2}-${date.getMonth() + 1}-${date.getDate()}`;
    const initRangeStart = '2000-01-01';

    setDateFilterState({ dateFilterName: '기간', from: initRangeStart, to: initRangeEnd });
  }, []);

  const [startDateOption, endDateOption] = getDateFilterStateAsArray('기간');

  return {
    genderFilterOptionBoxProps,
    dateFilterOptionBoxProps,
    startDateOption,
    endDateOption,
  };
};
