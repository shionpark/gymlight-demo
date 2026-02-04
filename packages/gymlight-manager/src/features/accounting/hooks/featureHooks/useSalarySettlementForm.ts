import { SalarySettlementStatusType } from '@/types';

import { useForm } from 'gymlight-design-system';
import { useUpdateSalarySettlement } from '../mutateHooks';
import { useState } from 'react';

interface ISalarySettlementFormFields {
  totalSalary?: number;
  baseSalary?: number;
  otIncentive?: number;
  ptIncentive?: number;
  generalIncentive?: number;
  isWalkinBenefit?: boolean;
  status?: SalarySettlementStatusType;
}

interface IUseSalarySettlementFormArgs {
  salarySettlementId?: number;
}

export const useSalarySettlementForm = ({ salarySettlementId }: IUseSalarySettlementFormArgs) => {
  const [formKey, setFormKey] = useState(0);

  const [isEdit, setIsEdit] = useState(false);
  const handleToggleEdit = () => {
    if (isEdit) {
      setFormKey((prev) => prev + 1);
    }
    setIsEdit((prev) => !prev);
  };
  const { mutate: update } = useUpdateSalarySettlement({
    onSuccessAdditional: () => setFormKey((prev) => prev + 1),
  });

  const { register, handleSubmit } = useForm<ISalarySettlementFormFields>();

  const onValid = async (form: ISalarySettlementFormFields) => {
    const {
      totalSalary,
      baseSalary,
      otIncentive,
      ptIncentive,
      generalIncentive,
      isWalkinBenefit,
      status,
    } = form;
    if (!salarySettlementId) {
      alert('정산 정보를 불러올 수없습니다.');

      return;
    }
    if (confirm('정산서 내용을 수정하시겠습니까?')) {
      update({
        salarySettlementId: +salarySettlementId,
        totalSalary: +totalSalary!,
        baseSalary: +baseSalary!,
        otIncentive: +otIncentive!,
        ptIncentive: +ptIncentive!,
        generalIncentive: +generalIncentive!,
        isWalkinBenefit,
        status,
      });
    }
  };
  const handleClickSubmit = handleSubmit(onValid);

  return { register, handleClickSubmit, isEdit, handleToggleEdit, formKey };
};
