import { useRecoilValue } from 'recoil';
import { useForm } from 'gymlight-design-system';

import { hasEmptyFields } from '@/utils';
import { activeBranchState } from '@/states';
import type { ICreateTeamRequest, IUpdateTeamRequest, TeamDepartmentType } from '@/types';

import { useCreateTeam, useTeamModal, useUpdateTeam } from '@/features/team/hooks';

interface TeamFormFields extends ICreateTeamRequest, IUpdateTeamRequest {}
interface UseTeamFormValidationProps {
  teamId?: number;
  teamStaffIds: number[];
  department: TeamDepartmentType;
}

export const useTeamFormValidation = (isEdit?: boolean) => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { register, handleSubmit, reset } = useForm<TeamFormFields>();
  const { closeModal } = useTeamModal();

  const handleSuccess = () => {
    closeModal();
    reset?.();
    window.location.reload();
  };

  const { mutate: createTeam } = useCreateTeam({
    onSuccessAdditional: handleSuccess,
  });
  const { mutate: updateTeam } = useUpdateTeam({
    onSuccessAdditional: handleSuccess,
  });

  const isValid = (formRef: TeamFormFields): boolean => {
    const alertMessage = isEdit ? '팀을 수정하시겠습니까?' : '팀을 등록하시겠습니까?';
    if (hasEmptyFields(formRef)) {
      alert('모든 필수 값을 입력해주세요.');
      return false;
    }
    if (!confirm(alertMessage)) return false;
    return true;
  };

  const getOnValid =
    ({ teamId, teamStaffIds, department }: UseTeamFormValidationProps) =>
    async (formRef: TeamFormFields) => {
      if (!isValid(formRef)) return;

      const { name, teamLeaderId } = formRef;

      if (isEdit) {
        if (!teamId) {
          alert('잘못된 팀 정보입니다.');
          return;
        }
        updateTeam({ name, teamId, teamMemberIds: teamStaffIds });
      } else {
        if (!activeBranch?.branchId) {
          alert('잘못된 지점 정보입니다.');
          return;
        }
        createTeam({
          branchId: activeBranch?.branchId,
          name,
          department,
          teamLeaderId,
          teamMemberIds: teamStaffIds,
        });
      }
    };

  const submitTeamForm = ({ teamId, teamStaffIds, department }: UseTeamFormValidationProps) => {
    return handleSubmit(getOnValid({ teamId, teamStaffIds, department }));
  };

  return {
    register,
    submitTeamForm,
  };
};
