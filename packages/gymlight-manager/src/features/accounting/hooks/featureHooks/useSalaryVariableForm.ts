import { useState } from 'react';

import { useForm } from 'gymlight-design-system';

import { useUpdateSalaryVariables, useSalaryVariables } from '@/features/accounting';

interface ISalaryVariables {
  leaderTrainerSupport: number;
  trainerSupport: number;
  newTrainerSupport: number;
  otPenaltyStandard: number;
  otPenaltyAmount: number;
  otIncentiveStandard: number;
  otWalkinBenefitStandard: number;
  otIncentive: number;
  walkinMembershipPointConversionRate: number;
  ptRevenueRecognitionRate: number;
  walkinPtRevenueRecognitionRate: number;
  generalIncentive: number;
  leaderTrainerIncentiveRate: number;
  newTrainerPtRevenueRecognitionRate: number;
  weeklyGoalPtRevenue: number;
}

export const useSalaryVariableForm = () => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const { register, errors, handleSubmit } = useForm<ISalaryVariables>();

  const { mutate: update } = useUpdateSalaryVariables();

  const { data: salaryVariables } = useSalaryVariables();

  const cardData: { title: string; data: { name: string; props: {} }[] }[] = [
    {
      title: '영업지원금',
      data: [
        {
          name: '일반 트레이너(원)',

          props: {
            type: 'number',
            ...register({
              name: 'trainerSupport',
            }),
            defaultValue: salaryVariables?.trainerSupport,
          },
        },
        {
          name: '팀장 트레이너(원)',
          props: {
            ...register({ name: 'leaderTrainerSupport' }),
            defaultValue: salaryVariables?.leaderTrainerSupport,
          },
        },
      ],
    },
    {
      title: '신입 트레이너 혜택',
      data: [
        {
          name: '최소 정산 비율(%)',

          props: {
            ...register({
              name: 'newTrainerPtRevenueRecognitionRate',
            }),
            defaultValue: salaryVariables?.newTrainerPtRevenueRecognitionRate,
          },
        },
        {
          name: '정착지원금 (원)',
          props: {
            ...register({ name: 'newTrainerSupport' }),
            defaultValue: salaryVariables?.newTrainerSupport,
          },
        },
      ],
    },
    {
      title: 'OT 패널티',
      data: [
        {
          name: 'OT 요구량 (명)',
          props: {
            ...register({
              name: 'otPenaltyStandard',
            }),
            defaultValue: salaryVariables?.otPenaltyStandard,
          },
        },
        {
          name: '패널티 금액 (원)',
          props: {
            ...register({ name: 'otPenaltyAmount' }),
            defaultValue: salaryVariables?.otPenaltyAmount,
          },
        },
      ],
    },
    {
      title: 'OT 인센티브',
      data: [
        {
          name: 'OT 요구량 (명)',
          props: {
            ...register({
              name: 'otIncentiveStandard',
            }),
            defaultValue: salaryVariables?.otIncentiveStandard,
          },
        },
        {
          name: 'OT 인센티브 (1명당 원)',
          props: {
            ...register({ name: 'otIncentive' }),
            defaultValue: salaryVariables?.otIncentive,
          },
        },
      ],
    },
    {
      title: 'OT 워크인 혜택',
      data: [
        {
          name: 'OT 요구량 (명)',

          props: {
            ...register({
              name: 'otWalkinBenefitStandard',
              defaultValue: salaryVariables?.otWalkinBenefitStandard,
            }),
          },
        },
        {
          name: '워크인포인트 인정비율 (%)',
          props: {
            ...register({ name: 'walkinMembershipPointConversionRate' }),
            defaultValue: salaryVariables?.walkinMembershipPointConversionRate,
          },
        },
      ],
    },
    {
      title: '주간 목표매출 인센티브',
      data: [
        {
          name: '목표 매출금액 (원)',

          props: {
            ...register({
              name: 'weeklyGoalPtRevenue',
            }),
            defaultValue: salaryVariables?.weeklyGoalPtRevenue,
          },
        },
        {
          name: '인센티브 수당 (달성 1주당) (원)',
          props: {
            ...register({ name: 'generalIncentive' }),
            defaultValue: salaryVariables?.generalIncentive,
          },
        },
      ],
    },
    {
      title: 'PT매출액 인정비율',
      data: [
        {
          name: '일반 매출 인정비율 (%)',

          props: {
            ...register({
              name: 'ptRevenueRecognitionRate',
            }),
            defaultValue: salaryVariables?.ptRevenueRecognitionRate,
          },
        },
        {
          name: '워크인 매출 인정비율 (%)',

          props: {
            ...register({
              name: 'walkinPtRevenueRecognitionRate',
            }),
            defaultValue: salaryVariables?.walkinPtRevenueRecognitionRate,
          },
        },
      ],
    },
    {
      title: '팀장 인센티브',
      data: [
        {
          name: '팀PT 매출액 (%)',

          props: {
            ...register({
              name: 'leaderTrainerIncentiveRate',
            }),
            defaultValue: salaryVariables?.leaderTrainerIncentiveRate!,
          },
        },
      ],
    },
  ];

  const onSubmit = async (form: ISalaryVariables) => {
    const {
      leaderTrainerSupport,
      trainerSupport,
      newTrainerSupport,
      otPenaltyStandard,
      otPenaltyAmount,
      otIncentiveStandard,
      otWalkinBenefitStandard,
      otIncentive,
      walkinMembershipPointConversionRate,
      ptRevenueRecognitionRate,
      walkinPtRevenueRecognitionRate,
      generalIncentive,
      leaderTrainerIncentiveRate,
      newTrainerPtRevenueRecognitionRate,
      weeklyGoalPtRevenue,
    } = form;

    const salaryVariablesId = salaryVariables?.salaryVariablesId;
    if (!salaryVariablesId) {
      alert('서버로부터 데이터를 읽어올 수없습니다. 잠시후에 다시 시도해주세요.');
      return;
    }

    update({
      salaryVariablesId: +salaryVariablesId,
      leaderTrainerSupport: +leaderTrainerSupport,
      trainerSupport: +trainerSupport,
      newTrainerSupport: +newTrainerSupport,
      otPenaltyStandard: +otPenaltyStandard,
      otPenaltyAmount: +otPenaltyAmount,
      otIncentiveStandard: +otIncentiveStandard,
      otWalkinBenefitStandard: +otWalkinBenefitStandard,
      otIncentive: +otIncentive,
      walkinMembershipPointConversionRate: +walkinMembershipPointConversionRate,
      ptRevenueRecognitionRate: +ptRevenueRecognitionRate,
      walkinPtRevenueRecognitionRate: +walkinPtRevenueRecognitionRate,
      generalIncentive: +generalIncentive,
      leaderTrainerIncentiveRate: +leaderTrainerIncentiveRate,
      newTrainerPtRevenueRecognitionRate: +newTrainerPtRevenueRecognitionRate,
      weeklyGoalPtRevenue: +weeklyGoalPtRevenue,
    });
  };

  const handleSubmitUpdate = handleSubmit(onSubmit);

  return {
    isEdit,
    toggleIsEdit,
    salaryVariables,
    register,
    errors,
    cardData,
    handleSubmitUpdate,
  };
};
