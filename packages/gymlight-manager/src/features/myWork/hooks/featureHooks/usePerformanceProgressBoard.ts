import { theme } from 'gymlight-design-system';

import {
  FaceSmileIcon as BasicRequirementIcon,
  UserGroupIcon as WalkinBenefitIcon,
  BanknotesIcon as IncentiveIcon,
  // XMarkIcon as FailIcon,
  // CheckIcon as SuccessIcon,
  PencilSquareIcon as MembershipIcon,
  UserPlusIcon as PTRevenueIcon,
  QrCodeIcon as PTIcon,
} from '@heroicons/react/24/outline';

import type { IPinProgressBarProps } from 'gymlight-design-system/dist/components/graphs/PinProgressBar/PinProgressBar';

import type { VariantType } from '../../components/PerformanceProgressBoard/FeeRatioGraph/FeeRatioGraph.styles';

import {
  usePtIncentiveRateWithMembershipPoint,
  usePtIncentiveRateWithoutMembershipPoint,
  useSalaryVariables,
} from '@/features/accounting';
import { useMyPerformance } from '../fetchHooks';
import { IFeeRatioGraphProps } from '../../components/PerformanceProgressBoard/FeeRatioGraph/FeeRatioGraph';
import { useMemo } from 'react';

export const usePerformanceProgressBoard = () => {
  const { data: ptIncentiveRatioWithMembershipPoint } = usePtIncentiveRateWithMembershipPoint();
  const { data: ptIncentiveRateWithPtOnly } = usePtIncentiveRateWithoutMembershipPoint();

  const { data: salaryVariablesData } = useSalaryVariables();
  // 서버데이터 - 급여 변수: OT 관련 기준
  const otPenaltyStandard = salaryVariablesData?.otPenaltyStandard;
  const otIncentiveStandard = salaryVariablesData?.otIncentiveStandard;
  const otWalkinBenefitStandard = salaryVariablesData?.otWalkinBenefitStandard;
  const weeklyPtRevenueGoal = salaryVariablesData?.weeklyGoalPtRevenue;

  const ptOnlyIncentiveRatio = ptIncentiveRateWithPtOnly
    ?.toSorted(
      (a, b) =>
        a.ptIncentiveRateWithoutMembershipPointId - b.ptIncentiveRateWithoutMembershipPointId,
    )
    .map(({ ptIncentiveRecognitionRate, ptRevenue }) => ({
      ptOnlyGoal: ptRevenue,
      ptOnlyIncentiveRatio: ptIncentiveRecognitionRate,
    }));

  const ptWithPointIncentiveRatio = ptIncentiveRatioWithMembershipPoint
    ?.toSorted(
      (a, b) => a.ptIncentiveRateWithMembershipPointId - b.ptIncentiveRateWithMembershipPointId,
    )
    .map(({ ptIncentiveRecognitionRate, ptRevenue, membershipPoints }) => ({
      pointGoal: membershipPoints,
      ptGoal: ptRevenue,

      incentiveRatio: ptIncentiveRecognitionRate,
    }));

  const combinedIncentiveRatio = ptOnlyIncentiveRatio?.map((onlyItem, index) => {
    const withPointItem = ptWithPointIncentiveRatio?.[index];

    return {
      ...onlyItem,
      ...withPointItem,
    };
  });

  // 서버데이터 - 급여 변수: 수업료 비율

  const { data: performanceData } = useMyPerformance();

  // 서버데이터 - 내 실적 데이터
  const otMembersNumber = performanceData?.otCount; // 내가 진행한 OT회원 수
  const point = performanceData?.membershipPoints; // 내 멤버십 포인트

  const ptRevenue = performanceData?.ptRevenue;

  //  내 OT 진행 수 그래프
  const otProgressContainerProps: IPinProgressBarProps = useMemo(
    () => ({
      numeratorNumber: otMembersNumber!,
      numeratorColor: theme.performance.achievement,
      denominatorNumber: otWalkinBenefitStandard!,
      denominatorColor: theme.performance.unAchievement,
      pinCells: [
        {
          label: `최소 요구량:${otPenaltyStandard}`,
          cellIndex: otPenaltyStandard! - 1,
          hasPin: true,
          PinIcon: BasicRequirementIcon,
        },
        {
          label: `인센티브:${otIncentiveStandard}`,
          cellIndex: otIncentiveStandard! - 1,
          hasPin: true,
          PinIcon: IncentiveIcon,
        },
        {
          label: `워크인 혜택:${otWalkinBenefitStandard}`,
          cellIndex: otWalkinBenefitStandard! - 1,
          hasPin: true,
          PinIcon: WalkinBenefitIcon,
        },
      ],
      colorCells: [
        { cellIndex: otPenaltyStandard! - 1, cellColor: theme.performance.basicRequirement },
        { cellIndex: otIncentiveStandard! - 1, cellColor: theme.performance.incentive },
        { cellIndex: otWalkinBenefitStandard! - 1, cellColor: theme.performance.benefit },
      ],
    }),
    [performanceData, salaryVariablesData],
  );

  // 내 주간 PT 목표 매출
  // const weeklyPtGoalGraphProps: IPinProgressBarProps = {
  //   numeratorNumber: 2,
  //   numeratorColor: theme.performance.achievement,
  //   denominatorNumber: 5,
  //   denominatorColor: theme.performance.unAchievement,
  //   pinCells: [
  //     { cellIndex: 0, hasPin: true, PinIcon: FailIcon },
  //     { cellIndex: 1, hasPin: true, PinIcon: SuccessIcon },
  //     { cellIndex: 2, hasPin: true },
  //   ],
  //   colorCells: [
  //     { cellIndex: 0, cellColor: theme.performance.incentive },
  //     { cellIndex: 1, cellColor: theme.performance.achievement },
  //     { cellIndex: 2, cellColor: theme.performance.unAchievement },
  //     { cellIndex: 3, cellColor: theme.performance.unAchievement },
  //     { cellIndex: 4, cellColor: theme.performance.unAchievement },
  //   ],
  // };

  // // 내 이번주 주간 PT 목표 매출 진행현황
  // const currentWeekPtGoalGraphProps = {
  //   numeratorNumber: currentWeekPtRevenue,
  //   denominatorNumber: weeklyPtRevenueGoal,
  //   shape: 'continuous' as const,
  //   numeratorColor: theme.performance.achievement,
  //   denominatorColor: theme.performance.unAchievement,
  // };

  const incentiveRatio = {
    basicIncentiveRatio: ptIncentiveRateWithPtOnly?.[0].ptIncentiveRecognitionRate,
    ratioInfo: combinedIncentiveRatio,
  };

  // 급여 정산 비율 그래프
  const feeRatioGraphColumns = incentiveRatio?.ratioInfo?.map((info) => {
    const ACHIEVED = 'achieved' as VariantType;
    const UNACHIVE = 'unAchieved' as VariantType;

    const pointVariant = point! >= info?.pointGoal! ? ACHIEVED : UNACHIVE;
    const ptVariant = ptRevenue! >= info?.ptGoal! ? ACHIEVED : UNACHIVE;
    const ptOnlyVariant = ptRevenue! >= info.ptOnlyGoal ? ACHIEVED : UNACHIVE;
    const incentiveRatioVariant =
      pointVariant === ACHIEVED && ptVariant === ACHIEVED ? ACHIEVED : UNACHIVE;

    const ptOnlyIncentiveRatio = ptOnlyVariant === ACHIEVED ? ACHIEVED : UNACHIVE;

    return {
      ...info,
      pointVariant,
      ptVariant,
      ptOnlyVariant,
      incentiveRatioVariant,
      ptOnlyIncentiveRatio,
    };
  });

  //@ts-ignore
  const feeRatioGraphProps = {
    feeRatioGraphColumns,
    basicIncentiveRatio: incentiveRatio.basicIncentiveRatio,
  } as IFeeRatioGraphProps;

  // 실적 요약 박스
  const performanceSummaryProps = [
    {
      title: '회원권 등록',
      Icon: MembershipIcon,
      infoParagraph: [`담당: ${point!}개월`],
      onViewButtonClick: () => alert('준비중입니다.'),
    },
    {
      title: 'PT 매출액',
      Icon: PTRevenueIcon,
      infoParagraph: [`담당: ${ptRevenue})`],
      onViewButtonClick: () => alert('준비중입니다.'),
    },
    {
      title: '진행 수업',
      Icon: PTIcon,
      infoParagraph: [`OT진행: ${otMembersNumber} (명)`, `PT수업: ${performanceData?.ptCount} 회`],
      onViewButtonClick: () => alert('준비중입니다.'),
    },
  ];

  return {
    otProgressContainerProps,
    otMembersNumber,
    feeRatioGraphProps,
    // weeklyPtGoalGraphProps,
    // currentWeekPtGoalGraphProps,
    weeklyPtRevenueGoal,
    // currentWeekPtRevenue,
    performanceSummaryProps,
  };
};
