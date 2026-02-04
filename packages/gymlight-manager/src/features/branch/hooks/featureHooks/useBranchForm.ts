import { useForm } from 'gymlight-design-system';

import { IBranchForm } from '@/types';

import { useAddressBox, useModal } from '@/hooks';
import { useCreateBranch, useUpdateBranchInfo } from '@/features/branch';

import { formatYYYYMMDD } from '@/utils';

interface IBranchFormFields extends IBranchForm {
  openedDateYear: string;
  openedDateMonth: string;
  openedDateDay: string;
}

export const useBranchForm = () => {
  const {
    address,
    handleAddressInputChange,
    errorMessage,
    showAddressBox,
    setShowAddressBox,
    handleAddressChange,
    handleErrorChange,
  } = useAddressBox();

  const { mutate: createBranch } = useCreateBranch();
  const { mutate: updateBranch } = useUpdateBranchInfo();

  const { closeModal } = useModal();

  const { register, handleSubmit, reset, errors } = useForm<IBranchFormFields>();

  const onValidCreateBranch = async (form: IBranchFormFields) => {
    const alertMessage = '신규 지점을 등록하시겠습니까?';

    if (!confirm(alertMessage)) {
      return;
    }
    const { openDateYear, openDateMonth, openDateDay, name, code, tel, address } = form;

    const openDate = formatYYYYMMDD(openDateYear, openDateMonth, openDateDay);

    createBranch({ name, code, tel, address, openDate });
    closeModal();
    if (reset) reset();
  };

  const onValidUpdateBranch = (branchId: number) => {
    return async (form: IBranchFormFields) => {
      const alertMessage = '지점 정보를 수정하시겠습니까?';

      if (!confirm(alertMessage)) {
        return;
      }
      const { openDateYear, openDateMonth, openDateDay, name, code, tel, address } = form;

      const openDate = formatYYYYMMDD(openDateYear, openDateMonth, openDateDay);

      updateBranch({ name, code, tel, address, openDate, branchId });
      closeModal();
      if (reset) reset();
    };
  };

  const handleSubmitCreateBranch = handleSubmit(onValidCreateBranch);

  const handleSubmitUpdateBranch = (branchId: number) => {
    const onValid = onValidUpdateBranch(branchId);
    return handleSubmit(onValid);
  };

  const yearRange = Array.from({ length: new Date().getFullYear() - 2020 + 1 }, (_, i) => 2020 + i);

  return {
    address,
    handleAddressInputChange,
    errorMessage,
    showAddressBox,
    setShowAddressBox,
    handleAddressChange,
    handleErrorChange,
    handleSubmitCreateBranch,
    handleSubmitUpdateBranch,

    register,
    errors,
    yearRange,
  };
};
