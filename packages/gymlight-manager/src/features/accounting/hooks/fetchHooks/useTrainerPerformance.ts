import { useQuery } from '@tanstack/react-query';
// import type { ITrainerPerformance, UseListQueryOptionsType } from '@/types';

// import { fetchTrainerPerformance } from '@/apis';

import { QUERIES } from '@/constants';

export const useTrainerPerformance = () => {
  //   queryOptions?: UseListQueryOptionsType<ITrainerPerformanceResponse>,
  // ) => {
  //   const { data, ...rest } = useQuery({
  //     ...queryOptions,
  //     queryKey: [QUERIES.ACCOUNTING.VARIABLES],
  //     queryFn: fetchTrainerPerformance,
  //     retry: false,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   });

  //   return {
  //     data: data?.data,
  //     ...rest,
  //   };
  return {
    //필요없는 데이터
    ptCount: 33,

    // 현재 적절하게 있는 데이터
    otCount: 45,
    membershipPoint: 55,
    membershipWalkin: 40,

    ptRevenue: 500000,

    // 추가적으로 필요한 데이터
    ptRevenueByWeek: [100000, 1000000, 1000000, 1000000],
    isThisMonthWalkinBenefit: false,
    isNextMonthWalkinBenefit: false,
    ptConductedRevenue: 2000000,

    WeeklyGoalPtRevenueNumbers: 3,
    teamRevenue: 0,
    trainerLevel: 'leader',
  };
};
