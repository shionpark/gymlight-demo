import { useForm } from 'gymlight-design-system';

import {
  useRequestSalarySettlement,
  useMyExpectedSalary,
  useMyWorkModals,
} from '@/features/myWork';

interface ISettlementRequestFormFields {
  baseSalary: number;
  otIncentive: number;
  ptIncentive: number;
  generalIncentive: number;
}

export const useSettlementRequestForm = () => {
  const { closeModal } = useMyWorkModals();
  const { data: expectedSalaryData } = useMyExpectedSalary();
  const { mutate } = useRequestSalarySettlement({ onSuccessAdditional: () => closeModal() });

  const { handleSubmit, register } = useForm<ISettlementRequestFormFields>();

  const onValid = async (form: ISettlementRequestFormFields) => {
    const { baseSalary, otIncentive, ptIncentive, generalIncentive } = form;
    const numericBaseSalary = +baseSalary;
    const numericOtIncentive = +otIncentive;
    const numericPtIncentive = +ptIncentive;
    const numericGeneralIncentive = +generalIncentive;

    const totalSalary =
      numericBaseSalary + numericOtIncentive + numericPtIncentive + numericGeneralIncentive;

    const confirmMessage = `
  - 기본급: ${numericBaseSalary.toLocaleString()}원
  - OT 인센티브: ${numericOtIncentive.toLocaleString()}원
  - PT 인센티브: ${numericPtIncentive.toLocaleString()}원
  - 기타 인센티브: ${numericGeneralIncentive.toLocaleString()}원
  -------------------------------
  ✅ 총 지급액: ${totalSalary.toLocaleString()}원
  이대로 요청하시겠습니까?
    `;

    const shouldProceed = confirm(confirmMessage);

    if (!shouldProceed) {
      return;
    }
    mutate({
      baseSalary: numericBaseSalary,
      otIncentive: numericOtIncentive,
      ptIncentive: numericPtIncentive,
      generalIncentive: numericGeneralIncentive,
      totalSalary,
    });
  };

  const handleClickRequestSubmit = handleSubmit(onValid);

  return {
    expectedSalaryData,
    handleClickRequestSubmit,
    register,
  };
};
