import { useUpdateBranchStatus } from '@/features/branch';
import { BranchStatusType } from '@/types';
import { useForm } from 'gymlight-design-system';

interface IUpdateBranchStatusForm {
  status: BranchStatusType;
}

export const useBranchStatusForm = () => {
  const { mutate } = useUpdateBranchStatus();

  const { register, handleSubmit } = useForm<IUpdateBranchStatusForm>();

  const getOnValid = (branchId: string) => async (form: IUpdateBranchStatusForm) => {
    const isOk = confirm(`정말 지점 상태를 "${form.status}"으로 변경하시겠습니까?`);
    if (isOk) {
      mutate({ branchId: +branchId, status: form.status });
    }
  };

  const onSubmitBranchStatusUpdate = (branchId: number) => {
    return handleSubmit(getOnValid(branchId.toString()));
  };

  return { register, onSubmitBranchStatusUpdate };
};
