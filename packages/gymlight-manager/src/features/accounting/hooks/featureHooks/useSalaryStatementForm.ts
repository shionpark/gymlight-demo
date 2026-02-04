import { useEffect, useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { useSalaryVariables, useTrainerPerformance } from '../fetchHooks';
import { ISalaryStatementProps } from '../../components/SalaryStatement/SalaryStatement';
import { formatYYYYMMDD } from '@/utils';
import { usePdf } from '@/hooks';

type PtIncentive = {
  membershipPoints?: number;
  ptRevenue?: number;
  ptOnlyRevenue?: number;
  ratio: number;
};

export const useSalaryStatementForm = () => {
  //
  // fetch SalaryVariables
  // fetch performanceData
  //
  // mutate SalaryStatement
  // mutate contract

  //
  const { data: salaryVariables } = useSalaryVariables();

  const performanceData = useTrainerPerformance();
  const {
    otCount,
    membershipPoint,
    ptRevenue,

    isThisMonthWalkinBenefit,
    isNextMonthWalkinBenefit,
    ptConductedRevenue,
    teamRevenue,
    trainerLevel,
    ptRevenueByWeek,
  } = performanceData;

  const [managerOtCount, setManagerOtCount] = useState(0);

  const [managerTeamRevenue, setManagerTeamRevenue] = useState(0);
  const [managerAdditionalIncentive, setManagerAdditionalIncentive] = useState(0);

  const [managerTrainerSupport, setManagerTrainerSupport] = useState(0);
  const [managerMembershipPoint, setManagerMembershipPoint] = useState(0);
  const [managerPtRevenue, setManagerPtRevenue] = useState(0);
  const [managerPtConductedRevenue, setManagerPtConductedRevenue] = useState(0);
  const [managerWeeklyGoalPtRevenueCount, setManagerWeeklyGoalPtRevenueCount] = useState(0);

  const handleChange =
    (setter: Dispatch<SetStateAction<number>>) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value) || 0;
      setter(value);
    };

  const onChangeManagerOtCount = handleChange(setManagerOtCount);

  const onChangeManagerTeamRevenue = handleChange(setManagerTeamRevenue);
  const onChangeManagerAdditionalIncentive = handleChange(setManagerAdditionalIncentive);
  const onChangeManagerTrainerSupport = handleChange(setManagerTrainerSupport);
  const onChangeManagerMembershipPoint = handleChange(setManagerMembershipPoint);
  const onChangeManagerPtRevenue = handleChange(setManagerPtRevenue);

  const onChangeManagerWeeklyGoalPtRevenueCount = handleChange(setManagerWeeklyGoalPtRevenueCount);
  const onChangeManagerPtConductedRevenue = handleChange(setManagerPtConductedRevenue);

  const [systemOtCount, setSystemOtCount] = useState(0);
  const [systemWeeklyGoalPtRevenueCount, setSystemWeeklyGoalPtRevenueCount] = useState(0);
  const [systemTeamRevenue, setSystemTeamRevenue] = useState(0);

  const [systemTrainerSupport, setSystemTrainerSupport] = useState(0);
  const [systemMembershipPoint, setSystemMembershipPoint] = useState(0);
  const [systemPtRevenue, setSystemPtRevenue] = useState(0);
  const [systemPtConductedRevenue, setSystemPtConductedRevenue] = useState(0);

  useEffect(() => {
    if (performanceData.otCount) {
      setSystemOtCount(performanceData.otCount);
    }
    if (performanceData.WeeklyGoalPtRevenueNumbers) {
      setSystemWeeklyGoalPtRevenueCount(performanceData.WeeklyGoalPtRevenueNumbers);
    }
    if (performanceData.teamRevenue) {
      setSystemTeamRevenue(performanceData.teamRevenue);
    }
    if (performanceData.otCount) {
      setSystemOtCount(performanceData.otCount);
    }
    if (performanceData.membershipPoint) {
      setSystemMembershipPoint(performanceData.membershipPoint);
    }
    if (performanceData.ptRevenue) {
      setSystemPtRevenue(performanceData.ptRevenue);
    }
    if (performanceData.ptConductedRevenue)
      setSystemPtConductedRevenue(performanceData.ptConductedRevenue);
  }, [performanceData]);

  useEffect(() => {
    if (performanceData.trainerLevel && salaryVariables) {
      const trainerSupportValue =
        trainerLevel === 'leader'
          ? salaryVariables.leaderTrainerSupport!
          : trainerLevel === 'newbie'
            ? salaryVariables.newTrainerSupport!
            : salaryVariables.trainerSupport!;

      setSystemTrainerSupport(trainerSupportValue);
    }
    if (performanceData.ptRevenueByWeek && salaryVariables) {
      const ptWeeklyGoalIncentiveCount = performanceData.ptRevenueByWeek.filter(
        (revenue) => revenue > salaryVariables?.weeklyGoalPtRevenue!,
      ).length;
      setSystemWeeklyGoalPtRevenueCount(ptWeeklyGoalIncentiveCount);
    }
  }, [performanceData, salaryVariables]);

  const [managerComment, setManagerComment] = useState('');
  const onChangeManagerComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setManagerComment(event.target.value);
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const days = date.getDate();

  const {
    ref: contractWrapperRef,
    downloadPdf,
    handleGeneratePdfBase64,
    pdfBase64String,
    getBlob,
  } = usePdf({
    paperSize: [260, 160],
    orientation: 'landscape',
  });

  const calculatePtIncentiveRatio = ({
    ptIncentiveRatio,
    trainerLevel,
    trainerPtRevenue,
    trainerMembershipPoints,
    newbieRatio,
  }: {
    ptIncentiveRatio: PtIncentive[];
    trainerLevel: string;
    trainerPtRevenue: number;
    trainerMembershipPoints: number;
    newbieRatio: number;
  }) => {
    let applicableRatio = 0;

    const sortedIncentiveRatio = [...ptIncentiveRatio].sort((a, b) => a.ratio - b.ratio);
    applicableRatio = sortedIncentiveRatio[0]['ratio'];

    for (const condition of ptIncentiveRatio) {
      const { membershipPoints = 0, ptRevenue = 0, ptOnlyRevenue = Infinity, ratio } = condition;

      if (
        (trainerMembershipPoints >= membershipPoints && trainerPtRevenue >= ptRevenue) ||
        trainerPtRevenue > ptOnlyRevenue
      ) {
        applicableRatio = Math.max(applicableRatio, ratio);
      }
      if (
        trainerMembershipPoints < membershipPoints &&
        trainerPtRevenue < ptRevenue &&
        trainerPtRevenue <= ptOnlyRevenue
      ) {
        break;
      }
    }
    if (trainerLevel === '신입' && applicableRatio < newbieRatio) {
      applicableRatio = newbieRatio;
    }
    return applicableRatio * 0.01;
  };

  const ratioFee = calculatePtIncentiveRatio({
    ptIncentiveRatio: [{ membershipPoints: 10, ptRevenue: 10, ptOnlyRevenue: 10, ratio: 10 }],
    trainerLevel: trainerLevel,
    trainerPtRevenue: performanceData.ptRevenue,
    trainerMembershipPoints: performanceData.membershipPoint,
    newbieRatio: salaryVariables?.newTrainerPtRevenueRecognitionRate as number,
  });

  const ptIncentive = ratioFee * managerPtConductedRevenue;

  const otPenalty =
    +salaryVariables?.otPenaltyStandard! > managerOtCount ? salaryVariables?.otPenaltyAmount : 0;

  const weeklyGoalPtIncentive =
    salaryVariables?.generalIncentive! * managerWeeklyGoalPtRevenueCount;

  const teamLeaderIncentive =
    performanceData.trainerLevel === 'leader'
      ? Math.round((salaryVariables?.leaderTrainerIncentiveRate! * managerTeamRevenue) / 100)
      : 0;

  const otIncentive =
    !performanceData.isNextMonthWalkinBenefit &&
    managerOtCount > salaryVariables?.otIncentiveStandard!
      ? (managerOtCount - salaryVariables?.otIncentiveStandard!) * salaryVariables?.otPenaltyAmount!
      : 0;

  const totalSalary = weeklyGoalPtIncentive + teamLeaderIncentive + otIncentive + ptIncentive;
  +salaryVariables?.trainerSupport!;

  const incomeTax = Math.round((totalSalary - otPenalty!) * 0.033);
  const totalDeduction = otPenalty! + incomeTax;
  const actualSalary = totalSalary - totalDeduction;

  const detailMoneyValueTableProps = {
    trainerSupport: managerTrainerSupport,
    ptIncentive,
    otIncentive,
    leaderTrainerIncentive: teamLeaderIncentive,
    weeklyGoalPtIncentive,
    totalDeduction,
    totalSalary,
    isNextMonthWalkinBenefit,

    incomeTax,
    generalIncentive: managerAdditionalIncentive,
    otPenalty: otPenalty as number,
    actualSalary,
  };
  const performanceTableProps = {
    systemOtCount,
    systemWeeklyGoalPtRevenueCount,
    systemTeamRevenue,
    systemTrainerSupport,
    systemMembershipPoint,
    systemPtRevenue,
    systemPtConductedRevenue,

    managerOtCount,
    managerWeeklyGoalPtRevenueCount,
    managerTeamRevenue,
    managerAdditionalIncentive,

    managerTrainerSupport,
    managerMembershipPoint,
    managerPtRevenue,
    managerPtConductedRevenue,
  };

  const performanceTableFormProps = {
    ...performanceTableProps,
    onChangeManagerOtCount,
    onChangeManagerWeeklyGoalPtRevenueCount,
    onChangeManagerTeamRevenue,
    onChangeManagerAdditionalIncentive,
    onChangeManagerTrainerSupport,
    onChangeManagerMembershipPoint,
    onChangeManagerPtRevenue,
    onChangeManagerPtConductedRevenue,
  };

  const statementProps: ISalaryStatementProps = {
    year,
    month,
    managerComment,

    staffProfileTableProps: {
      issuedAt: formatYYYYMMDD(year, month, days),
      staffName: '김트레이너',

      isWalkinBenefit: isThisMonthWalkinBenefit,
      branchName: '서강대점',
      staffRole: trainerLevel,
    },
    performanceTableProps,
    detailMoneyValueTableProps,
  };
  const onSubmit = async () => {
    await handleGeneratePdfBase64();
    downloadPdf();
  };

  return {
    statementProps,
    performanceTableFormProps,
    managerComment,
    onChangeManagerComment,
    statementRef: contractWrapperRef,
    onSubmit,
  };
};

export type UseSalaryStatementFormReturnType = ReturnType<typeof useSalaryStatementForm>;
